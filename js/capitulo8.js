import {
    digitarTexto,
    mostrarImagem,
    criarDecisao,
    criarBotaoProximo,
    criarBotaoInicio
  } from "./ui.js";
  
  export function renderChapter(container, showVersiculo, nextChapter) {
    // Cena 1: Chegada ao Palácio Belo
    mostrarImagem(container, "assets/imagens/palacio_belo.jpg", "O Palácio Belo");
    digitarTexto(container,
      "Após subir a Colina da Dificuldade e recuperar o rolo da salvação, o Peregrino avista ao longe uma bela construção — o Palácio Belo, um refúgio para os viajantes do Caminho Estreito.",
      () => {
        // Cena 2: Recepção
        mostrarImagem(container, "assets/imagens/hospedeiras.jpg", "Filhas do Senhor da Casa");
        digitarTexto(container,
          "Ele é recebido com bondade pelas filhas do Senhor da casa: Prudência, Piedade, Caridade e Disciplina. Elas o examinam com sabedoria e o ajudam a fortalecer sua fé.",
          () => {
            // Cena 3: Acolhimento e ensino
            mostrarImagem(container, "assets/imagens/comunhao.jpg", "Comunhão e ensino");
            digitarTexto(container,
              "No palácio, o Peregrino encontra descanso, orientação bíblica e comunhão. Aprende sobre as Escrituras, as batalhas espirituais e a natureza do Reino de Deus.",
              () => {
                // Cena 4: Armadura espiritual
                mostrarImagem(container, "assets/imagens/armadura.jpg", "Armadura espiritual");
                digitarTexto(container,
                  "Antes de partir, é equipado com a armadura completa: elmo da salvação, couraça da justiça, escudo da fé, espada do Espírito, cinto da verdade e sandálias do evangelho.",
                  () => {
                    // Decisão
                    criarDecisao(container, [
                      {
                        texto: "➤ Permanecer acomodado no conforto do palácio e parar a jornada.",
                        true: false,
                        versiculo: "Desperta, ó tu que dormes, levanta-te dentre os mortos, e Cristo te iluminará. — Efésios 5:14"
                      },
                      {
                        texto: "➤ Aceitar a missão e prosseguir com coragem para o próximo desafio.",
                        true: true,
                        versiculo: "Combati o bom combate, terminei a corrida, guardei a fé. — 2 Timóteo 4:7"
                      }
                    ], showVersiculo, (escolha) => {
                      if (escolha) {
                        digitarTexto(container,
                          "O Peregrino parte fortalecido. Sabe que o descanso foi necessário, mas a jornada continua. Ele está pronto para batalhas mais profundas.",
                          () => {
                            criarBotaoProximo(container, "Seguir para o Vale da Humilhação", () => {
                              nextChapter("capitulo9");
                            });
                            criarBotaoInicio(container);
                          }
                        );
                      } else {
                        digitarTexto(container,
                          "O Peregrino hesita. O conforto o atrai, mas sente que algo está errado. Uma voz interior o chama de volta à missão.",
                          () => {
                            criarBotaoProximo(container, "Retomar a jornada com propósito", () => {
                              nextChapter("capitulo8");
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
  