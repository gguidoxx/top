import React from "react";
import { WhatsAppButton } from "../WhatsappButton/WhatsappButton";
import { ScrollToTopButton } from "../ScrollToTop/ScrollToTop";
import { About } from "../About/About";

export const MainPage = () => {
  return (
    <>
      <About />
      <WhatsAppButton />
      <ScrollToTopButton />
    </>
  );
};
