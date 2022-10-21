import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ClothesPage from "./pages/ClothesPage";
import ClothesDetailsPage from "./pages/ClothesDetailsPage";
import EditClothesPage from "./pages/EditClothesPage";
import NotFoundPage from "./pages/NotFoundPage";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";

const MainRoutes = () => {
  const ALL_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 2,
    },
    {
      link: "/register",
      element: <RegistrationPage />,
      id: 3,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 4,
    },
    {
      link: "/clothes",
      element: <ClothesPage />,
      id: 5,
    },
    {
      link: "/edit/:id",
      element: <EditClothesPage />,
      id: 6,
    },
    {
      link: "/details/:id",
      element: <ClothesDetailsPage />,
      id: 7,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 8,
    },
    {
      link: "/category",
      element: <CategoryPage />,
      id: 9,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 10,
    },
  ];
  return (
    <Routes>
      {ALL_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
