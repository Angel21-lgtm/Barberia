// FUNCIÓN MAIN PRINCIPAL

"use strict";

// PROMOCIONES
import innerHTMLPromociones from "./secciones/01-inicio/backEndInicio.js";
// SOBRE NOSOTROS
import backEndSobreNosotros from "./secciones/02-sobre-nosotros/backEndSobreNosotros.js";
// PORTAFOLIO
import backEndPortafolio from "./secciones/04-portafolio/backEndPortafolio.js";
import visualizarProyecto from "./secciones/04-portafolio/visualizarProyecto.js";
// LIBRERÍA DEL NAV
import nav from "./libreria/nav.js";
// LIBRERÍA CURSOR
import humo from "./libreria/cursor.js";

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


    // FUNCIONES DEL NAV
    // Nav responsive
    const contenedorNav = document.querySelector("nav");
    const botonMenuDesplegable = document.getElementById("boton-menu-desplegable");
    nav.activarNavResponsive(contenedorNav, botonMenuDesplegable, "activar-nav");

    // Navegación del nav
    const secciones = document.querySelectorAll(".contenedor-de-secciones");
    const itemsNav = document.querySelectorAll(".lista-links-nav");
    nav.activarClaseSeccionActual(secciones, itemsNav, "seccion-actual");

    // ANIMACIONES DEL CURSOR
    humo();
}

window.addEventListener("DOMContentLoaded", main);