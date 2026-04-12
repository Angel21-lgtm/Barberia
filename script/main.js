// FUNCIÓN MAIN PRINCIPAL

"use strict";

// PROMOCIONES
import innerHTMLPromociones from "./secciones/01-inicio/backEndInicio.js";
// SOBRE NOSOTROS
import backEndSobreNosotros from "./secciones/02-sobre-nosotros/backEndSobreNosotros.js";
// SERVICIOS
import backEndServicios from "./secciones/03-servicios/backEndServicios.js";
// PORTAFOLIO
import backEndPortafolio from "./secciones/04-portafolio/backEndPortafolio.js";
import visualizarProyecto from "./secciones/04-portafolio/visualizarProyecto.js";

// LIBRERÍAS
// Nav
import nav from "../librerias/nav/nav.js";
// Cards
import cards from "../librerias/cards/cards.js";
// cursor

const main = () => {
    // NAV
    const navIzquierdoLogotipo1 = document.querySelector(".nav-izquierdo-logotipo-1");
    const botonMenuDesplegable = document.getElementById("boton-menu-desplegable-nav-logotipo-1");
    nav.activarNavResponsive(navIzquierdoLogotipo1, botonMenuDesplegable, "activar-nav-logotipo-1");

    // Navegación del nav logotipo 1
    const secciones = document.querySelectorAll(".contenedor-de-secciones");
    const itemsNav = document.querySelectorAll(".lista-links-nav-logotipo-1");
    nav.activarClaseSeccionActual(secciones, itemsNav, "seccion-actual");


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

    // SERVICIOS
    // Servicios
    cards.card1(backEndServicios.backEndServicios);

    // PORTAFOLIO
    // Elementos del HTML
    const articuloDeProyectos = document.querySelector(".articulo-de-proyectos");
    backEndPortafolio.innerHTMLProyectos(articuloDeProyectos, backEndPortafolio.backEndPortafolio[0]);
    backEndPortafolio.innerHTMLProyectos(articuloDeProyectos, backEndPortafolio.backEndPortafolio[1]);
    backEndPortafolio.innerHTMLProyectos(articuloDeProyectos, backEndPortafolio.backEndPortafolio[2]);

    // Función para ver los proyectos junto con sus datos
    const visualizacionDelProyecto = document.getElementById("visualizacion-del-proyecto"),
        botonCerrarProyecto = visualizacionDelProyecto.querySelector("button"),
        botonVisualizarProyectoPrimerApartado = document.querySelectorAll(".boton-visualizar-proyecto-primer-apartado"),
        botonVisualizarProyectoSegundoApartado = document.querySelectorAll(".boton-visualizar-proyecto-segundo-apartado"),
        botonVisualizarProyectoTercerApartado = document.querySelectorAll(".boton-visualizar-proyecto-tercer-apartado");

    visualizarProyecto("transicion-visualizacion-del-proyecto", botonVisualizarProyectoPrimerApartado, visualizacionDelProyecto, botonCerrarProyecto, backEndPortafolio.backEndPortafolio[0]);
    visualizarProyecto("transicion-visualizacion-del-proyecto", botonVisualizarProyectoSegundoApartado, visualizacionDelProyecto, botonCerrarProyecto, backEndPortafolio.backEndPortafolio[1]);
    visualizarProyecto("transicion-visualizacion-del-proyecto", botonVisualizarProyectoTercerApartado, visualizacionDelProyecto, botonCerrarProyecto, backEndPortafolio.backEndPortafolio[2]);

    // ANIMACIONES DEL CURSOR
}

window.addEventListener("DOMContentLoaded", () => {

    main();

    setTimeout(() => {
        const contenedorLoad = document.getElementById("load");
        contenedorLoad.classList.add("quitar-load");
    }, 4000);
});