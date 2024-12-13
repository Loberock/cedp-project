// SLIDER DE IMÁGENES
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;

    // Función para mover el slider
    const moveSlider = (index) => {
        slides.style.transform = `translateX(-${index * 100}%)`;
    };

    // Botón "Next"
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        moveSlider(currentIndex);
    });

    // Botón "Prev"
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        moveSlider(currentIndex);
    });

    // Cambio automático cada 5 segundos
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        moveSlider(currentIndex);
    }, 5000);
});

// CABECERA DINÁMICA
var header = document.getElementById('Header'); // Seleccionamos el header
var menu = document.getElementById('Menu');// Seleccionamos el menu
const dropdownMenus = document.querySelectorAll('.dropdown-menu'); // Seleccionamos el dropdown
var path = window.location.pathname; // Obtenemos la ruta actual

// Lógica para la página "INICIO"
if (path.includes('index.html')) {
    var fondo = document.querySelector('.slider'); // Imagen de fondo de inicio

    window.addEventListener('scroll', () => {
        var scroll = window.scrollY;
        var fondoHeight = fondo.offsetHeight; // Altura de la sección inicial

        if (scroll >= fondoHeight) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Fondo blanco
            menu.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Fondo blanco
            dropdownMenus.forEach(menu => menu.style.backgroundColor = 'rgba(255, 255, 255, 1)');
        } else {
            header.style.backgroundColor = 'transparent'; // Fondo transparente al inicio
            menu.style.backgroundColor = 'transparent'; // Fondo transparente al inicio
            dropdownMenus.forEach(menu => menu.style.backgroundColor = 'transparent');
        }
    });

} else {
    // Lógica para las demás páginas (como "NOSOTROS")
    header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    menu.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    dropdownMenus.forEach(menu => menu.style.backgroundColor = 'rgba(255, 255, 255, 1)');
}

// MENÚ SELECCIONADO
// Agregar clase 'active' al menú actual
const currentFile = window.location.pathname.split('/').pop();
const menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(link => {
    if (link.getAttribute('href') === currentFile) {
        link.classList.add('active');
        const parentDropdown = link.closest('.dropdown');
        if (parentDropdown) {
            parentDropdown.querySelector('.dropdown-toggle').classList.add('active');
        }
    }
});

// Mostrar/ocultar dropdowns
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');

    toggle.addEventListener('mouseenter', () => {
        menu.classList.add('show');
    });

    dropdown.addEventListener('mouseleave', () => {
        menu.classList.remove('show');
    });
});

// VALIDACIONES DEL FORMULARIO
document.querySelector("#contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir envío por defecto
    let isValid = true;

    // Validar Nombre
    const nombre = document.querySelector("#nombre");
    const nombreError = nombre.nextElementSibling;
    if (nombre.value.trim().length < 3) {
        nombreError.textContent = "El nombre debe tener al menos 3 caracteres.";
        nombreError.classList.add("active");
        isValid = false;
    } else {
        nombreError.textContent = "";
        nombreError.classList.remove("active");
    }

    // Validar Apellido
    const apellido = document.querySelector("#apellido");
    const apellidoError = apellido.nextElementSibling;
    if (apellido.value.trim().length < 3) {
        apellidoError.textContent = "El apellido debe tener al menos 3 caracteres.";
        apellidoError.classList.add("active");
        isValid = false;
    } else {
        apellidoError.textContent = "";
        apellidoError.classList.remove("active");
    }

    // Validar Correo Electrónico
    const email = document.querySelector("#email");
    const emailError = email.nextElementSibling;
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Por favor, ingrese un correo electrónico válido.";
        emailError.classList.add("active");
        isValid = false;
    } else {
        emailError.textContent = "";
        emailError.classList.remove("active");
    }

    // Validar Teléfono
    const telefono = document.querySelector("#telefono");
    const telefonoError = telefono.nextElementSibling;
    const telefonoPattern = /^\d{9}$/;
    if (!telefonoPattern.test(telefono.value.trim())) {
        telefonoError.textContent = "El teléfono debe contener 9 dígitos.";
        telefonoError.classList.add("active");
        isValid = false;
    } else {
        telefonoError.textContent = "";
        telefonoError.classList.remove("active");
    }

    // Validar Ciudad o Región
    const ciudad = document.querySelector("#ciudad");
    const ciudadError = ciudad.nextElementSibling;
    if (ciudad.value.trim().length < 2) {
        ciudadError.textContent = "Por favor, ingrese una ciudad o región válida.";
        ciudadError.classList.add("active");
        isValid = false;
    } else {
        ciudadError.textContent = "";
        ciudadError.classList.remove("active");
    }

    // Validar Selección de Curso
    const curso = document.querySelector("#curso");
    const cursoError = curso.nextElementSibling;
    if (curso.value === "") {
        cursoError.textContent = "Seleccione un curso de interés.";
        cursoError.classList.add("active");
        isValid = false;
    } else {
        cursoError.textContent = "";
        cursoError.classList.remove("active");
    }

    // Validar Mensaje
    const mensaje = document.querySelector("#mensaje");
    const mensajeError = mensaje.nextElementSibling;
    if (mensaje.value.trim().length < 10) {
        mensajeError.textContent = "El mensaje debe contener al menos 10 caracteres.";
        mensajeError.classList.add("active");
        isValid = false;
    } else {
        mensajeError.textContent = "";
        mensajeError.classList.remove("active");
    }

    // Si todo es válido
    if (isValid) {
        window.location.href = "enviado.html"; // Redirigir a la página deseada
        alert("Formulario enviado con éxito.");
    }
});
