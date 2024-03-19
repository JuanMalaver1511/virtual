document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.getElementById('carousel-inner');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const autoplayCheckbox = document.getElementById('autoplayCheckbox'); // Checkbox para activar/desactivar la reproducción automática

    const estrategias = [
        { nombre: "Simuladores", ejemplo: "En educación, son herramientas que utilizan tecnologías de simulación para crear entornos virtuales que imitan situaciones o procesos del mundo real. Permiten a los estudiantes practicar habilidades y conocimientos de manera segura y controlada, sin los riesgos o costos asociados con la práctica en situaciones reales." },
        { nombre: "Hologramas educativos", ejemplo: "Son representaciones tridimensionales de objetos o conceptos que se proyectan en el espacio mediante tecnologías de holografía. Estos hologramas permiten a los estudiantes interactuar con objetos virtuales y explorar conceptos de una manera más inmersiva y dinámica." },
        { nombre: "Flipped classroom", ejemplo: "Es un enfoque pedagógico en el que los estudiantes autónomamente se preparan para la clase revisando el material de aprendizaje, luego utilizan el tiempo en clase para discutir y aplicar lo que han aprendido." },
        { nombre: "Realidad aumentada", ejemplo: "En educación, es el uso de la tecnología de realidad aumentada para mejorar y enriquecer el proceso de aprendizaje, proporcionando a los estudiantes una experiencia más inmersiva y dinámica que puede incluir la visualización de objetos en 3D, simulaciones interactivas y la exploración de entornos virtuales." },
        { nombre: "Gamificación", ejemplo: "En educación, es el uso de elementos y técnicas de juego en el proceso de enseñanza / aprendizaje para aumentar la motivación, el compromiso y el rendimiento de los estudiantes. Incluye elementos como la creación de recompensas, el uso de niveles, el seguimiento del progreso y la competición, para fomentar la participación activa." },
        { nombre: "Inteligencia artificial", ejemplo: "En educación, es la aplicación de tecnologías de IA, como el aprendizaje automático y el procesamiento del lenguaje natural, para mejorar el proceso de enseñanza y aprendizaje. Incluye el desarrollo de sistemas de tutoría inteligente, la personalización del aprendizaje, la identificación de patrones de comportamiento de los estudiantes." }
    ];

    let position = 0;
    const cardsPerPage = 3;
    const totalCards = estrategias.length;
    const totalPages = Math.ceil(totalCards / cardsPerPage);
    let autoplayInterval = null; // Variable para almacenar el intervalo de reproducción automática

    function showCards() {
        carouselInner.innerHTML = ''; // Limpiar contenido previo
        const startIndex = position * cardsPerPage;
        const endIndex = Math.min(startIndex + cardsPerPage, totalCards);
        for (let i = startIndex; i < endIndex; i++) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h3>${estrategias[i].nombre}</h3>
                <p>${estrategias[i].ejemplo}</p>
            `;
            carouselInner.appendChild(card);
        }
        carouselInner.style.transition = 'transform 0.5s ease'; // Añadir transición al cambiar de página
        carouselInner.style.transform = `translateX(-${position * 0}%)`; // Desplazar el carrusel horizontalmente
    }

    showCards(); 

    prevBtn.addEventListener('click', function() {
        position = (position - 1 + totalPages) % totalPages;
        showCards();
    });

    nextBtn.addEventListener('click', function() {
        position = (position + 1) % totalPages;
        showCards();
    });

    function autoplay() {
        autoplayInterval = setInterval(function() {
            position = (position + 1) % totalPages;
            showCards();
        }, 7000); // Cambiar de tarjeta cada 7 segundos
    }



    autoplay(); // Iniciar reproducción automática al cargar la página

    autoplayCheckbox.addEventListener('change', function() {
        if (this.checked) {
            autoplay(); // Iniciar reproducción automática si el checkbox está marcado
        } else {
            clearInterval(autoplayInterval); // Detener reproducción automática si el checkbox está desmarcado
        }
    });
});

// JavaScript para desplegar/ocultar el menú en dispositivos móviles
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navItemsContainer = document.getElementById('nav-items-container');

    menuIcon.addEventListener('click', function() {
        navItemsContainer.classList.toggle('active');
    });
});


