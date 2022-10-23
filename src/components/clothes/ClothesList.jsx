import React, { useEffect, useState } from "react";
import { useClothes } from "../../contexts/ClothesContextProvider";
import { useSearchParams } from "react-router-dom";

import ClothesCard from "./ClothesCard";
import FilterClothes from "./FilterClothes";

const ClothesList = () => {
  const { clothes, getClothes } = useClothes();

  useEffect(() => {
    getClothes();
  }, []);

  return (
    <>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {clothes ? (
          clothes.map((item) => <ClothesCard key={item.id} item={item} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </>
  );
};

export default ClothesList;
