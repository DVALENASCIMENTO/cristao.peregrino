import {
    digitarTexto,
    mostrarImagem,
    criarDecisao,
    criarBotaoProximo,
    criarBotaoInicio
  } from "./ui.js";
  
  export function renderChapter(container, showVersiculo, nextChapter) {
    // Cena 1: Entrada no Vale da Humilhação
    mostrarImagem(container, "assets/imagens/vale_humilhacao.jpg", "Vale da Humilhação");
    digitarTexto(container,
      "Fortalecido pelo tempo no Palácio Belo e equipado com a armadura de Deus, o Peregrino segue adiante. Logo, ele entra em uma região baixa e sombria: o Vale da Humilhação.",
      () => {
        digitarTexto(container,
          "Ali, a alma do viajante é testada. O orgulho morre e a confiança em Deus é levada ao limite. É nesse lugar que muitos desistem — mas o Peregrino está decidido a prosseguir.",
          () => {
            // Cena 2: Encontro com Apolion
            mostrarImagem(container, "assets/imagens/apolion.jpg", "Apolion aparece");
            digitarTexto(container,
              "De repente, surge um ser terrível: Apolion, inimigo das almas. Ele tenta amedrontar o Peregrino com acusações: 'Você não é digno. Volte atrás enquanto é tempo.'",
              () => {
                digitarTexto(container,
                  "O Peregrino responde com firmeza: 'Meu fardo foi levado na cruz. Agora pertenço ao Rei da Cidade Celestial. Não voltarei.'",
                  () => {
                    // Cena 3: A batalha espiritual
                    mostrarImagem(container, "assets/imagens/batalha.jpg", "Batalha espiritual");
                    digitarTexto(container,
                      "Apolion se enfurece e inicia uma batalha feroz. O Peregrino se defende com o escudo da fé e contra-ataca com a espada do Espírito — a Palavra de Deus.",
                      () => {
                        digitarTexto(container,
                          "Ferido, mas não vencido, o Peregrino resiste com fé. Após um confronto intenso, Apolion foge, derrotado. O Peregrino cai de joelhos e agradece a Deus pela vitória.",
                          () => {
                            // Decisão
                            criarDecisao(container, [
                              {
                                texto: "➤ Ceder às acusações, ao medo e recuar.",
                                true: false,
                                versiculo: "Resisti ao diabo, e ele fugirá de vós. — Tiago 4:7"
                              },
                              {
                                texto: "➤ Enfrentar o inimigo com fé e seguir adiante.",
                                true: true,
                                versiculo: "O Senhor é a minha luz e a minha salvação; a quem temerei? — Salmo 27:1"
                              }
                            ], showVersiculo, (escolha) => {
                              if (escolha) {
                                digitarTexto(container,
                                  "Mesmo ferido, o Peregrino permanece de pé. A vitória no Vale da Humilhação é uma marca de que a fé é mais forte que o medo.",
                                  () => {
                                    criarBotaoProximo(container, "Seguir para o Vale da Sombra da Morte", () => {
                                      nextChapter("capitulo10");
                                    });
                                    criarBotaoInicio(container);
                                  }
                                );
                              } else {
                                digitarTexto(container,
                                  "Apolion se aproxima novamente. Mas o Espírito recorda ao Peregrino: 'Você é meu. Levante-se e lute.'",
                                  () => {
                                    criarBotaoProximo(container, "Erguer-se com fé", () => {
                                      nextChapter("capitulo9");
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
        );
      }
    );
  }
  