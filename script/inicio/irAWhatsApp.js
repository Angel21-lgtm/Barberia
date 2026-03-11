"use strict";

// Botón para redireccionar a WhatsApp

const irAWhatsApp = (boton) => {
    boton.addEventListener("click", () => {
        window.open("https://wa.me/+5215615740725");
    });
}

export default irAWhatsApp;