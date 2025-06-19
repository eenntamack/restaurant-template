import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

import { employeeSchema } from '../schemas/employees.js';

const router = express.Router();

const Employee = mongoose.models.employeeSchema || mongoose.model('employeeSchema', employeeSchema);

// 🔐 LOGIN route
router.post('/login', async (req, res) => {
  try {
    const SECRET_KEY = process.env.JWT_SECRET;
    const { username, password } = req.body;

    const user = await Employee.findOne({ username: username });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { username: user.username, level: user.position },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (err) {
    console.error("🔥 Login error:", err);
    res.status(500).json({ message: 'Server error' });
  }
});

// 🧾 REGISTER route
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    const existing = await Employee.findOne({ username: username });
    if (existing) return res.status(400).json({ message: 'Username already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser =  new Employee({
      username: username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error("🔥 Registration error:", err);
    res.status(500).json({ message: 'Server error' });
  }
});

export { router };