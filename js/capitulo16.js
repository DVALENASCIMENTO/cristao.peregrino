import {
    digitarTexto,
    mostrarImagem,
    criarBotaoInicio
  } from "./ui.js";
  
  export function renderChapter(container, showVersiculo, nextChapter) {
    // Cena 1: Chegada na outra margem
    mostrarImagem(container, "assets/imagens/anjos_recebem.jpg", "Anjos aguardam");
    digitarTexto(container,
      "Do outro lado do Rio da Morte, anjos esperam com rostos radiantes. Eles recebem o Peregrino e Esperançoso com alegria, vestem-nos com túnicas resplandecentes e os conduzem até os portões da Cidade Celestial.",
      () => {
        // Cena 2: Entrada na cidade
        mostrarImagem(container, "assets/imagens/cidade_celestial.jpg", "Cidade Celestial");
        digitarTexto(container,
          "A cidade brilha como ouro puro. Pedras preciosas adornam os muros. Um livro é aberto — o Livro da Vida. O nome do Peregrino está lá. Ele venceu.",
          () => {
            digitarTexto(container,
              "As portas se abrem com louvor, música e festa. Não há mais dor, nem noite, nem separação. O Peregrino entra, e para sempre habitará com o Rei.",
              () => {
                digitarTexto(container,
                  "Fim da jornada. Início da eternidade.",
                  () => {
                    criarBotaoInicio(container, "Voltar ao Início");
                  }
                );
              }
            );
          }
        );
      }
    );
  }
  