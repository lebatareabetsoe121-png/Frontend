import React, { useState } from "react";
import backer from './backer.gif';
import Banner from './Banner';
import { useNavigate } from "react-router-dom";
import limkologo from "./limkologo.jpg";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] =useState("");
  const [loading, setLoading] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
      try {

      const res = await fetch("/register",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: username,
          email,
          password,
          role: "student", 
          department: "ICT", 
        }),
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        setMessage("Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setMessage(`❌ ${data.message || "Registration failed"}`);
      }
    } catch (err) {
      console.error("Server error:", err);
      setMessage("❌ Server error. Please try again later.");
      setLoading(false);
    }
  };
  
  return (
    <>
    <div className="lcontainer">
      <div className="login-container">
        <div className="log">
          <img src={limkologo} alt="App Logo" className="logo" />
        </div>

        <div className="lbox">
          <h2 className="ltitle">Student Registration</h2>
          {error && <div className="error-msg">{error}</div>}

          <form onSubmit={handleRegister}>
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
              />
            </div>

            <button type="submit" className="login-button">
              Register
            </button>
          </form>

          <div className="register-link">
            <p>
              Already have an account?{" "}
              <span
                className="link-text"
                onClick={() => navigate("/login")}
                style={{ cursor: "pointer", color: "blue" }}>Login here</span>

            </p>
          </div>
        </div>
      </div>
    </div>

        <div className="container">
      <Banner image={backer}/>
      </div>
      </>
  )
}

export default Register;
