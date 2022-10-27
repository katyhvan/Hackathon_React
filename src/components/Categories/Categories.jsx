import React from "react";
import { useClothes } from "../../contexts/ClothesContextProvider";
import ClothesList from "../../components/clothes/ClothesList";
import CategoryDropDown from "../CategoryDropDown/CategoryDropDown";
const Categories = () => {
  const { clothes, getClothes } = useClothes();

  return (
    <>
      <CategoryDropDown />
      <ClothesList />
    </>
  );
};

export default Categories;
