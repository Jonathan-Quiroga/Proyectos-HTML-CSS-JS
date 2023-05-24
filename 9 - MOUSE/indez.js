// Obtenemos todos los enlaces del menú
const menuLinks = document.querySelectorAll('nav ul li a');

// Recorremos los enlaces y agregamos un controlador de eventos
menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Removemos la clase "active" de todos los enlaces
    menuLinks.forEach(link => link.classList.remove('active'));
    
    // Agregamos la clase "active" al enlace clicado
    event.target.classList.add('active');
  });
});
