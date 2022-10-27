import React from "react";
import { Routes, Route } from "react-router-dom";
import { HeroDetails } from "./pages/HeroDetails";

import { Home } from "./pages/Home";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/:id" exact element={<HeroDetails />} />
    </Routes>
  );
}
