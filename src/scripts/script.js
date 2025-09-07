document.addEventListener("DOMContentLoaded", () => {
    const buttons = { // Objeto con los botones del html
        frontend: document.getElementById("frontend_skill"),
        backend: document.getElementById("backend_skill"),
        widgets: document.getElementById("widgets_skill"),
    };

    const skills = { // Objeto con los contenedores de skills del html
        frontend: document.getElementById("skills_frontend"),
        backend: document.getElementById("skills_backend"),
        widgets: document.getElementById("skills_widgets"),
    };

    // Funcion de flecha para cambiar el color del boton que ejecuto el evento
    const changeColor = (button) => {
        Object.keys(buttons).forEach((key) => {
            // Obtener una lista con las claves del objeto de botones
            buttons[key].style.background =
                key === button ? "rgba(0, 0, 0, 0.5)" : "none";
        });
    };

    // Creador de escuchadores de eventos de click para cada boton
    Object.keys(buttons).forEach((key) => { // Obtener una lista con las claves del objeto de botones y crear eventos para cada uno
        buttons[key].addEventListener("click", () => {
            changeColor(key); // Ejecutar la funcion para cambiar el color del boton
            Object.keys(skills).forEach((skillKey) => { 
                // Obtener una lista con las claves del objeto de skills y recorrerlas hasta encontrar la ejecutadora del evento y cambiar su visibilidad
                skills[skillKey].style.display =
                    skillKey === key ? "grid" : "none";
            });
        });
    });

    // ======================================================
    // -- FUNCIÓN: Subir al tope de la página --
    // ======================================================
    // Función para subir al tope de la página
    const upButton = document.querySelector(".up");

    window.addEventListener("scroll", () => { // Escuchador del evento "scroll"
        if (window.scrollY > 300) { // Si la pantalla ya supero 300px
            upButton.style.display = "flex"; // Mostrar el boton
        } else {
            upButton.style.display = "none"; // Ocultar el boton
        }
    });

    upButton.addEventListener("click", () => { // Evento "click" al boton
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Efecto suave de desplazamiento
        });
    });
});
