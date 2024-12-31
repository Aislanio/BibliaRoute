document.addEventListener("DOMContentLoaded", () => {
    const navLivros = document.querySelector(".nav-livros");
    let scrollPosition = 0; // Posição atual do scroll
    const scrollStep = 1; // Quantidade de pixels para rolar por intervalo
    const delay = 20; // Intervalo de tempo entre os passos (ms)
  
    function autoScroll() {
      scrollPosition += scrollStep;
      navLivros.scrollLeft = scrollPosition;
  
      // Reinicia a posição quando chega ao final
      if (scrollPosition >= navLivros.scrollWidth - navLivros.offsetWidth) {
        scrollPosition = 0;
      }
    }
  
    // Inicia o movimento automático
    setInterval(autoScroll, delay);
  });
  