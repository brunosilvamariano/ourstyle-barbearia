 // Função para rolagem suave e ocultar o menu
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 70; // Offset para compensar o cabeçalho
  
        // Rolagem suave
        window.scrollTo({
            top: target.offsetTop - offset,
            behavior: 'smooth'
        });
  
        // Ocultar o menu após o clique
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('#navbarNav');
  
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
            navbarToggler.setAttribute('aria-expanded', 'false');
        }
    });
  });