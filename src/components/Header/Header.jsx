import React, { useContext, useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContextProvider'
import { useCart } from '../../contexts/CartContextProvider'
import { useLike } from '../../contexts/LikeContextProvider';

//
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import '../../style/index.scss'
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
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
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
  const { cart, openCart, cartLength } = useCart();
  const { likeOpened, openLike } = useLike();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-30">
        <div
          className="d-flex align-center cu-p"
          onClick={() => navigate("/")}
        >
          <img width={40} height={40} src="/img/wb.svg" alt="" />
          <div>
            <h3 className="text-uppercase">Файл Деризь?</h3>
            <p className="opacity-5">Магазин дешевых товаров</p>
          </div>
        </div>
        <ul className="d-flex">
          <li
            onClick={() => navigate("/admin")}
            className='mr-20 cu-p'
          >
            Admin
          </li>
          <li
            className="mr-10 cu-p"
            onClick={() => navigate("/like")}
          >
            <img
              width={27}
              height={27}
              src="/img/heart.svg"
              alt="" />
          </li>
          <li
            className="mr-30 cu-p"
            onClick={() => openCart()}
          >
            <img
              onClick={() => cartLength}
              width={18}
              height={18}
              src="/img/cart.svg"
              alt="" />
            <b> ${cart?.totalPrice}</b>
          </li>

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
                    onClick={() => navigate(setting.path)}>
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
    </div>

  )
}

export default Header