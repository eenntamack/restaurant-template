import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { employeeSchema } from '../schemas/employees.js';

const router = express.Router();

// Create model only if not already created (for hot reloads in dev)
const Employee = mongoose.models.Employee || mongoose.model('Employee', employeeSchema);

// GET all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST - Add a new employee
router.post('/', async (req, res) => {
  try {
    const { username, password, ...rest } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newEmployee = new Employee({
      ...rest,
      username,
      password: hashedPassword
    });

    await newEmployee.save();
    res.status(201).json({ message: 'Employee created' });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Error creating employee' });
  }
});

// PUT - Update an employee
router.put('/:id', async (req, res) => {
  try {
    const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Update failed' });
  }
});

// DELETE - Remove an employee
router.delete('/:id', async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Deletion failed' });
  }
});

export { router };