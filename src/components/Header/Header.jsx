import React from 'react'
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap/';
import '../../style/index.scss'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContextProvider'

//


import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
//! custom

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
const Header = () => {
  // 
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  //
  const navigate = useNavigate();
  const { logout, user, checkAuth } = useAuth();
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);
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
          <Link to="/cart">
            <li className="mr-30">
              <img width={18} height={18} src="/img/cart.svg" alt="" />
              <span>1205 $</span>
            </li>
          </Link>
            {/* <li onClick={() => navigate()}>
              <img width={18} height={18} src="/img/user.svg" alt="" />
            </li> */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Profile">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user} src="..." />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.type} onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      onClick={() => navigate(setting.path)}
                    >
                      {setting.type}
                    </Typography>
                  </MenuItem>
                ))}
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={logout}>
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

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