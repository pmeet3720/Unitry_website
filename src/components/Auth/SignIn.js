// SignIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Correctly imported useNavigate
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../firebase/auth';
import './SIGN.css';
 // Ensure this is the correct path

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Correctly using useNavigate

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Navigate to homepage or dashboard after sign-in
    } catch (error) {
      alert(error.message); // Handle errors
    }
  };
  return (
    <div className="auth-container">
      <form onSubmit={handleSignIn} className="auth-form">
        <h2>Sign In</h2>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
