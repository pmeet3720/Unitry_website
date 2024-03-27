// SignUp.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./AuthForm.css"; // Using the updated CSS file name
import { useAuth } from '../../context/AuthContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { signup, currentUser, signInWithGoogle, signInWithFacebook } = useAuth();
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      navigate('/'); // Navigate to homepage after sign-up
    } catch (error) {
      alert(error.message); // Handle errors
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleFacebookSignUp = async () => {
    try {
      await signInWithFacebook();
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  return (
    <div className="auth-container">
      <form onSubmit={handleSignUp} className="auth-form">
        <h2>Sign Up</h2>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button className="auth-button" type="submit">Sign Up</button>
        <button type="button" onClick={handleGoogleSignUp} className="social-login-button google">Sign up with Google</button>
        <button type="button" onClick={handleFacebookSignUp} className="social-login-button facebook">Sign up with Facebook</button>
      </form>
    </div>
  );
};

export default SignUp;
