"use strict";

// Función para poder desplegar el menú responsivo

const menuDesplegable = (boton, menu, claseActivar) => {

    boton.addEventListener("click", () => {
        menu.classList.toggle(claseActivar);
    });
}

export default menuDesplegable;