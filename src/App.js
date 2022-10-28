import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ClothesContextProvider from "./contexts/ClothesContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <CartContextProvider>
        <ClothesContextProvider>
          <AuthContextProvider>
            <Navbar />
            <MainRoutes />
          </AuthContextProvider>
        </ClothesContextProvider>
      </CartContextProvider>
    </>
  );
};

export default App;
