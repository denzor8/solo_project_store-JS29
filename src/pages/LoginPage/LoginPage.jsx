import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContextProvider";
import { Link } from "react-router-dom";
import './LoginPage.scss'

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <button type="submit">
            Login
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <p className='login__quest'>нет аккаунат? <Link className='login__link' to='/register'>Регистрация</Link> </p>
          <Link to='/' className='home'>Вернуться на главную страницу</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
