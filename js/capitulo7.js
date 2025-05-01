import {
    digitarTexto,
    mostrarImagem,
    criarDecisao,
    criarBotaoProximo,
    criarBotaoInicio
  } from "./ui.js";
  
  export function renderChapter(container, showVersiculo, nextChapter) {
    // Cena 1: Diante da divisão do caminho
    mostrarImagem(container, "assets/imagens/divisao_caminhos.jpg", "Divisão dos caminhos");
    digitarTexto(container,
      "O Peregrino chega a um ponto onde a estrada se divide em três: um caminho íngreme que sobe direto por uma colina, e dois atalhos largos — um à esquerda, outro à direita.",
      () => {
        digitarTexto(container,
          "Diante de uma placa com a inscrição: 'O caminho estreito leva à vida', ele percebe que precisa tomar uma decisão. Subir exige esforço, mas é o caminho certo.",
          () => {
            // Cena 2: Subida cansativa
            mostrarImagem(container, "assets/imagens/colina.jpg", "Subida difícil");
            digitarTexto(container,
              "O Peregrino começa a subida pela Colina da Dificuldade. O calor e o cansaço apertam, mas ele continua firme. Encontra uma fonte onde se refresca e um abrigo onde decide descansar.",
              () => {
                // Cena 3: Descanso e perda do rolo
                mostrarImagem(container, "assets/imagens/dormindo.jpg", "Descanso na colina");
                digitarTexto(container,
                  "Cansado, adormece profundamente. Ao acordar e continuar a caminhada, percebe que perdeu o rolo da salvação!",
                  () => {
                    digitarTexto(container,
                      "Angustiado, volta sobre seus passos até encontrar o rolo no lugar onde dormiu. Com alívio e zelo renovado, prossegue sua jornada.",
                      () => {
                        // Decisão
                        criarDecisao(container, [
                          {
                            texto: "➤ Escolher um dos atalhos fáceis e evitar a subida difícil.",
                            true: false,
                            versiculo: "Entrai pela porta estreita... apertado é o caminho que leva à vida, e são poucos os que a encontram. — Mateus 7:13-14"
                          },
                          {
                            texto: "➤ Subir a Colina da Dificuldade com esforço e confiança.",
                            true: true,
                            versiculo: "Não vos canseis de fazer o bem, porque a seu tempo ceifaremos, se não houvermos desfalecido. — Gálatas 6:9"
                          }
                        ], showVersiculo, (escolha) => {
                          if (escolha) {
                            digitarTexto(container,
                              "O Peregrino segue com maturidade, aprendendo que até os justos podem errar e cair — mas arrependimento e retorno são possíveis. Ele guarda o rolo com mais zelo.",
                              () => {
                                criarBotaoProximo(container, "Seguir para O Palácio Belo", () => {
                                  nextChapter("capitulo8");
                                });
                                criarBotaoInicio(container);
                              }
                            );
                          } else {
                            digitarTexto(container,
                              "Ao seguir um dos atalhos, o Peregrino se depara com confusão e perigo. Percebe que abandonou o caminho certo e decide voltar arrependido.",
                              () => {
                                criarBotaoProximo(container, "Retornar à Colina da Dificuldade", () => {
                                  nextChapter("capitulo7");
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
  