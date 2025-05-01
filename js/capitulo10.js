import {
    digitarTexto,
    mostrarImagem,
    criarDecisao,
    criarBotaoProximo,
    criarBotaoInicio
  } from "./ui.js";
  
  export function renderChapter(container, showVersiculo, nextChapter) {
    // Cena 1: Entrada no vale
    mostrarImagem(container, "assets/imagens/vale_sombra.jpg", "Vale da Sombra da Morte");
    digitarTexto(container,
      "Depois da vitória contra Apolion, o Peregrino prossegue. Logo, chega ao Vale da Sombra da Morte — um lugar escuro, estreito e cheio de terrores invisíveis.",
      () => {
        digitarTexto(container,
          "O caminho passa entre dois pântanos: um representa o erro doutrinário, o outro, o desespero. Nenhuma luz natural ilumina a estrada. Gritos, vultos e vozes malignas cercam o viajante.",
          () => {
            // Cena 2: Lutas internas
            mostrarImagem(container, "assets/imagens/angustia.jpg", "Lutas internas");
            digitarTexto(container,
              "Com a espada em punho e o rolo em mãos, o Peregrino caminha lentamente. Sente solidão, medo, e até dúvida se Deus ainda está com ele. Mas continua orando.",
              () => {
                digitarTexto(container,
                  "As vozes o tentam a blasfemar. Ele luta para manter a fé. Mesmo sem enxergar, segue um passo por vez, lembrando das promessas que ouviu na Casa do Intérprete.",
                  () => {
                    // Decisão
                    criarDecisao(container, [
                      {
                        texto: "➤ Parar, recuar ou se entregar ao medo e à escuridão.",
                        true: false,
                        versiculo: "Ainda que eu ande pelo vale da sombra da morte, não temerei mal algum, porque tu estás comigo. — Salmo 23:4"
                      },
                      {
                        texto: "➤ Continuar andando, mesmo sem enxergar, confiando em Deus.",
                        true: true,
                        versiculo: "Porque vivemos por fé, e não pelo que vemos. — 2 Coríntios 5:7"
                      }
                    ], showVersiculo, (escolha) => {
                      if (escolha) {
                        digitarTexto(container,
                          "Ao fim do vale, uma luz suave começa a surgir. O Peregrino sai das trevas e vê o sol da manhã brilhar. A esperança renasce em seu coração.",
                          () => {
                            criarBotaoProximo(container, "Seguir para Companheirismo com Fiel", () => {
                              nextChapter("capitulo11");
                            });
                            criarBotaoInicio(container);
                          }
                        );
                      } else {
                        digitarTexto(container,
                          "A escuridão o envolve, mas uma voz o lembra: 'Você não está só'. Ele retoma forças, ora em silêncio e decide prosseguir pela fé.",
                          () => {
                            criarBotaoProximo(container, "Retomar a caminhada pela fé", () => {
                              nextChapter("capitulo10");
                            });
                            criarBotaoInicio(container);
                          }
                        );
                      }
                    });
                  }
                );
              }
            );
          }
        );
      }
    );
  }
  