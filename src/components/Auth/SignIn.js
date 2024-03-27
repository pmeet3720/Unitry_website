// SignIn.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthForm.css"; // Renamed CSS file for clarity
import { useAuth } from "../../context/AuthContext";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signin, currentUser, signInWithGoogle, signInWithFacebook } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signin(email, password);
      navigate("/"); // Navigate to homepage or dashboard after sign-in
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleFacebookSignIn = async () => {
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
      <form onSubmit={handleSignIn} className="auth-form">
        <h2>Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="auth-button" type="submit">Sign In</button>
        <button type="button" onClick={handleGoogleSignIn} className="social-login-button google">Sign in with Google</button>
        <button type="button" onClick={handleFacebookSignIn} className="social-login-button facebook">Sign in with Facebook</button>
      </form>
    </div>
  );
};

export default SignIn;