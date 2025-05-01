import {
    digitarTexto,
    mostrarImagem,
    criarBotaoProximo,
    criarBotaoInicio
  } from "./ui.js";
  
  export function renderChapter(container, showVersiculo, nextChapter) {
    // Cena 1: O narrador dorme numa caverna
    mostrarImagem(container, "assets/imagens/caverna.jpg", "Narrador dormindo");
    digitarTexto(container,
      "Em uma caverna escura e fria — a prisão de John Bunyan — um narrador repousa. Ele começa a sonhar com um homem chamado Cristão Peregrino, que carrega um fardo pesado nas costas e segura um livro firme nas mãos.",
      () => {
        // Cena 2: O homem lê e chora
        mostrarImagem(container, "assets/imagens/leitura.jpg", "Cristão lendo");
        digitarTexto(container,
          "Este homem lê o livro com atenção, e lágrimas escorrem pelo seu rosto. Ele clama: 'Que devo fazer para ser salvo?'",
          () => {
            // Cena 3: Volta para casa angustiado
            mostrarImagem(container, "assets/imagens/familia.jpg", "Família em casa");
            digitarTexto(container,
              "De volta para casa, tenta esconder sua dor, mas não consegue. Conta à esposa e aos filhos sobre o fardo e a destruição iminente da cidade.",
              () => {
                // Cena 4: Família não acredita
                mostrarImagem(container, "assets/imagens/duvida.jpg", "Família duvidando");
                digitarTexto(container,
                  "A família o ignora. Acham que enlouqueceu. Ele passa a noite inquieto, chorando.",
                  () => {
                    // Cena 5: No dia seguinte
                    mostrarImagem(container, "assets/imagens/duvida.jpg", "Zombaria da família");
                    digitarTexto(container,
                      "Na manhã seguinte, reafirma seus temores, mas é zombado.",
                      () => {
                        // Cena 6: Ora e busca ajuda
                        mostrarImagem(container, "assets/imagens/campo.jpg", "Oração no campo");
                        digitarTexto(container,
                          "Ele se retira, ora por sua família e caminha pelos campos, clamando a Deus. Então, surge uma figura ao longe...",
                          () => {
                            // Cena 7: Encontro com Evangelista
                            mostrarImagem(container, "assets/imagens/evangelista.jpg", "Evangelista");
                            digitarTexto(container,
                              "O Evangelista o confronta e entrega-lhe um pergaminho: “Fuja da ira que se aproxima!”. Ele aponta para uma luz brilhante e um portão estreito ao longe.",
                              () => {
                                // Cena 8: Fuga da cidade
                                mostrarImagem(container, "assets/imagens/fuga.jpg", "Fuga da cidade");
                                digitarTexto(container,
                                  "O homem corre com o coração cheio de temor, clamando: 'A vida! A vida eterna!' — e inicia sua jornada.",
                                  () => {
                                    criarBotaoProximo(container, "Seguir para A Jornada Começa", () => {
                                      nextChapter("capitulo2");
                                    });
                                    criarBotaoInicio(container);
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
  