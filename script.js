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

const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-control');
const musicIcon = document.getElementById('music-icon');
const volumeSlider = document.getElementById('volume-slider');

// Al cargar cualquier página del sitio
window.addEventListener('load', () => {
    const savedTime = localStorage.getItem('musicTime');
    const isPaused = localStorage.getItem('musicPaused');
    const savedVol = localStorage.getItem('musicVol');

    if (savedTime) music.currentTime = parseFloat(savedTime);
    if (savedVol) {
        music.volume = parseFloat(savedVol);
        volumeSlider.value = savedVol;
    } else {
        music.volume = 0.3; // Volumen inicial por defecto
    }

    // Si no estaba pausado, intentamos seguir sonando
    if (isPaused !== 'true') {
        music.play().catch(() => console.log("Clic en la página para seguir escuchando"));
    }
});

// Guardar progreso cada segundo
setInterval(() => {
    if (!music.paused) {
        localStorage.setItem('musicTime', music.currentTime);
    }
}, 1000);

// Play y Pause
musicBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        localStorage.setItem('musicPaused', 'false');
        musicIcon.className = 'fas fa-volume-up';
    } else {
        music.pause();
        localStorage.setItem('musicPaused', 'true');
        musicIcon.className = 'fas fa-volume-mute';
    }
});

// Guardar volumen cuando el usuario lo cambie
volumeSlider.addEventListener('input', (e) => {
    music.volume = e.target.value;
    localStorage.setItem('musicVol', e.target.value);
});

// 1. Declarar variables globales primero
let sakuraActive = true; 
let sakuraInterval;

// 2. Definir la función de creación
function createSakura() {
    if (!sakuraActive) return; // El candado de seguridad

    const sakura = document.createElement('div');
    sakura.classList.add('sakura');
    
    // Configuración de estilo y posición
    const size = Math.random() * 10 + 10 + 'px';
    sakura.style.width = size;
    sakura.style.height = size;
    sakura.style.left = Math.random() * window.innerWidth + 'px';
    
    const duration = Math.random() * 5 + 5 + 's';
    sakura.style.animation = `fall ${duration} linear infinite`;
    sakura.style.animationDelay = Math.random() * 5 + 's';

    document.body.appendChild(sakura);

    setTimeout(() => {
        sakura.remove();
    }, 10000);
}

// 3. Funciones de control
function startSakura() {
    sakuraActive = true;
    if (sakuraInterval) clearInterval(sakuraInterval);
    sakuraInterval = setInterval(createSakura, 300);
    
    const btn = document.getElementById('sakura-control');
    if(btn) {
        btn.style.opacity = "1"; // Totalmente visible
    }
}

function stopSakura() {
    sakuraActive = false;
    clearInterval(sakuraInterval);
    
    const existingSakura = document.querySelectorAll('.sakura');
    existingSakura.forEach(p => p.remove());

    const btn = document.getElementById('sakura-control');
    if(btn) {
        btn.style.opacity = "0.3"; // Se pone transparente pero NO desaparece
    }
}
// 4. Event Listener y Ejecución inicial
document.getElementById('sakura-control').addEventListener('click', () => {
    if (sakuraActive) stopSakura();
    else startSakura();
});

// Arrancar al cargar la página
startSakura();





document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("welcome-modal");
    const closeBtn = document.getElementById("close-modal");

    // Verificar si ya se mostró en esta sesión
    if (!sessionStorage.getItem("welcomeShown")) {
        // Mostrar el modal con un pequeño retraso para que sea suave
        setTimeout(() => {
            modal.classList.add("active");
        }, 1000);
    }

    // Función para cerrar
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
        // Guardar en la sesión para que no vuelva a salir hasta que cierren el navegador
        sessionStorage.setItem("welcomeShown", "true");
    });
});

let currentSlide = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    if (slides.length === 0) return;

    // Quitar "active" de todas
    slides.forEach(s => s.classList.remove("active"));
    
    currentSlide++;
    if (currentSlide > slides.length) { currentSlide = 1; }
    
    // Mostrar la siguiente
    slides[currentSlide - 1].classList.add("active");
    
    // Cambiar cada 3 segundos
    setTimeout(showSlides, 3000); 
}

// Inicia la animación cuando el modal se activa
document.addEventListener("DOMContentLoaded", () => {
    // ... tu código anterior del modal ...
    showSlides(); 
});


