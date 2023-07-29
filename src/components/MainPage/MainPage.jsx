import React from "react";
import { AboutUs } from "../AboutUs/AboutUs.jsx";
import { WhatsAppButton } from "../WhatsappButton/WhatsappButton";
import { ScrollToTopButton } from "../ScrollToTop/ScrollToTop";

export const MainPage = () => {
  return (
    <>
      <AboutUs />
      <AboutUs />
      <AboutUs />
      <WhatsAppButton />
      <ScrollToTopButton />
    </>
  );
};
