import {
    digitarTexto,
    mostrarImagem,
    criarDecisao,
    criarBotaoProximo,
    criarBotaoInicio
  } from "./ui.js";
  
  export function renderChapter(container, showVersiculo, nextChapter) {
    // Cena 1: Chegada à Casa do Intérprete
    mostrarImagem(container, "assets/imagens/casa_interprete.jpg", "Casa do Intérprete");
    digitarTexto(container,
      "Após ser resgatado do Charco do Desânimo, o Peregrino é conduzido até um lugar especial: a Casa do Intérprete, onde aprenderá lições espirituais essenciais.",
      () => {
        // Cena 2: Quadro do Homem Sábio
        mostrarImagem(container, "assets/imagens/quadro.jpg", "Homem Sábio");
        digitarTexto(container,
          "Na primeira sala, vê o retrato de um pastor fiel com a Bíblia na mão, olhos voltados ao céu e a verdade nos lábios. Representa o verdadeiro guia espiritual.",
          () => {
            // Cena 3: Sala Empoeirada
            mostrarImagem(container, "assets/imagens/sala_poeira.jpg", "Sala Empoeirada");
            digitarTexto(container,
              "Na sala seguinte, uma mulher tenta varrer a poeira, mas só levanta mais sujeira. Só com água a sala é limpa. O Intérprete explica: o esforço humano sem graça só piora as coisas.",
              () => {
                // Cena 4: Paixão e Paciência
                mostrarImagem(container, "assets/imagens/paciencia.jpg", "Paixão e Paciência");
                digitarTexto(container,
                  "Dois meninos surgem: Paixão quer tudo agora e se frustra. Paciência espera e recebe o melhor depois. A fé espera com esperança.",
                  () => {
                    // Cena 5: Lareira Misteriosa
                    mostrarImagem(container, "assets/imagens/lareira.jpg", "Lareira da graça");
                    digitarTexto(container,
                      "Chamas continuam acesas mesmo com água sendo jogada. Por trás da parede, alguém derrama óleo. A graça de Deus sustenta invisivelmente.",
                      () => {
                        // Cena 6: Guerreiro da Fé
                        mostrarImagem(container, "assets/imagens/guerreiro.jpg", "Guerreiro da Fé");
                        digitarTexto(container,
                          "Um homem com armadura enfrenta guardas e entra triunfante por uma porta brilhante. O Intérprete diz: o Reino dos Céus é tomado por esforço e fé.",
                          () => {
                            // Cena 7: O Homem Desesperado
                            mostrarImagem(container, "assets/imagens/prisao.jpg", "Homem na prisão");
                            digitarTexto(container,
                              "Em outra sala, um homem em desespero chora na prisão. Rejeitou a graça e agora não tem esperança. Uma advertência solene.",
                              () => {
                                // Cena 8: O Sonhador
                                mostrarImagem(container, "assets/imagens/sonhador.jpg", "O Sonhador");
                                digitarTexto(container,
                                  "Por fim, um homem dorme tranquilo, mas acorda na escuridão. Quem vive acomodado será surpreendido no juízo.",
                                  () => {
                                    // Decisão final
                                    criarDecisao(container, [
                                      {
                                        texto: "➤ Ignorar os sinais e continuar por impulso.",
                                        true: false,
                                        versiculo: "E não nos cansemos de fazer o bem, pois no tempo próprio colheremos, se não desanimarmos. — Gálatas 6:9"
                                      },
                                      {
                                        texto: "➤ Refletir sobre os ensinamentos e mudar o coração.",
                                        true: true,
                                        versiculo: "Ensina-me, Senhor, o teu caminho, e andarei na tua verdade; dá-me um coração inteiramente fiel. — Salmo 86:11"
                                      }
                                    ], showVersiculo, (escolha) => {
                                      if (escolha) {
                                        digitarTexto(container,
                                          "O Peregrino sai da Casa do Intérprete mais sábio, com o coração atento, pronto para continuar sua jornada com entendimento.",
                                          () => {
                                            criarBotaoProximo(container, "Seguir para O Monte Calvário", () => {
                                              nextChapter("capitulo5");
                                            });
                                            criarBotaoInicio(container);
                                          }
                                        );
                                      } else {
                                        digitarTexto(container,
                                          "Mesmo confuso, o Peregrino é lembrado: a Palavra convida à perseverança e ao arrependimento. Ele decide recomeçar com humildade.",
                                          () => {
                                            criarBotaoProximo(container, "Refletir e recomeçar", () => {
                                              nextChapter("capitulo4");
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
        );
      }
    );
  }
  