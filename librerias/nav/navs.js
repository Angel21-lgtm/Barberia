// LIBRERÍA PARA INSERTAR DISTINTOS NAVS EN EL HTML

// Nav logotipo 1  
const navLogotipo1 = (contenedor) => {
    return contenedor.innerHTML = `
        <!-- Navegación de secciones -->
        <nav class="nav-izquierdo-logotipo-1">
            <!-- Logotipo -->
            <div class="logotipo logotipo-nav-logotipo-1  imagen-burbuja">
                <img src="./img/iconos/logotipo/logotipo-blanco.png" alt="Logotipo">
            </div>
            <!-- Logotipo -->

            <!-- Lista de navegación-->
            <ul class="ul-navegador-de-secciones-logotipo-1">
                <li class="lista-links-nav-logotipo-1 seccion-actual">
                    <a class="link-nav-logotipo-1 position-relative" title="Sección principal" href="#inicio">
                        INICIO
                    </a>
                </li>

                <li class="lista-links-nav-logotipo-1">
                    <a class="link-nav-logotipo-1 position-relative" title="Descripción de nosotros"
                        href="#sobre-nosotros">
                        SOBRE NOSOTROS
                    </a>
                </li>

                <li class="lista-links-nav-logotipo-1">
                    <a class="link-nav-logotipo-1 position-relative" title="Servicios que ofrecemos (catálogo)"
                        href="#servicios">
                        SERVICIOS
                    </a>
                </li>

                <li class="lista-links-nav-logotipo-1">
                    <a class="link-nav-logotipo-1 position-relative" title="Nuestro trabajo" href="#portafolio">
                        PORTAFOLIO
                    </a>
                </li>

                <li class="lista-links-nav-logotipo-1">
                    <a rel="noopener noreferrer" class="link-nav-logotipo-1 tienda"
                        title="Grandes ofertas de productos para ustedes" target="_blank">
                        TIENDA
                    </a>
                </li>

                <li class="lista-links-nav-logotipo-1">
                    <a class="link-nav-logotipo-1 position-relative" title="Contáctanos" href="#contacto">
                        CONTACTO
                    </a>
                </li>
            </ul>
            <!-- Lista de navegación-->

            <!-- Lista de redes sociales -->
            <ul class="ul-navegador-de-redes-sociales-nav-logotipo-1">
                <li class="li-navegador-de-redes-sociales-nav-logotipo-1">
                    <a rel="noopener noreferrer" target="_blank" class="red-social" title="Visítanos en Facebook">
                        <img src="./img/iconos/redes-sociales/facebook.png" alt="Facebook">
                    </a>
                </li>
                <li class="li-navegador-de-redes-sociales-nav-logotipo-1">
                    <a rel="noopener noreferrer" target="_blank" class="red-social" title="Visítanos en Instagram">
                        <img src="./img/iconos/redes-sociales/instagram.png" alt="Instagram">
                    </a>
                </li>
                <li class="li-navegador-de-redes-sociales-nav-logotipo-1">
                    <a rel="noopener noreferrer" target="_blank" class="red-social" title="Visítanos en TikTok">
                        <img src="./img/iconos/redes-sociales/tiktok.png" alt="TikTok">
                    </a>
                </li>
            </ul>
            <!-- Lista de redes sociales -->
        </nav>
        <!-- Navegación de secciones -->
    `;
}

export default {
    navLogotipo1
}