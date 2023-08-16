import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  PATH_ABOUT_ME,
  PATH_DASHBOARD,
  PATH_HOME,
  PATH_LOGIN,
} from "../../resources/constants/url/Url";
import Login from "../../view/login/Login";
import Home from "../../view/home/Home";
import Dashboard from "../../view/dashboard/Dashboard";
import About from "../../view/about/About";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route exact path={PATH_LOGIN} element={<Login></Login>}></Route>

      <Route
        exact
        path={PATH_DASHBOARD}
        element={<Dashboard></Dashboard>}
      ></Route>
      <Route exact path={PATH_HOME} element={<Home></Home>}></Route>
      <Route exact path={PATH_ABOUT_ME} element={<About></About>}></Route>
    </Routes>
  );
}
