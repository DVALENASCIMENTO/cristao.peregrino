import {
    digitarTexto,
    mostrarImagem,
    criarDecisao,
    criarBotaoProximo,
    criarBotaoInicio
  } from "./ui.js";
  
  export function renderChapter(container, showVersiculo, nextChapter) {
    // Cena 1: Chegada ao Rio da Morte
    mostrarImagem(container, "assets/imagens/rio_morte.jpg", "O Rio da Morte");
    digitarTexto(container,
      "Depois de atravessarem os Campos de Delícias, o Peregrino e Esperançoso chegam ao limite da jornada: o Rio da Morte. Não há ponte — todos devem atravessar por dentro dele.",
      () => {
        digitarTexto(container,
          "O rio representa a morte física. Cada peregrino o experimenta de forma única. Esperançoso entra primeiro, com fé e firmeza, citando as promessas de Deus.",
          () => {
            // Cena 2: Luta de fé do Peregrino
            mostrarImagem(container, "assets/imagens/luta_fe.jpg", "Peregrino afundando");
            digitarTexto(container,
              "O Peregrino entra, mas logo começa a afundar. O medo o invade, dúvidas surgem, e ele sente que está perecendo. Vozes interiores o acusam.",
              () => {
                digitarTexto(container,
                  "Esperançoso, do outro lado, clama: 'Lembre-se do rolo! Da cruz! Das vestes novas!' Aos poucos, o Peregrino recupera a fé e avança com dificuldade, mas confiante.",
                  () => {
                    // Decisão
                    criarDecisao(container, [
                      {
                        texto: "➤ Afundar no medo da morte e perder de vista as promessas.",
                        true: false,
                        versiculo: "Preciosa é aos olhos do Senhor a morte dos seus santos. — Salmo 116:15"
                      },
                      {
                        texto: "➤ Confiar em Deus até o fim, mesmo nas águas mais profundas.",
                        true: true,
                        versiculo: "Combati o bom combate, terminei a corrida, guardei a fé. — 2 Timóteo 4:7-8"
                      }
                    ], showVersiculo, (escolha) => {
                      if (escolha) {
                        digitarTexto(container,
                          "O Peregrino sai das águas e pisa em terra firme. Anjos o aguardam. Ele venceu. Está prestes a entrar na Cidade Celestial.",
                          () => {
                            criarBotaoProximo(container, "Entrar na Cidade Celestial", () => {
                              nextChapter("capitulo16");
                            });
                            criarBotaoInicio(container);
                          }
                        );
                      } else {
                        digitarTexto(container,
                          "Mesmo tomado pelo medo, o Peregrino sente a mão invisível do Rei o erguer. Ele retoma o fôlego e atravessa com esperança.",
                          () => {
                            criarBotaoProximo(container, "Tentar novamente com fé", () => {
                              nextChapter("capitulo15");
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
  