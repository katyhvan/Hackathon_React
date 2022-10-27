import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { useClothes } from "../../contexts/ClothesContextProvider";

const CategoryDropDown = () => {
  const { fetchByParams } = useClothes();
  const navigate = useNavigate();

  return (
    <>
      <div>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Categories"
          menuVariant="dark"
          onChange={(e) => fetchByParams("category", e.target.value)}
        >
          <NavDropdown.Item
            value="all"
            onClick={(e) => fetchByParams("category", "all")}
          >
            All
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={(e) => fetchByParams("category", "jackets")}
          >
            Jackets
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={(e) => fetchByParams("category", "hoodies")}
          >
            Hoodies
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={(e) => fetchByParams("category", "t-shirt")}
          >
            T-Shirt
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={(e) => fetchByParams("category", "skirts")}
          >
            Skirts
          </NavDropdown.Item>
          <NavDropdown.Item onClick={(e) => fetchByParams("category", "shoes")}>
            Shoes
          </NavDropdown.Item>
          <NavDropdown.Item onClick={(e) => fetchByParams("category", "pants")}>
            Pants
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={(e) => fetchByParams("category", "accessories")}
          >
            Accessories
          </NavDropdown.Item>
        </NavDropdown>
      </div>
    </>
  );
};

export default CategoryDropDown;
