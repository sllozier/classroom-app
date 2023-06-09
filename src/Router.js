import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, PageNotFound } from "./components";

//import all components here

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route index path="/" element={<Home />} />
      {/* More routes go down here */}
    </Routes>
  );
};

export default Router;
