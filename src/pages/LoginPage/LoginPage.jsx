import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContextProvider";
import { Link } from "react-router-dom";
import RegistrationPage from "../RegistrationPage/RegistrationPage";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="signup">
      <form className="register">
        <h2 className="register__title" >Вход в аккаунт</h2>
        <input className="register__email" type="email" placeholder="Введите email" />
        <br />
        <input className="register__password" type="password" placeholder="Введите пароль" />
        <br />
        <button className="register__btn" type="submit">Войти</button>
        <p className="register__signin">
          Нет аккаунта?   <Link to="/register">Регистрация</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
