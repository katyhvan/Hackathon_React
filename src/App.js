import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
// import MenuDropDown from "./components/Menu/MenuDropDown";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ClothesContextProvider from "./contexts/ClothesContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <CartContextProvider>
        <ClothesContextProvider>
          <AuthContextProvider>
            <Navbar />
            {/* <MenuDropDown /> */}
            <MainRoutes />
          </AuthContextProvider>
        </ClothesContextProvider>
      </CartContextProvider>
    </>
  );
};

export default App;
