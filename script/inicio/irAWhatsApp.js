"use strict";

// Botón para redireccionar a WhatsApp

const irAWhatsApp = (boton) => {
    boton.addEventListener("click", () => {
        window.open("https://wa.me/+5215615740725?text=¡Hola!%20Quiero%20reservar%20una%20cita.", "_blank");
    });
}

export default irAWhatsApp;