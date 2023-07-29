import React from "react";
import { WhatsAppButton } from "../WhatsappButton/WhatsappButton";
import { ScrollToTopButton } from "../ScrollToTop/ScrollToTop";
import { AboutUs } from "../AboutUs/AboutUS.jsx";

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
