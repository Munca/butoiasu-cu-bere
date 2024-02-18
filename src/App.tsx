import React, { useEffect } from "react";
import "./App.scss";
import { Header } from "./components/header/header.component";
import { Route, Routes } from "react-router-dom";
import Home from "./features/home/home";
import Reservation from "./features/reservation/reservation";
import Contact from "./features/contact/contact";
import Events from "./features/events/events";
import AuthenticationPage from "./pages/singin-singup/singin-singup";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./firebase/firebase.utils";
import { User } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { setCurrentUser } from "./features/authentication/user.slice";
import MenuListPage from "./features/menu/menu-list/menu";
import MenuItemDetailPage from "./features/menu/menu-item/menu-item-detail-page";

const App = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(
        setCurrentUser({
          email: user?.email,
          displayName: user?.displayName,
          id: user?.uid,
        })
      );
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Routes>
        (<Route path="/" Component={Home}></Route>
        <Route path="/menu" Component={MenuListPage}></Route>
        <Route path="/menu-item/:id" Component={MenuItemDetailPage}></Route>
        <Route path="/reservation" Component={Reservation}></Route>
        <Route path="/events" Component={Events}></Route>
        <Route path="/contact" Component={Contact}></Route>)
        {!user && <Route path="/auth" Component={AuthenticationPage}></Route>}
      </Routes>
    </div>
  );
};

export default App;
