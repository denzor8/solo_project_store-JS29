import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Header.scss'
//
const settings = [
  {
    type: "Register",
    path: "/register",
  },
  {
    type: "Login",
    path: "/login",
  },
];
const HeaderAdmin = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };
  return (
    <div className="wrapper1 clear">
      <header className="d-flex justify-between align-center p-30">
        <div
          className="d-flex align-center cu-p"
          onClick={() => navigate("/")}
        >
          <img width={40} height={40} src="/img/wb.svg" alt="" />
          <div>
            <h3 className="text-uppercase">Админская платформа</h3>
            <p className="opacity-5">РАБОТАЙ</p>
          </div>
        </div>
        <ul className="d-flex">
          <li
            onClick={() => navigate("/add")}
            className='mr-20 cu-p'
          >
            Add Product
          </li>
          <li
            onClick={() => logout()}
            className='mr-20 cu-p'
          >
            Admin
          </li>
        </ul>
      </header>
    </div>

  )
}

export default HeaderAdmin