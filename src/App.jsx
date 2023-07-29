import React from "react";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { MainPage } from "./components/MainPage/MainPage.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

export function App() {
  return (
    <div>
      <NavBar />
      <MainPage />
      <Footer />
    </div>
  );
}
