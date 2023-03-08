import React from "react";
import { Routes, Route } from "react-router-dom";
import BaseContent from "./components/BaseContent/BaseContent";
import RegistrationPage from "./pages//RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage"
import NotFound from "./pages/NotFound";
import AdminPage from "./pages/AdminPage/AdminPage";
import EditProductPage from "./pages/EditProductPage/EditProductPage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";
import LikePage from './pages/LikePage/LikePage';
import CheckAdmin from './pages/AdminPage/CheckAdmin'

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/register",
      element: <RegistrationPage />,
      id: 1,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 2,
    },
    {
      link: "/",
      element: <BaseContent />,
      id: 3,
    },
    {
      link: "/*",
      element: <NotFound />,
      id: 4,
    },
    {
      link: "/details/:id",
      element: <ProductDetailsPage />,
      id: 5,
    },
    {
      link: "/admin",
      element: <CheckAdmin />,
      id: 5,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 6,
    },
    {
      link: "/add",
      element: <AddProductPage />,
      id: 6,
    },
    {
      link: "/like",
      element: <LikePage />,
      id: 6,
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
