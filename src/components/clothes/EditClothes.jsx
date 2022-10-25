import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useClothes } from "../../contexts/ClothesContextProvider";

const EditClothes = () => {
  const { clothesDetails, getClothesDetails, saveEditedClothe } = useClothes();
  const [clothe, setClothe] = useState(clothesDetails);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getClothesDetails(id);
  }, []);

  useEffect(() => {
    setClothe(clothesDetails);
  }, [clothesDetails]);

  function handleInp(e) {
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
  }

  return (
    <>
      {clothe ? (
        <div className="add-block">
          <h2 className="add-title">Edit Page</h2>
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
              saveEditedClothe(clothe);
              navigate("/clothes");
            }}
          >
            Save
          </button>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
};

export default EditClothes;
