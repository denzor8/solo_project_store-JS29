import React from 'react'
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap/';
import '../../style/index.scss'

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
      <>
        {/* content tipa sidebar */}
        <Navbar expand="lg">
          <Container className='mr-50 ml-50'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="Категория" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">All</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    Electonics
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Sneakers</NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.4">
                    Clothes
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Sport
                  </NavDropdown.Item>
                </NavDropdown>

              </Nav>
            </Navbar.Collapse>
            <div className="search-block d-flex ">
              <img src="/img/search.svg" alt="Search" />
              <input placeholder="Поиск..." />
            </div>
          </Container>
        </Navbar>
      </>
    </>

  )
}

export default Header