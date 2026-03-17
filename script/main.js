// FUNCIÓN MAIN PRINCIPAL PARA EJECUTAR TODOS LOS DEMÁS SCRIPTS ESPUÉS DEL EVENTO LOAD

"use strict";

// AGREGANDO LAS PROMOCIONES
import innerHTMLPromociones from "./secciones/01-inicio/backEndInicio.js";
// IMPORTANDO LIBRERÍA DEL NAV
import nav from "./llibreria/nav.js";

const main = () => {
    // AGREGANDO HTML AL DOCUMENTO
    // Inicio (promociones)
    const contenedorPromociones = document.getElementById("contenedor-promociones");
    innerHTMLPromociones(contenedorPromociones);

    // FUNCIONES DEL NAV
    // Activar nav responsive
    const contenedorNav = document.querySelector("nav");
    const botonMenuDesplegable = document.getElementById("boton-menu-desplegable");
    nav.activarNavResponsive(contenedorNav, botonMenuDesplegable, "activar-nav");
    // Navegación del nav
    const contenedorDeSecciones = document.querySelectorAll(".contenedor-de-secciones");
    const listaLinksNav = document.querySelectorAll(".lista-links-nav");
    nav.activarClaseSeccionActual(contenedorDeSecciones, listaLinksNav, "seccion-actual");

}

window.addEventListener("load", () => {
    main();
});