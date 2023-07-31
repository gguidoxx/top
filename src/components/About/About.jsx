import React from "react";
import profes from "./imagen1.jpg";

export const About = () => {
  return (
    <div className="w-full text-center flex">
      <img src={profes} className="w-2/3" />
      <div className="">
        <div className="h-1/3 flex">
          <h1 className="text-7xl font-semibold text-lime-500 items-center w-full self-center ">
            ¿Quienes somos?
          </h1>
        </div>
        <div>
          <p className="text-gray-900 font-semibold ">
            En TOP, nos apasiona hacer que puedas disfrutar del deporte y llevar
            una vida activa y saludable. Contamos con sedes en el prestigioso
            Club Guaymallén y en el Club IMPSA, dos espacios de calidad que
            brindan el ambiente perfecto para la práctica deportiva.
          </p>
          <p className="mt-2 text-gray-900 font-semibold">
            Nuestra amplia variedad de clases está diseñada para atender a todas
            las edades y niveles de habilidad. Ofrecemos clases especializadas
            para niños, principiantes y deportistas avanzados, lo que significa
            que todos pueden encontrar su lugar en nuestra comunidad deportiva.
          </p>
          <p className="mt-2 text-gray-900 font-semibold">
            Nuestro equipo de entrenadores altamente capacitados y apasionados
            está comprometido en brindarte la mejor experiencia deportiva
            posible. Trabajamos para inspirar y motivar a nuestros miembros a
            alcanzar sus metas y superar sus límites, fomentando un ambiente
            amigable y de apoyo en cada una de nuestras clases y actividades.
          </p>
          <p className="mt-2 text-gray-900 font-semibold">
            Te invitamos a unirte a nuestra comunidad y ser parte de la emoción
            y la alegría del deporte. ¡Esperamos verte pronto en nuestras
            instalaciones!
          </p>
        </div>
      </div>
    </div>
  );
};
