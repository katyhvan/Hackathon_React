import React, { useState } from "react";
import { useClothes } from "../../contexts/ClothesContextProvider";
import { useNavigate } from "react-router-dom";

import "../../styles/AddClothes.css";

const AddClothes = () => {
  const { addClothe } = useClothes();
  const navigate = useNavigate();

  const [clothe, setClothe] = useState({
    title: "",
    desc: "",
    price: "",
    img: "",
    type: "",
    category: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...clothe,
        [e.target.name]: Number(e.target.value),
      };
      setClothe(obj);
    } else {
      let obj = {
        ...clothe,
        [e.target.name]: e.target.value,
      };
      setClothe(obj);
    }
  };

  return (
    <>
      <div className="add-block">
        <h2 className="add-title">Admin Page</h2>
        <input
          className="add-inp"
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleInp}
          value={clothe.title}
        />

        <input
          className="add-inp"
          type="text"
          name="desc"
          placeholder="Description"
          onChange={handleInp}
          value={clothe.desc}
        />

        <input
          className="add-inp"
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleInp}
          value={clothe.price}
        />

        <input
          className="add-inp"
          type="text"
          name="img"
          placeholder="Image URL"
          onChange={handleInp}
          value={clothe.img}
        />

        <input
          className="add-inp"
          type="text"
          name="type"
          placeholder="Type"
          onChange={handleInp}
          value={clothe.type}
        />

        <input
          className="add-inp"
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleInp}
          value={clothe.category}
        />

        <button
          className="add-btn"
          onClick={() => {
            addClothe(clothe);
            navigate("/clothes");
          }}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default AddClothes;
