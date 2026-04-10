// Esperamos a que cargue el documento
document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    // Función para ejecutar la búsqueda
    const ejecutarBusqueda = () => {
        const query = searchInput.value.toLowerCase().trim();
        
        if (query === "") {
            alert("¡Escribe algo para buscar, mi king!");
            return;
        }

        // Sistema de rutas según lo que escriban
        if (query.includes("aiko")) {
            window.location.href = "aiko-origins.html";
        } else if (query.includes("proyecto")) {
            window.location.href = "proyectos.html";
        } else if (query.includes("voz") || query.includes("doblaje") || query.includes("actor")) {
            window.location.href = "dobladores.html";
        } else if (query.includes("sobre") || query.includes("quien")) {
            window.location.href = "sobre-mi.html";
        } else {
            alert("No encontré resultados para '" + query + "', pero lo añadiré pronto.");
        }
    };

    // Click en la lupa
    searchBtn.addEventListener('click', ejecutarBusqueda);

    // Presionar Enter en el teclado
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            ejecutarBusqueda();
        }
    });
});