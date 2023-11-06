import React from "react";
import "./landing.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { updateName } from "./landingSlice";
export const Landing = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.landing.name);
  const changeName = () => {
    dispatch(updateName("Altceva"));
  };
  return (
    <div>
      <div>{name}</div>
      <button onClick={() => changeName()}>Click</button>
    </div>
  );
};
