import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ACTIONS, API_CLOTHES } from "../helpers/consts";

export const clothesContext = createContext();
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
      return { ...state, clothesDetails: action.paylod };
    default:
      return state;
  }
};

const ClothesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  const getClothes = async () => {
    const { data } = await axios(`${API_CLOTHES}`);
    dispatch({
      type: ACTIONS.GET_CLOTHES,
      payload: data,
    });
  };

  //add fuction
  const addClothe = async (newClothe) => {
    await axios.post(API_CLOTHES, newClothe);
    getClothes();
  };

  const values = {
    clothes: state.clothes,
    clothesDetails: state.clothesDetails,

    addClothe,
    getClothes,
  };

  return (
    <clothesContext.Provider value={values}>
      {children};
    </clothesContext.Provider>
  );
};

export default ClothesContextProvider;
