// CABECERA DINÁMICA
var header = document.getElementById('Header'); // Seleccionamos el header
var menu = document.getElementById('Menu');// Seleccionamos el menu
var path = window.location.pathname; // Obtenemos la ruta actual

// Lógica para la página "INICIO"
if (path.includes('index.html')) {
    var fondo = document.querySelector('.fondo'); // Imagen de fondo de inicio

    window.addEventListener('scroll', () => {
        var scroll = window.scrollY;
        var fondoHeight = fondo.offsetHeight; // Altura de la sección inicial

        if (scroll >= fondoHeight) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Fondo blanco
            menu.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            //menu.style.boxShadow = 'none';
        } else {
            header.style.backgroundColor = 'transparent'; // Fondo transparente al inicio
            menu.style.backgroundColor = 'transparent';
            //menu.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
        }
    });

} else {
    // Lógica para las demás páginas (como "NOSOTROS")
    header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    menu.style.backgroundColor = 'rgba(255, 255, 255, 1)';
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
