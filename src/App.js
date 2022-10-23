import React from "react";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import ClothesContextProvider from "./contexts/ClothesContextProvider";

const App = () => {
  return (
    <>
      <ClothesContextProvider>
        <Navbar />
        <MainRoutes />
      </ClothesContextProvider>
    </>
  );
};

export default App;
