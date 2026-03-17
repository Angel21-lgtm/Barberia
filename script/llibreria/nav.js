// LIBRERÍA CREADA EN JAVASCRIPT PARA REALIZAR DISTINTAS FUNCIONES DEL NAV

"use strict";

// Activar nav mediante un botón responsivo
const activarNavResponsive = (nav, boton, clase) => {
    boton.addEventListener("click", () => {
        nav.classList.toggle(clase);
    });
}

const activarClaseSeccionActual = (secciones, itemsNav, clase) => {
    window.addEventListener("scroll", () => {

        let scroll = window.scrollY;

        secciones.forEach(seccion => {
            const top = seccion.offsetTop - 100; // ajuste
            const bottom = top + seccion.offsetHeight;

            if (scroll >= top && scroll < bottom) {

                itemsNav.forEach(item => {
                    const link = item.querySelector("a"); // 👈 aquí obtienes el <a>
                    if (!link) return;

                    const href = link.getAttribute("href");

                    item.classList.toggle(
                        clase,
                        href === "#" + seccion.id
                    );
                });

            }
        });

    });
};

export default { activarNavResponsive, activarClaseSeccionActual };