"use strict";
// Importando script de carga de página web
import download from "./download/download.js";
const idDownload = document.getElementById("download");
const quitarDownload = "quitar-download";
const animacionEncabezadoDownload = "animacion-letras-encabezado-download";
const letrasEncabezadoDownload = document.querySelectorAll(".letras-encabezado-download");
// Importando función servicios
import servicios from "./servicios/servicios.js";
const articuloDeServicios = document.getElementById("articulo-de-servicios");
// Importando Back End Servicios
import backEndServiciosCards from "./servicios/backEndServicios.js";
const idBoton = [];
backEndServiciosCards.forEach((elemento) => {
    idBoton.push(elemento.idBoton);
});
// Importando botón de leer en servicios
import botonLeerMas from "./servicios/botonLeerMas.js";
const leerMasServicio = document.getElementById("leer-mas-servicio");
const cerrarVentanaServicio = document.getElementById("cerrar-ventana-servicio");
const textoLeerMas = document.querySelector(".texto-leer-mas");
const tituloLeerMas = document.querySelector(".titulo-leer-mas");
const solicitarServicio = document.querySelector(".solicitar-servicio");
// Importando funciones de animaciones
import scrollOpacity from "./librería/animaciones.js";
// Importando función del menú desplegable
import menuDesplegable from "./librería/menuDesplegable.js";
const idBotonMenuDesplegable = document.getElementById("boton-menu-desplegable");
const idMenu = document.getElementById("menu");
const activarMenuDesplegable = "activar-menu-desplegable";
// Importando función para cambio de secciones del nav (menú)
import nav from "./librería/nav.js";

const main = () => {
    // Cargando página web
    download(idDownload, 10, quitarDownload, animacionEncabezadoDownload, letrasEncabezadoDownload, 200);

    // Activar y desactivar menú desplegable
    menuDesplegable(idBotonMenuDesplegable, idMenu, activarMenuDesplegable);

    // Agregando cards a el artículo de servicios
    servicios(articuloDeServicios);

    // Activando botones de los servicios (Leer más)
    botonLeerMas(leerMasServicio, cerrarVentanaServicio, "activar-leer-mas-servicio", textoLeerMas, tituloLeerMas, solicitarServicio, idBoton);

    // Animaciones del window
    const contenedoresImagenServicios = document.querySelectorAll(".fondo-servicio");
    scrollOpacity(contenedoresImagenServicios, "opacity-servicio");

    // Función para cambio de secciones del nav (menú)
    const botonesDelNav = document.querySelectorAll(".btn-nav");
    const secciones = document.querySelectorAll(".secciones");
    nav(botonesDelNav, "btn-nav-on", "btn-nav-off", secciones);
}

// Ejecutando main
window.addEventListener("load", () => {
    main();
});