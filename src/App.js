import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./controller/routes/RoutesComponent";
export default function App() {
  return (
    <BrowserRouter>
      <RoutesComponent></RoutesComponent>
    </BrowserRouter>
  );
}
