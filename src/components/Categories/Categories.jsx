import React from "react";
import ClothesList from "../../components/clothes/ClothesList";
import CategoryDropDown from "../CategoryDropDown/CategoryDropDown";

const Categories = () => {
  return (
    <>
      <CategoryDropDown />
      <ClothesList />
    </>
  );
};

export default Categories;
