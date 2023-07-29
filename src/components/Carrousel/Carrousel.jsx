import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagen1 from "./imagen1.jpeg";
import imagen2 from "./imagen2.jpeg";
import imagen3 from "./imagen3.jpeg";

export const Carrousel = () => {
  const PrevArrow = (props) => {
    return (
      <button
        {...props}
        className="absolute w-10 h-10 text-white transform -translate-y-1/2 bg-gray-500 rounded-full slick-prev top-1/2 left-4"
      >
        Prev
      </button>
    );
  };

  // Componente personalizado para la flecha de "siguiente"
  const NextArrow = (props) => {
    return (
      <button
        {...props}
        className="absolute w-10 h-10 text-white transform -translate-y-1/2 bg-gray-500 rounded-full slick-next top-1/2 right-4"
      >
        Next
      </button>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Habilita el autoplay
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />, // Componente personalizado para la flecha de "anterior"
    nextArrow: <NextArrow />,
  };

  return (
    <div className="flex flex-col w-2/4 ">
      <div className="w-screen mb-5 text-center">
        <h1 className="flex justify-center w-full gap-2">
          <p className="text-3xl">NUESTRAS</p>{" "}
          <p className="text-3xl font-bold text-lime-500">CANCHAS</p>
        </h1>
      </div>
      <div className="flex">
        <div className="w-full ">
          <h2 className="text-center ">PADEL</h2>
          <Slider {...settings}>
            <div>
              <img src={imagen1} alt="Imagen 1" className="w-full max-h-96" />
            </div>
            <div>
              <img src={imagen2} alt="Imagen 2" className="w-full max-h-96" />
            </div>
            <div>
              <img src={imagen3} alt="Imagen 3" className="w-full max-h-96" />
            </div>
          </Slider>
        </div>
        <div className="w-full">
          <h2 className="text-center bg-rose-500">TENIS</h2>
          <Slider {...settings}>
            <div>
              <img src={imagen1} alt="Imagen 1" className="w-full max-h-96" />
            </div>
            <div>
              <img src={imagen2} alt="Imagen 2" className="w-full max-h-96" />
            </div>
            <div>
              <img src={imagen3} alt="Imagen 3" className="w-full max-h-96" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
