document.addEventListener("DOMContentLoaded", function() {
    // Alternar menú móvil
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    if (navbarToggle) {
      navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('navbar__menu--open');
      });
    }
  
    // Función para mostrar contenido dinámico en la página:
    // Solo se mostrará una sección a la vez, según el enlace clicado.
    const sections = document.querySelectorAll("section");
    const menuItems = document.querySelectorAll(".navbar-menu a");
  
    // Inicializar: Mostrar solo la primera sección
    sections.forEach((sec, index) => {
      sec.style.display = index === 0 ? "block" : "none";
    });
  
    // Asignar el comportamiento a cada elemento del menú
    menuItems.forEach((item, index) => {
      item.addEventListener("click", function(event) {
        event.preventDefault();
        // Ocultar todas las secciones
        sections.forEach(sec => sec.style.display = "none");
        // Mostrar la sección correspondiente al enlace clicado
        if (sections[index]) {
          sections[index].style.display = "block";
        }
      });
    });

    // Botón para volver arriba
    const backToTop = document.createElement("button");
    backToTop.innerText = "⬆ Volver Arriba";
    backToTop.style.position = "fixed";
    backToTop.style.bottom = "20px";
    backToTop.style.right = "20px";
    backToTop.style.display = "none";
    backToTop.style.padding = "10px 15px";
    backToTop.style.border = "none";
    backToTop.style.background = "#007BFF";
    backToTop.style.color = "white";
    backToTop.style.borderRadius = "5px";
    backToTop.style.cursor = "pointer";
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function() {
        backToTop.style.display = window.scrollY > 200 ? "block" : "none";
    });

  
    // Ajuste: Si la ventana se redimensiona, cerrar menú móvil si es necesario
    window.addEventListener("resize", function() {
      if (window.innerWidth > 768 && navbarMenu.classList.contains("navbar__menu--open")) {
        navbarMenu.classList.remove("navbar__menu--open");
      }
    });
  });
  