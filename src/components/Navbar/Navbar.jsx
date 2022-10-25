import React, { useEffect, useState } from "react";
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
import { useAuth } from "../../contexts/AuthContextProvider";
import { useSearchParams } from "react-router-dom";
import { useClothes } from "../../contexts/ClothesContextProvider";
import ClothesCard from "../clothes/ClothesCard";
// import ClothesList from "../clothes/ClothesList";
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
  const { user, checkAuth, logout } = useAuth();

  const [menuActive, setMenuActive] = useState();

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  // const ClothesList = () => {
  const { clothes, getClothes } = useClothes();
  useEffect(() => {
    getClothes();
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  useEffect(() => {
    // console.log(
    //   "Сработал юз эффект для местного состояния, установка параметров запроса"
    // );
    setSearchParams({
      q: search,
    });
  }, [search]);
  useEffect(() => {
    // console.log(
    //   "Сработал юз эффект, который следит за изменением параметров запроса, вызвана функция получения всех продуктов(с параметрами запроса)"
    // );
    getClothes();
  }, [searchParams]);

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <div className="header">
        <div className="navbar-right">
          <img
            className="logo-img"
            src="https://miro.medium.com/max/900/0*9hcinRdaHicrNpNE.jpg"
            alt="Logo"
            width="50"
            onClick={() => navigate("/")}
          />
          <div
            className="burger-menu"
            onClick={() => setMenuActive(!menuActive)}
          >
            <div className="burger-btn"></div>
            <div className="burger-btn"></div>
            <div className="burger-btn"></div>
          </div>
          <ul className="navbar-menu">
            {pages.map((page) => (
              <li
                style={{ cursor: "pointer" }}
                className="item-menu"
                onClick={() => navigate(page.path)}
              >
                {page.type}
              </li>
            ))}
          </ul>
        </div>
        <div
          style={{
            margin: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <input
            className="search-inp"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            label="Search"
          />
        </div>
        <div className="navbar-left">
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  style={{ cursor: "pointer" }}
                  alt={user}
                  src="/static/images/avatar/2.jpg"
                />
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
          {cartPage.map((cartP) => (
            <ShoppingCartIcon
              style={{ cursor: "pointer" }}
              className="cart-icon"
              onClick={() => navigate(cartP.path)}
            />
          ))}
        </div>
      </div>
      <MenuDropDown active={menuActive} setActive={setMenuActive} />
    </>
  );
}
export default Navbar;
