import React from "react";

import imagen1 from "./imagen4.jpg";
import imagen2 from "./imagen2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export const Carrousel = () => {
  return (
    <>
      <div className="flex flex-col w-full mt-32">
        <div className="">
          <h1 className="flex h-full justify-center  gap-2 py-8 bg-gray-200">
            <p className="text-5xl font-montserrat text-gray-800">NUESTRAS</p>{" "}
            <p className="text-5xl font-montserrat font-black text-lime-600">
              CANCHAS
            </p>
          </h1>
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-1/2 flex flex-col items-center bg-gray-200">
          <img src={imagen1} alt="Imagen 1" className="scale-90" />
        </div>
        <div className="w-1/2">
          <h2 className="text-center  bg-gray-200 h-full text-7xl text-blue-600 ">
            <div className="flex  justify-around">
              <span className="w-full font-bold">PADEL</span>
            </div>

            <p className="text-2xl text-left mt-6 pl-2 text-gray-900">
              Contamos con dos canchas de cemento en el Club Guaymallén. <br />
              Construidas para brindarte un espacio profesional y seguro,
              ideales para la práctica,
              <br /> ya sea para que aprendas sobre el deporte, o para competir
              contra otras personas.
            </p>
          </h2>
        </div>
      </div>
      <div className="w-full flex">
        <div className="w-1/2">
          <h2 className="text-center  bg-gray-200 h-full text-7xl text-lime-600">
            <div className="flex justify-around ">
              <span className="w-full font-bold">TENIS</span>
            </div>
            <p className="text-2xl text-left mt-6 pl-2 text-gray-900">
              En el Club IMPSA y en el Club Guaymallén, tenemos unas canchas de
              polvo ladrillo increíbles para que disfrutes del deporte al
              máximo. Están diseñadas tanto para competiciones emocionantes como
              para entrenamientos de alto rendimiento.
            </p>
            <p className="text-2xl text-left pl-2 text-gray-900">
              Nuestras instalaciones te ofrecen la superficie perfecta para
              darlo todo en el juego y mejorar tus habilidades.
            </p>
          </h2>
        </div>
        <div className="w-1/2 flex flex-col items-center bg-gray-200">
          <img src={imagen2} alt="Imagen 2" className="scale-90 " />
        </div>
      </div>
    </>
  );
};
