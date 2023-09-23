import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Stats } from "./Stats";
import { AddProduct } from "./AddProduct";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/addProduct" element={<AddProduct />} />
    </Routes>
  );
};
