import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import "../styles/Register.css";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useAuth();

  function handleRegister() {
    register(username, password);
  }

  return (
    <div className="RegisterForm">
      <h1>Register Form</h1>
      <br />
      <input
        className="userNameInp"
        type="text"
        placeholder="UserName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        className="passwordInp"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button className="buttonRegister" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default RegistrationPage;
