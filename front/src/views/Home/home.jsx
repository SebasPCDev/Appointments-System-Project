import React from "react";
import CarouselHome from "../../components/Carousel/carouselHome";
import EnterButton from "../../components/Button/enterButton";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home() {
  const login = useSelector((state) => state.actualUser?.userData?.login);
  return (
    <div>
      <CarouselHome />
      <div className="d-flex flex-column justify-content-center align-items-center mt-5 text-center">
        <h3>Reserva tu visita</h3>
        {login ? (
          <NavLink to="/newappo">
            <EnterButton />
          </NavLink>
        ) : (
          <NavLink to="/login">
            <EnterButton />
          </NavLink>
        )}
      </div>
    </div>
  );
}
