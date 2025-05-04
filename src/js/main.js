// Rolagem suave para seções
const links = document.querySelectorAll('.header__nav-link');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Evitar o comportamento padrão do link
        const targetId = this.getAttribute('href').slice(1); // Pega o ID do destino
        const targetElement = document.getElementById(targetId);

        // Rola suavemente até a seção alvo
        window.scrollTo({
            top: targetElement.offsetTop - 80, // Ajuste para não ficar colado ao topo
            behavior: 'smooth',
        });
    });
});

// Adiciona um efeito de hover nas imagens
const cards = document.querySelectorAll('.personagens .card');

cards.forEach(card => {
    card.addEventListener('mouseover', function () {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s';
    });
    card.addEventListener('mouseout', function () {
        card.style.transform = 'scale(1)';
    });
});

// Ativa o menu hamburguer
const hamburguerIcon = document.getElementById('hamburguer-icon');
const navList = document.getElementById('nav-list');

hamburguerIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});

