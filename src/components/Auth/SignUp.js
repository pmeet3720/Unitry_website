// SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/auth';// Ensure this is the correct path
import './SIGN.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); // Navigate to homepage after sign-up
    } catch (error) {
      alert(error.message); // Handle errors
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSignUp} className="auth-form">
        <h2>Sign Up</h2>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
