// FUNCIÓN MAIN PRINCIPAL

"use strict";

// PROMOCIONES
import innerHTMLPromociones from "./secciones/01-inicio/backEndInicio.js";
// BARBEROS
import innerHTMLCardsBarberos from "./secciones/02-sobre-nosotros/backEndSobreNosotros.js";
// LIBRERÍA DEL NAV
import nav from "./llibreria/nav.js";
// LIBRERÍA DE ANIMACIONES DEL CURSOR
import polvoMouseMove from "./llibreria/cursor.js";

const main = () => {
    // HTML AL DOCUMENTO
    // INICIO 
    // Promociones
    const contenedorPromociones = document.getElementById("contenedor-promociones");
    innerHTMLPromociones(contenedorPromociones);
    // SOBRE NOSOTROS
    // Barberos
    const cardsBarberos = document.getElementById("cards-barberos");
    innerHTMLCardsBarberos(cardsBarberos);
    // Animación de las cards de los barberos
    const cardBarbero = document.querySelectorAll(".card-barbero");

    // FUNCIONES DEL NAV
    // Nav responsive
    const contenedorNav = document.querySelector("nav");
    const botonMenuDesplegable = document.getElementById("boton-menu-desplegable");
    nav.activarNavResponsive(contenedorNav, botonMenuDesplegable, "activar-nav");
    // Navegación del nav
    const secciones = document.querySelectorAll(".contenedor-de-secciones");
    const itemsNav = document.querySelectorAll(".lista-links-nav");
    nav.activarClaseSeccionActual(secciones, itemsNav, "seccion-actual");

    // ANIMACIONES DEL MOUSE
    polvoMouseMove();
}

window.addEventListener("DOMContentLoaded", main);