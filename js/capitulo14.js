import {
    digitarTexto,
    mostrarImagem,
    criarDecisao,
    criarBotaoProximo,
    criarBotaoInicio
  } from "./ui.js";
  
  export function renderChapter(container, showVersiculo, nextChapter) {
    // Cena 1: Chegada aos Campos de Delícias
    mostrarImagem(container, "assets/imagens/campos_delicias.jpg", "Campos de Delícias");
    digitarTexto(container,
      "Após escapar do Castelo da Dúvida, o Peregrino e Esperançoso entram em uma terra serena e bela: os Campos de Delícias. O ar é leve, as flores exalam louvor e a luz nunca desaparece.",
      () => {
        digitarTexto(container,
          "Ali experimentam profunda comunhão com Deus, colhem frutos espirituais e sentem que estão bem próximos da Cidade Celestial.",
          () => {
            // Cena 2: Encontro com Ignorância
            mostrarImagem(container, "assets/imagens/ignorancia.jpg", "Ignorância");
            digitarTexto(container,
              "Encontram um homem chamado Ignorância. Educado e religioso, ele diz que nunca passou pela porta estreita e que não precisa de arrependimento.",
              () => {
                digitarTexto(container,
                  "O Peregrino tenta alertá-lo: 'Não basta estar na estrada. É preciso ter entrado pela fé, com o coração transformado.'",
                  () => {
                    // Cena 3: Encontro com Voluntário
                    mostrarImagem(container, "assets/imagens/voluntario.jpg", "Voluntário");
                    digitarTexto(container,
                      "Logo encontram Voluntário, um viajante que aparenta ser fiel, mas sua motivação é apenas agradar os outros. Sua fé não é genuína.",
                      () => {
                        digitarTexto(container,
                          "Os dois encontros servem de alerta: até nos momentos de paz, é preciso discernimento. Nem todos os que caminham chegam ao fim.",
                          () => {
                            // Decisão
                            criarDecisao(container, [
                              {
                                texto: "➤ Relaxe completamente nos momentos de paz e esqueça a vigilância.",
                                true: false,
                                versiculo: "Aquele, pois, que pensa estar em pé, veja que não caia. — 1 Coríntios 10:12"
                              },
                              {
                                texto: "➤ Desfrute o descanso, mas permaneça vigilante e atento até o fim.",
                                true: true,
                                versiculo: "Sede sóbrios e vigilantes. O diabo anda em derredor, como leão que ruge, procurando a quem devorar. — 1 Pedro 5:8"
                              }
                            ], showVersiculo, (escolha) => {
                              if (escolha) {
                                digitarTexto(container,
                                  "Mesmo nos dias de bênção, o Peregrino e Esperançoso permanecem atentos. Sabem que a jornada ainda não acabou — o rio se aproxima.",
                                  () => {
                                    criarBotaoProximo(container, "Seguir para o Rio da Morte", () => {
                                      nextChapter("capitulo15");
                                    });
                                    criarBotaoInicio(container);
                                  }
                                );
                              } else {
                                digitarTexto(container,
                                  "O relaxamento os faz perder o foco. Uma voz interior os desperta: 'É tempo de vigiar, pois a travessia final está próxima.'",
                                  () => {
                                    criarBotaoProximo(container, "Voltar à vigilância", () => {
                                      nextChapter("capitulo14");
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
  