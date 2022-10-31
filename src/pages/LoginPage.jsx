import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContextProvider";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  function handleLogin() {
    login(username, password);

    if (!username || !password) {
      alert("Some inputs are empty!");
      return;
    }

    let newAuth = {
      username,
      password,
    };

    LoginPage(newAuth);
  }

  return (
    <div className="RegisterForm">
      <h1 className="login-title">Login Form</h1>
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
      <button className="buttonRegister" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
