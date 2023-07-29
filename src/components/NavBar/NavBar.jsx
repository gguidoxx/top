import React from "react";
import { Link } from "react-router-dom";
import logo1 from "./logo.png";
import logo3 from "./logo3.png";
import { useState } from "react";
import { useEffect } from "react";

export const NavBar = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Verificar si scrollY es igual a 0
      const atTop = window.scrollY === 0;
      setIsAtTop(atTop);
    };

    // Agregar el evento de scroll al montar el componente
    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`sticky top-0 left-0 w-full p-4  ${
        isAtTop ? "bg-gray-800 text-white" : "bg-white text-black"
      } transition duration-500 ease-in-out`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-white">
            <Link to="/">
              <img
                src={isAtTop ? logo3 : logo1}
                className={`${!isAtTop ? "ml-6 h-14" : "h-14"}`}
                alt="Logo"
              />
            </Link>
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/turnos" className="font-bold">
                <button className="btn">TURNOS</button>
              </Link>
            </li>
            <li>
              <Link to="/informacion" className="font-bold">
                <button className="btn">MÁS INFORMACIÓN</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
