// FUNCIÓN MAIN PRINCIPAL

"use strict";

// PROMOCIONES
import innerHTMLPromociones from "./secciones/01-inicio/backEndInicio.js";
// SOBRE NOSOTROS
import backEndSobreNosotros from "./secciones/02-sobre-nosotros/backEndSobreNosotros.js"
// LIBRERÍA DEL NAV
import nav from "./llibreria/nav.js";

const main = () => {
    // HTML AL DOCUMENTO
    // INICIO 
    // Promociones
    const contenedorPromociones = document.getElementById("contenedor-promociones");
    innerHTMLPromociones(contenedorPromociones);
    // SOBRE NOSOTROS
    // Sucursales
    const cardsSucursales = document.getElementById("cards-sucursales");
    backEndSobreNosotros.innerHTMLCardsSucursales(cardsSucursales);
    // Barberos
    const cardsBarberos = document.getElementById("cards-barberos");
    backEndSobreNosotros.innerHTMLCardsBarberos(cardsBarberos);

    // FUNCIONES DEL NAV
    // Nav responsive
    const contenedorNav = document.querySelector("nav");
    const botonMenuDesplegable = document.getElementById("boton-menu-desplegable");
    nav.activarNavResponsive(contenedorNav, botonMenuDesplegable, "activar-nav");
    // Navegación del nav
    const secciones = document.querySelectorAll(".contenedor-de-secciones");
    const itemsNav = document.querySelectorAll(".lista-links-nav");
    nav.activarClaseSeccionActual(secciones, itemsNav, "seccion-actual");
}

window.addEventListener("DOMContentLoaded", main);