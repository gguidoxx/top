import React from "react";

export const Footer = () => {
  return (
    <footer className={`fixed bottom-0 w-full py-6 text-white bg-gray-800 `}>
      <div className="container flex flex-wrap justify-around mx-auto">
        <div className="w-full mb-8 sm:w-1/2 md:w-1/4 lg:w-1/4">
          <h2 className="mb-4 text-lg font-medium">UBICACIONES</h2>
          <p className="text-sm font-normal">Guaymallén</p>
          <p className="text-sm font-normal">Godoy Cruz</p>
        </div>
        <div className="w-full mb-8 sm:w-1/2 md:w-1/4 lg:w-1/4">
          <h2 className="mb-4 text-lg font-medium">HORARIOS</h2>
          <p className="text-sm font-normal">09:00 - 15:00</p>
          <p className="text-sm font-normal">17:00 - 22:00</p>
        </div>
        <div className="w-full mb-8 sm:w-1/2 md:w-1/4 lg:w-1/4">
          <h2 className="mb-4 text-lg font-medium">CONTACTO</h2>
          <p className="text-sm font-normal">top@gmail.com</p>
          <p className="text-sm font-normal">2616144270</p>
        </div>
      </div>
    </footer>
  );
};
