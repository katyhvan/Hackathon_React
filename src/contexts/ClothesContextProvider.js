import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ACTIONS, API_CLOTHES } from "../helpers/consts";

const clothesContext = createContext();
export const useClothes = () => useContext(clothesContext);

const INIT_STATE = {
  clothes: [],
  clothesDetails: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_CLOTHES:
      return { ...state, clothes: action.payload };
    case ACTIONS.GET_CLOTHE_DETAILS:
      return { ...state, clothesDetails: action.payload };
    default:
      return state;
  }
};

const ClothesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  const location = useLocation();

  //read
  const getClothes = async () => {
    const { data } = await axios(`${API_CLOTHES}/${window.location.search}`);
    dispatch({
      type: ACTIONS.GET_CLOTHES,
      payload: data,
    });
  };

  //add
  const addClothe = async (newClothe) => {
    await axios.post(API_CLOTHES, newClothe);
    alert("Successfully added new article!");
    getClothes();
  };

  //delete
  async function deleteClothe(id) {
    await axios.delete(`${API_CLOTHES}/${id}`);
    getClothes();
  }

  //edit logic
  //details
  async function getClothesDetails(id) {
    const { data } = await axios(`${API_CLOTHES}/${id}`);

    console.log(data);
    dispatch({
      type: ACTIONS.GET_CLOTHE_DETAILS,
      payload: data,
    });
  }

  async function saveEditedClothe(newClothe) {
    await axios.patch(`${API_CLOTHES}/${newClothe.id}`, newClothe);
    getClothes();
  }

  //filter
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${location.pathname}?${search.toString()}`;

    navigate(url);
  };

  const values = {
    clothes: state.clothes,
    clothesDetails: state.clothesDetails,

    addClothe,
    getClothes,
    deleteClothe,
    getClothesDetails,
    saveEditedClothe,
    fetchByParams,
  };

  return (
    <clothesContext.Provider value={values}>{children}</clothesContext.Provider>
  );
};

export default ClothesContextProvider;
