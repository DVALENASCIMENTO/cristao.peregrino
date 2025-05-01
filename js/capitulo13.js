import {
    digitarTexto,
    mostrarImagem,
    criarDecisao,
    criarBotaoProximo,
    criarBotaoInicio
  } from "./ui.js";
  
  export function renderChapter(container, showVersiculo, nextChapter) {
    // Cena 1: Saída do caminho
    mostrarImagem(container, "assets/imagens/atalho.jpg", "Atalho perigoso");
    digitarTexto(container,
      "Enquanto caminham, Peregrino e Esperançoso enfrentam terreno pedregoso. Vendo uma trilha mais fácil ao lado, decidem segui-la por um tempo.",
      () => {
        digitarTexto(container,
          "Logo são surpreendidos por uma tempestade. A trilha os leva direto a um castelo escuro e assustador — o Castelo da Dúvida, lar do gigante Desespero.",
          () => {
            // Cena 2: Prisão
            mostrarImagem(container, "assets/imagens/prisao_castelo.jpg", "Masmorra escura");
            digitarTexto(container,
              "O gigante os captura e tranca numa masmorra fria e úmida. Sem luz, alimento ou esperança, o desânimo começa a consumir os dois peregrinos.",
              () => {
                // Cena 3: Fundo do poço
                mostrarImagem(container, "assets/imagens/desespero.jpg", "Desânimo profundo");
                digitarTexto(container,
                  "A cada dia, o gigante os visita com zombarias e ameaças. O Peregrino quase perde a fé. Esperançoso, ainda que fraco, continua lembrando das promessas de Deus.",
                  () => {
                    digitarTexto(container,
                      "No auge da angústia, o Peregrino lembra que carrega a chave da Promessa — dada a ele na Casa do Intérprete!",
                      () => {
                        // Cena 4: Libertação
                        mostrarImagem(container, "assets/imagens/libertacao.jpg", "Fuga do castelo");
                        digitarTexto(container,
                          "Com a chave, abrem a cela, destrancam os portões e escapam do castelo. Retornam ao caminho original com mais reverência e vigilância.",
                          () => {
                            // Decisão
                            criarDecisao(container, [
                              {
                                texto: "➤ Ceder ao desespero e perder a fé.",
                                true: false,
                                versiculo: "Por que estás abatida, ó minha alma? Espera em Deus, pois ainda o louvarei. — Salmo 42:5"
                              },
                              {
                                texto: "➤ Lembrar das promessas de Deus e buscar a saída.",
                                true: true,
                                versiculo: "Fiel é o que prometeu. — Hebreus 10:23"
                              }
                            ], showVersiculo, (escolha) => {
                              if (escolha) {
                                digitarTexto(container,
                                  "O Peregrino sai mais forte e vigilante, consciente de que até os fiéis podem vacilar — mas as promessas de Deus nunca falham.",
                                  () => {
                                    criarBotaoProximo(container, "Seguir para os Campos de Delícias", () => {
                                      nextChapter("capitulo14");
                                    });
                                    criarBotaoInicio(container);
                                  }
                                );
                              } else {
                                digitarTexto(container,
                                  "Mesmo em dúvida, o Peregrino é lembrado: Deus não desiste dos abatidos. Ele clama por ajuda e encontra forças na lembrança da Palavra.",
                                  () => {
                                    criarBotaoProximo(container, "Tentar novamente com fé", () => {
                                      nextChapter("capitulo13");
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
  