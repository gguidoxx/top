import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5492612794975"; //
    const message = "¡Hola! Estoy interesado en obtener más información."; // Puedes personalizar el mensaje a enviar

    // URL de la API de WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Abrir la ventana de conversación en WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      className="fixed z-10 flex items-center justify-center text-2xl text-white bg-green-500 rounded-full shadow-lg w-14 h-14 bottom-4 left-4"
      onClick={handleWhatsAppClick}
    >
      <FontAwesomeIcon icon={faWhatsapp} className="h-7" />
    </button>
  );
};
