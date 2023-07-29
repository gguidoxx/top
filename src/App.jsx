import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { MainPage } from "./components/MainPage/MainPage";
import { Footer } from "./components/Footer/Footer";
import AboutUs from "./components/AboutUs/AboutUS";
import { WhatsAppButton } from "./components/WhatsappButton/WhatsappButton";

function App() {
  return (
    <>
      <NavBar />
      <MainPage />
      <Footer />
    </>
  );
}

export default App;
