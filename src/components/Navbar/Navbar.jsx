import React from "react";
import { useNavigate } from "react-router-dom";
import MenuDropDown from "../Menu/MenuDropDown";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "../../styles/Navbar.css";

const pages = [
  {
    type: "Home",
    path: "/",
  },
  {
    type: "Sport Clothes",
    path: "/clothes",
  },
  {
    type: "Admin",
    path: "/admin",
  },
  {
    type: "Category",
    path: "/category",
  },
];

const cartPage = [
  {
    path: "/cart",
  },
];

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

function Navbar() {
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <div className="header">
        <div className="navbar-right">
          <img
            className="logo-img"
            src="https://www.pngall.com/wp-content/uploads/2016/06/Nike-Logo-PNG.png"
            alt="Logo"
            width="50"
            onClick={() => navigate("/")}
          />
          <div className="burger-menu">
            <div className="burger-btn"></div>
            <div className="burger-btn"></div>
            <div className="burger-btn"></div>
          </div>
          <ul className="navbar-menu">
            {pages.map((page) => (
              <li className="item-menu" onClick={() => navigate(page.path)}>
                {page.type}
              </li>
            ))}
          </ul>
        </div>
        <div className="search-block">
          <input type="text" placeholder="Search..." className="search-inp" />
        </div>
        <div className="navbar-left">
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src="/static/images/avatar/2.jpg" />
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
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
          {cartPage.map((cartP) => (
            <ShoppingCartIcon
              className="cart-icon"
              onClick={() => navigate(cartP.path)}
            />
          ))}
        </div>
      </div>
      <MenuDropDown />
    </>
  );
}
export default Navbar;
