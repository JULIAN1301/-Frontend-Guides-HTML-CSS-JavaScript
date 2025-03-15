document.addEventListener("DOMContentLoaded", function() {
    // Resaltar enlaces activos en la navegación
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Función para mostrar contenido dinámico en la página
    const sections = document.querySelectorAll("section");
    const menuItems = document.querySelectorAll(".navbar a");
    
    menuItems.forEach((item, index) => {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            sections.forEach(sec => sec.style.display = "none");
            sections[index].style.display = "block";
        });
    });

    // Inicializar la primera sección visible
    sections.forEach((sec, index) => {
        sec.style.display = index === 0 ? "block" : "none";
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

    backToTop.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});