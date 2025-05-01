import {
    digitarTexto,
    mostrarImagem,
    criarDecisao,
    criarBotaoProximo,
    criarBotaoInicio
  } from "./ui.js";
  
  export function renderChapter(container, showVersiculo, nextChapter) {
    // Cena 1: Fuga da cidade
    mostrarImagem(container, "assets/imagens/fuga.jpg", "Fuga com o fardo nas costas");
    digitarTexto(container,
      "O Peregrino, com o coração cheio de temor, foge da Cidade da Destruição, guiado pela luz mostrada pelo Evangelista. Atrás de si, ouve os gritos da esposa e dos filhos.",
      () => {
        // Cena 2: Reação da vizinhança
        mostrarImagem(container, "assets/imagens/vizinhos.jpg", "Vizinhos observando");
        digitarTexto(container,
          "Os vizinhos saem das casas. Alguns zombam dele, outros tentam assustá-lo. Dois homens — Obstinado e Volúvel — decidem persegui-lo.",
          () => {
            // Cena 3: Diálogo com Obstinado e Volúvel
            mostrarImagem(container, "assets/imagens/conversa.jpg", "Diálogo na estrada");
            digitarTexto(container,
              "Obstinado tenta convencê-lo a voltar. Diz que é loucura abandonar tudo por uma promessa incerta. Mas o Peregrino responde com firmeza: 'Li no livro que minha cidade será destruída. Eu busco a salvação e uma pátria melhor.'",
              () => {
                // Decisão
                criarDecisao(container, [
                  {
                    texto: "➤ Voltar para a segurança da cidade e da família.",
                    true: false,
                    versiculo: "Mas Jesus lhe disse: Ninguém que põe a mão no arado e olha para trás é apto para o Reino de Deus. — Lucas 9:62"
                  },
                  {
                    texto: "➤ Prosseguir pela fé rumo à luz desconhecida.",
                    true: true,
                    versiculo: "Pela fé, Abraão obedeceu quando foi chamado para ir a um lugar que devia receber por herança. — Hebreus 11:8"
                  }
                ], showVersiculo, (escolha) => {
                  if (escolha) {
                    // Prossegue com Volúvel
                    mostrarImagem(container, "assets/imagens/jornada.jpg", "Caminho com Volúvel");
                    digitarTexto(container,
                      "Volúvel decide acompanhá-lo por curiosidade. Durante o caminho, faz muitas perguntas sobre a Cidade Celestial e os perigos da jornada.",
                      () => {
                        digitarTexto(container,
                          "Ao ouvir sobre tribulações e lutas espirituais, Volúvel se assusta. Diz que não quer enfrentar dificuldades e decide voltar.",
                          () => {
                            digitarTexto(container,
                              "Mesmo só, o Peregrino continua firme, com os olhos na luz ao longe.",
                              () => {
                                criarBotaoProximo(container, "Seguir para O Charco do Desânimo", () => {
                                  nextChapter("capitulo3");
                                });
                                criarBotaoInicio(container);
                              }
                            );
                          }
                        );
                      }
                    );
                  } else {
                    // Escolheu voltar
                    mostrarImagem(container, "assets/imagens/alerta.jpg", "Alerta espiritual");
                    digitarTexto(container,
                      "Ao tentar voltar, sente um peso no coração. As palavras do Evangelista ecoam em sua mente... É tempo de retomar a caminhada!",
                      () => {
                        criarBotaoProximo(container, "Retomar jornada com fé", () => {
                          nextChapter("capitulo2"); // Reinicia o capítulo
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
  