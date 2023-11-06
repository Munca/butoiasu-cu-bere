import React from "react";

import "./App.scss";
import { Header } from "./components/header/header.component";
import { Route, Routes } from "react-router-dom";
import { Landing } from "./features/landing/landing";
import Home from "./features/home/home";
import Menu from "./features/menu/menu";
import Reservation from "./features/reservation/reservation";
import Contact from "./features/contact/contact";
import Events from "./features/events/events";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" Component={Landing}></Route>
        <Route path="/home" Component={Home}></Route>
        <Route path="/menu" Component={Menu}></Route>
        <Route path="/reservation" Component={Reservation}></Route>
        <Route path="/events" Component={Events}></Route>
        <Route path="/contact" Component={Contact}></Route>
      </Routes>
    </div>
  );
};

export default App;
