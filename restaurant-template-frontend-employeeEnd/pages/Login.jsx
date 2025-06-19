import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {Link} from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault()
    const res = await fetch('http://localhost:5050/api/authenticate/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password }) // or employee
    });

    const data = await res.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('username',username)

      const payload = JSON.parse(atob(data.token.split('.')[1]));
      if (payload.level === 'admin') navigate('/admin');
      else if (payload.level === 'employee') navigate('/employee');
      else navigate('/');
    } else {
      alert('Login failed');
    }
  };

  return (
    <>
    <form onSubmit={handleLogin}>
      <h1>Login Page</h1>
      <label>
        Username
            <input 
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            ></input>
      </label>
      <label>
        Password
            <input 
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             ></input>
      </label>
      <button type="submit">Login as Admin</button>
    </form>
    <Link to="/register">Register</Link>
    </>
  );
}