// LIBRERÍA CREADA EN JAVASCRIPT PARA REALIZAR DISTINTAS FUNCIONES DEL NAV

"use strict";

// Activar nav mediante un botón responsivo
const activarNavResponsive = (nav, boton, clase) => {
    if (!nav || !boton) return;

    // Cambiar texto del botón al activar o desactivar NAV
    boton.addEventListener("click", () => {
        nav.classList.toggle(clase);

        if (boton.textContent.trim() === "☰") {
            boton.textContent = "X";
        } else {
            boton.textContent = "☰";
        }
    });
}

/* Función para aplicar estilos a los links 
de las secciones deacuerdo a la posición de la sección actual.
Es mediante li = contenedor padre y a =  contenedor hijo */
const activarClaseSeccionActual = (secciones, itemsNav, clase) => {
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        for (const seccion of secciones) {
            const top = seccion.offsetTop - 100;

            const bottom = top + seccion.offsetHeight;

            if (scrollY >= top && scrollY < bottom) {
                itemsNav.forEach(item => {

                    const link = item.querySelector("a");

                    if (!link) return;

                    const href = link.getAttribute("href");

                    item.classList.toggle(clase, href === "#" + seccion.id);
                });
                break;
            }
        }
    });
}

export default { activarNavResponsive, activarClaseSeccionActual };