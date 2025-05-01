import {
    digitarTexto,
    mostrarImagem,
    criarDecisao,
    criarBotaoProximo,
    criarBotaoInicio
  } from "./ui.js";
  
  export function renderChapter(container, showVersiculo, nextChapter) {
    // Cena 1: Chegada à Cidade da Vaidade
    mostrarImagem(container, "assets/imagens/cidade_vaidade.jpg", "Cidade da Vaidade");
    digitarTexto(container,
      "O Peregrino e Fiel seguem juntos e chegam a uma cidade ruidosa e chamativa — a Cidade da Vaidade. Por ali passa a estrada estreita, e todos os viajantes precisam atravessá-la.",
      () => {
        // Cena 2: Feira da Vaidade
        mostrarImagem(container, "assets/imagens/feira_vaidade.jpg", "Feira da Vaidade");
        digitarTexto(container,
          "Na feira, vendem-se fama, prazeres, riquezas e sabedoria falsa. Os dois peregrinos causam espanto: suas vestes são diferentes, sua fala é celestial, e não demonstram interesse por nada da feira.",
          () => {
            digitarTexto(container,
              "A multidão se irrita. Acusam-nos de serem rebeldes. Eles são presos e levados a julgamento.",
              () => {
                // Cena 3: O julgamento
                mostrarImagem(container, "assets/imagens/julgamento.jpg", "Julgamento de Fiel");
                digitarTexto(container,
                  "Fiel declara sua fé com coragem. O Peregrino permanece firme ao seu lado. Fiel é condenado à morte e parte em paz, levado por uma carruagem de fogo à Cidade Celestial.",
                  () => {
                    // Cena 4: Peregrino é libertado
                    mostrarImagem(container, "assets/imagens/esperancoso.jpg", "Novo companheiro");
                    digitarTexto(container,
                      "O Peregrino é libertado e encontra um novo companheiro: Esperançoso, tocado pelo testemunho de Fiel. Juntos, retomam a jornada com fé renovada.",
                      () => {
                        // Decisão
                        criarDecisao(container, [
                          {
                            texto: "➤ Negociar com a feira, ceder às tentações e preservar a vida.",
                            true: false,
                            versiculo: "Não ameis o mundo, nem o que nele há... o mundo passa, mas aquele que faz a vontade de Deus permanece para sempre. — 1 João 2:15,17"
                          },
                          {
                            texto: "➤ Rejeitar as ofertas mundanas, mesmo que isso custe a liberdade ou a vida.",
                            true: true,
                            versiculo: "Sê fiel até à morte, e dar-te-ei a coroa da vida. — Apocalipse 2:10"
                          }
                        ], showVersiculo, (escolha) => {
                          if (escolha) {
                            digitarTexto(container,
                              "Com o coração firme, o Peregrino prossegue ao lado de Esperançoso. Ele sabe que a fidelidade pode custar muito — mas o céu vale mais.",
                              () => {
                                criarBotaoProximo(container, "Seguir para o Castelo da Dúvida", () => {
                                  nextChapter("capitulo13");
                                });
                                criarBotaoInicio(container);
                              }
                            );
                          } else {
                            digitarTexto(container,
                              "O brilho da feira quase o desvia, mas a lembrança do sacrifício de Fiel o desperta. Com lágrimas e arrependimento, volta ao caminho estreito.",
                              () => {
                                criarBotaoProximo(container, "Retomar a caminhada", () => {
                                  nextChapter("capitulo12");
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
  