import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import MenuDropDown from "./components/Menu/MenuDropDown";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ClothesContextProvider from "./contexts/ClothesContextProvider";

const App = () => {
  return (
    <>
      <ClothesContextProvider>
        <AuthContextProvider>
          <Navbar />
          <MenuDropDown />
          <MainRoutes />
        </AuthContextProvider>
      </ClothesContextProvider>
    </>
  );
};

export default App;
