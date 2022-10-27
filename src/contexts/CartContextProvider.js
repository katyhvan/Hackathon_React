import React, { createContext, useContext, useReducer } from "react";
import { API_ORDERS, CART } from "../helpers/consts";
import {
  getCountClothesInCart,
  calcSubPrice,
  calcTotalPrice,
} from "../helpers/functions";

import axios from "axios";

const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: getCountClothesInCart(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CART.GET_CART:
      return { ...state, cart: action.payload };
    case CART.GET_CART_LENGTH:
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          clothes: [],
          totalPrice: 0,
        })
      );

      cart = {
        clothes: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };

  const addClotheToCart = (clothe) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      cart = {
        clothes: [],
        totalPrice: 0,
      };
    }

    let newClothe = {
      item: clothe,
      count: 1,
      subPrice: +clothe.price,
    };

    let clotheToFind = cart.clothes.filter(
      (elem) => elem.item.id === clothe.id
    );

    if (clotheToFind.length === 0) {
      cart.clothes.push(newClothe);
    } else {
      cart.clothes = cart.clothes.filter((elem) => elem.item.id !== clothe.id);
    }

    cart.totalPrice = calcTotalPrice(cart.clothes);
    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };

  const changeClotheCount = (count, id) => {
    if (count < 1) {
      alert("Count of clothes can not be negative!");
      return;
    }

    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.clothes = cart.clothes.map((clothe) => {
      if (clothe.item.id === id) {
        clothe.count = count;
        clothe.subPrice = calcSubPrice(clothe);
      }
      return clothe;
    });

    cart.totalPrice = calcTotalPrice(cart.clothes);

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };

  function deleteClotheInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.clothes = cart.clothes.filter((elem) => elem.item.id !== id);

    cart.totalPrice = calcTotalPrice(cart.clothes);
    localStorage.setItem("cart", JSON.stringify(cart));

    getCart();

    dispatch({
      type: CART.GET_CART_LENGTH,
      payload: cart,
    });
  }

  //add order
  const addOrder = (newOrder) => {
    axios.post(API_ORDERS, newOrder);
    alert("You ordered successfully");
  };

  const values = {
    cart: state.cart,
    cartLength: state.cartLength,

    getCart,
    addClotheToCart,
    changeClotheCount,
    deleteClotheInCart,
    addOrder,
  };

  return (
    <>
      <cartContext.Provider value={values}>{children}</cartContext.Provider>
    </>
  );
};

export default CartContextProvider;
