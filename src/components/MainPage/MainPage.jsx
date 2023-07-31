import React from "react";
import { WhatsAppButton } from "../WhatsappButton/WhatsappButton";
import { ScrollToTopButton } from "../ScrollToTop/ScrollToTop";
import { About } from "../About/About";
import imagen1 from "./imagen2.jpeg";
import { Carrousel } from "../Carrousel/Carrousel";
import { Footer } from "../Footer/Footer";
import { AboutProf } from "../About/AboutProf";
import { Bienvenida } from "../Bienvenida/Bienvenida";

export const MainPage = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${imagen1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 60% ",
          height: "max-content",
        }}
      >
        <Bienvenida />
      </div>
      <div className="bg-gray-100">
        <About />
        <Carrousel />
        <WhatsAppButton />
        <ScrollToTopButton />
        <Footer />
      </div>
    </>
  );
};
