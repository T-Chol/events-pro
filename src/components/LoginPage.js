import React, { useState } from "react";
import Axios from "axios";

export default function LoginPage({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const login = () => {
    Axios.post("http://localhost:3002/login", { email, password })
      .then((response) => {
        const user = response.data.user;
        localStorage.setItem("user", JSON.stringify(user));  // Stores user details in localStorage
        setMessage("Login successful!");
        onClose();
      })
      .catch((error) => {
        setMessage("Tough luck!. Please try again.");
        console.error(error);
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span> 
        <h1>Login</h1>
        <p>Enter your email and password to log in.</p>
        <input
          type="email"
          placeholder="Type email here..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>Login</button>
        {message && <p>{message}</p>} 
      </div>
    </div>
  );
}
