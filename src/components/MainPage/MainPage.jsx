import React from "react";
import { Link } from "react-router-dom";

export const MainPage = () => {
  return (
    <section className="h-screen">
      <article className="flex flex-col items-center justify-center h-full">
        <h3 className="lg:text-5xl">En #TOPTENIS</h3>
        <p className="text-xl">
          Nos dedicamos a que puedas disfrutar el deporte. Contamos con sedes en
          el
          <Link
            to="https://goo.gl/maps/KDFeVsmzVQmGxTjP9"
            target="_blank"
            className="text-red-700"
          >
            {" "}
            Club Guaymallén
          </Link>
          , y en el
          <Link
            to="https://goo.gl/maps/7HVGFj5gZEcLL7cm6"
            target="_blank"
            className="text-red-700"
          >
            {" "}
            Club IMPSA
          </Link>
          , tenemos clases para niños, principiantes y avanzados.
        </p>
      </article>
    </section>
  );
};
