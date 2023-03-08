import React, { useState, useContext } from "react";
import { useAuth } from "../../contexts/AuthContextProvider";
import { Link, useNavigate } from "react-router-dom";
import './RegistrationPage.scss'



const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { register, error } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(username, password);
  };

  return (
    <div className="login-box">
      <h2>Register</h2>
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
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <button onClick={() => register(username, password)}>
          Register
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <p className='register__quest'>Уже есть аккаунт? <Link className='register__link' to='/login'>Войти</Link> </p>
        <Link to='/' className='home'>Вернуться на главную страницу</Link>
      </form>
    </div>
  );
};

export default RegistrationPage;
