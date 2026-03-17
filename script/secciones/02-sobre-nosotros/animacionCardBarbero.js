// ANIMACIÓN DE AGUA PARA LAS CARDS DE LOS BARBEROS

"use strict";

// Animación burbuja al hacer scroll y mover el cursor
const animacionCardBarbero = (cards, claseImg) => {
    let scroll = false;
    let timeOut;
    let time = 8;

    window.addEventListener("mousemove", () => {

        if (!scroll) {
            cards.forEach(card => {
                const img = card.querySelector(claseImg);
                if (!img) return;
                img.style.animationPlayState = "running";
                img.style.animationDuration = `${time + (Math.random() * 2)}s`;
                scroll = true;
            });
        }

        clearTimeout(timeOut);

        timeOut = setTimeout(() => {
            cards.forEach(card => {
                const img = card.querySelector(claseImg);
                img.style.animationPlayState = "paused";
                scroll = false;
            });
        }, 150);
    });

    window.addEventListener("scroll", () => {

        if (!scroll) {
            cards.forEach(card => {
                const img = card.querySelector(claseImg);
                if (!img) return;
                img.style.animationPlayState = "running";
                img.style.animationDuration = `${time + (Math.random() * 2)}s`;
                scroll = true;
            });
        }

        clearTimeout(timeOut);

        timeOut = setTimeout(() => {
            cards.forEach(card => {
                const img = card.querySelector(claseImg);
                img.style.animationPlayState = "paused";
                scroll = false;
            });
        }, 150);
    });
}

export default animacionCardBarbero;