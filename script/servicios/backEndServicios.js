"use strict";

// Pequeña base de datos para los servicios que se ofrecen

const imgServicio = ["../../img/servicios/arreglo-estetico-de-barba/arreglo-estetico-de-barba.jpg", "../../img/servicios/corte-con-tijeras-y-navaja/corte-con-tijeras-y-navaja.jpg", "../../img/servicios/corte-moderno-a-máquina/corte-moderno-a-máquina.jpg", "../../img/servicios/mascarilla/mascarilla.jpg"];
const pngServicios = ["../../img/servicios/arreglo-estetico-de-barba/navaja-de-afeitar.png", "../../img/servicios/corte-con-tijeras-y-navaja/tijeras.png", "../../img/servicios/corte-moderno-a-máquina/máquina-de-afeitar.png", "../../img/servicios/mascarilla/mascarilla.png"];
const alts = ["Navaja", "Tijeras", "Máquina", "Mascarilla"];
const encabezadoServicio = ["Arreglo estético de Barba", "Corte con Tijeras y Navaja", "Corte Moderno a Máquina", "Mascarilla"];
const textoDelServicio = ["Barba elegante, estilo moderno o clásico.", "Realizamos cortes artesanales clásicos(tijeras y navaja).", "Corte completo a: navaja, tijeras y máquina.", "Mascarillas naturales para velleza masculina."];
const idBoton = ["servicio-1", "servicio-2", "servicio-3", "servicio-4"];
const precios = ["$120", "$180", "$150", "$130"];

const longitud = 4;

export default {imgServicio, pngServicios, alts, encabezadoServicio, textoDelServicio, idBoton, precios, longitud}