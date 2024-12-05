// CABECERA DINÁMICA
var header = document.getElementById('Header'); // Seleccionamos el header
var path = window.location.pathname; // Obtenemos la ruta actual

// Lógica para la página "INICIO"
if (path.includes('index.html')) {
    var fondo = document.querySelector('.fondo'); // Imagen de fondo de inicio

    window.addEventListener('scroll', () => {
        var scroll = window.scrollY;
        var fondoHeight = fondo.offsetHeight; // Altura de la sección inicial

        if (scroll >= fondoHeight) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Fondo blanco sólido
        } else {
            header.style.backgroundColor = 'transparent'; // Fondo transparente al inicio
        }
    });

} else {
    // Lógica para las demás páginas (como "NOSOTROS")
    header.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Al cargar la página, el header tendrá fondo blanco
    header.style.position = 'relative'; // Al principio no está fijo sobre el contenido

    window.addEventListener('scroll', () => {
        var scroll = window.scrollY;

        if (scroll > 10) {
            header.style.position = 'fixed'; // Se fija después de scrollear
            header.style.top = '0';
            header.style.zIndex = '9999'; // Se asegura de estar encima del contenido
        } else {
            header.style.position = 'relative'; // Vuelve a ser relativo al principio
            header.style.zIndex = '1'; // No se muestra sobre el contenido inicialmente
        }
    });
}

// MENÚ SELECCIONADO
const currentFile = window.location.pathname.split('/').pop(); // Obtiene la URL actual
const menuLinks = document.querySelectorAll('.menu a'); // Selecciona todos los enlaces del menú
menuLinks.forEach(link => {
    // Si el atributo href coincide con el nombre del archivo actual
    if (link.getAttribute('href') === currentFile) {
        link.classList.add('active'); // Agrega la clase 'active' al enlace actual
    }
});
