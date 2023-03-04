import React, { useState } from "react";
import { useAuth } from "../../../../../contexts/AuthContextProvider";
import { Link } from "react-router-dom";
import axios from "axios";
import './RegistrationPage.scss'
// email: e.target[0].value,
// login: e.target[1].value,
// tel: e.target[2].value,
// password: e.target[3].value,
// orders: []
const RegistrationPage = () => {
  const registerUser = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/register", {
      ...e,
      orders: []
    }).then((res) => {
      console.log(res)
    })

  }
  return (
    <div className="signup">
      <form className="register">
        <h2 className="register__title" >Регистрация</h2>
        <input className="register__email" name="email" type="email" placeholder="Введите email" />
        <br />
        <input className="register__login" name="login" type="text" placeholder="Введите login" />
        <br />
        <input className="register__tel" name="tel" type="tel" placeholder="Введите номер" />
        <br />
        <input className="register__password" name="password" type="password" placeholder="Введите пароль" />
        <br />
        <input className="register__password" name="password" type="password" placeholder="Подтвердить пароль" />
        <br />

        <button className="register__btn" type="submit">Регистрация</button>
        <p className="register__signin">
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationPage;
