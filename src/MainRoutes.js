import React from "react";
import { Routes, Route } from "react-router-dom";
import BaseContent from "./components/BaseContent/src/components/BaseContent/BaseContent";
import RegistrationPage from "./components/BaseContent/src/pages/RegistrationPage/RegistrationPage";
import LoginPage from "./components/BaseContent/src/pages/LoginPage/LoginPage";
import NotFound from "./components/BaseContent/src/pages/NotFound";

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
      id: 3,
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
