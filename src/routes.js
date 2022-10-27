import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { HeroDetails } from "./pages/HeroDetail";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/profile/:id" exact element={<HeroDetails />} />
    </Routes>
  );
}
