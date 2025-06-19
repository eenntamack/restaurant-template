import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const handleLogin = async (e) => {

    if(password == confirmPassword){
        e.preventDefault()
        const res = await fetch('http://localhost:5050/api/authenticate/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, password: password }) // or employee
        });

        const data = await res.json();
        if (data.message) {
            navigate("/")
        } else {
            alert('Registration failed');
        }
    }
    
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Registration Page</h1>
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
      <label>
        Confirm Password
            <input 
            type="password"
            name="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
             ></input>
      </label>
      <button type="submit">Register</button>
    </form>
  );
}