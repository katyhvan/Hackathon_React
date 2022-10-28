import React, { useEffect, useState } from "react";
import { useClothes } from "../../contexts/ClothesContextProvider";
import Pagination from "@mui/material/Pagination";

import ClothesCard from "./ClothesCard";
import FilterClothes from "./FilterClothes";

const ClothesList = () => {
  const { clothes, getClothes } = useClothes();

  useEffect(() => {
    getClothes();
  }, []);

  // pagination
  const [page, setPage] = useState(1);

  const itemsOnPage = 5;

  const count = Math.ceil(clothes.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return clothes.slice(begin, end);
  }

  return (
    <>
      <FilterClothes className="filter-radio" />
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
          currentData().map((item) => <ClothesCard key={item.id} item={item} />)
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
      <div>
        <Pagination
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1%",
          }}
          className="pagination"
          count={count}
          page={page}
          onChange={handlePage}
        />
      </div>
    </>
  );
};

export default ClothesList;
