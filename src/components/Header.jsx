import React from 'react'
import Navbar from '../components/Navbar/Navbar'

const Header = () => {
  return (
    <>
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/wb.svg" alt="" />
          <div>
            <h3 className="text-uppercase">Файл Деризь?</h3>
            <p className="opacity-5">Магазин дешевых товаров</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="" />
            <span>1205 $</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="" />
          </li>
        </ul>
      </header>
      {/* postLogic */}
      <p>POST</p>
      <Navbar />
    </>

  )
}

export default Header