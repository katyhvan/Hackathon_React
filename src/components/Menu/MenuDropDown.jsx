import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/MenuDropDown.css";

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
  {
    type: "Cart",
    path: "/cart",
  },
];

const MenuDropDown = ({ active, setActive }) => {
  const navigate = useNavigate();
  return (
    <div
      className={active ? "menu-dropdown active" : "menu-dropdown"}
      onClick={() => setActive(false)}
    >
      {pages.map((page) => (
        <div className="menu-drop" onClick={() => navigate(page.path)}>
          {page.type}
        </div>
      ))}
    </div>
  );
};

export default MenuDropDown;
