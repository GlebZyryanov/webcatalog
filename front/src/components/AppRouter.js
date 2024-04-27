import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../Routes";
import { SHOP_ROUTE } from "../utils/consts";
import { Context } from "../index";

const AppRouter = () => {
  const { user } = useContext(Context);

  console.log(user);
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Element }) => (
          <Route key={path} path={path} element={Element} />
        ))}
      {publicRoutes.map(({ path, Element }) => (
        <Route key={path} path={path} element={Element} />
      ))}
      <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;
