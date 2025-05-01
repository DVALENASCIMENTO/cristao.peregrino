import {
    digitarTexto,
    mostrarImagem,
    criarDecisao,
    criarBotaoProximo,
    criarBotaoInicio
  } from "./ui.js";
  
  export function renderChapter(container, showVersiculo, nextChapter) {
    // Cena 1: Chegada ao Monte Calvário
    mostrarImagem(container, "assets/imagens/calvario.jpg", "Monte Calvário");
    digitarTexto(container,
      "Após deixar a Casa do Intérprete, o Peregrino caminha com passos mais firmes. Ao longe, avista uma colina com uma cruz simples, porém resplandecente. É o Monte Calvário.",
      () => {
        // Cena 2: O fardo se desprende
        mostrarImagem(container, "assets/imagens/fardo_caindo.jpg", "Fardo sendo liberado");
        digitarTexto(container,
          "Ao contemplar a cruz com fé, algo extraordinário acontece: o fardo pesado que carregava desde o início se desprende de suas costas, rola colina abaixo e desaparece para sempre.",
          () => {
            digitarTexto(container,
              "Esse é o momento de libertação: o peso do pecado foi levado. O Peregrino chora de alívio, com o coração leve pela primeira vez.",
              () => {
                // Cena 3: Três seres celestiais
                mostrarImagem(container, "assets/imagens/anjos.jpg", "Mensageiros celestiais");
                digitarTexto(container,
                  "Três mensageiros celestiais se aproximam. Um lhe entrega vestes novas. Outro marca sua testa com um selo. O terceiro lhe dá um rolo com a garantia da salvação.",
                  () => {
                    // Decisão
                    criarDecisao(container, [
                      {
                        texto: "➤ Rejeitar a cruz e manter o fardo.",
                        true: false,
                        versiculo: "Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei. — Mateus 11:28"
                      },
                      {
                        texto: "➤ Aceitar a cruz, entregar o fardo e receber a nova identidade.",
                        true: true,
                        versiculo: "Se alguém está em Cristo, nova criatura é; as coisas velhas já passaram; eis que tudo se fez novo. — 2 Coríntios 5:17"
                      }
                    ], showVersiculo, (escolha) => {
                      if (escolha) {
                        digitarTexto(container,
                          "O Peregrino se reveste com as novas vestes, segura firme o rolo e sente uma alegria indescritível: ele agora pertence ao Rei.",
                          () => {
                            criarBotaoProximo(container, "Seguir para Encontros na Estrada", () => {
                              nextChapter("capitulo6");
                            });
                            criarBotaoInicio(container);
                          }
                        );
                      } else {
                        digitarTexto(container,
                          "Mesmo tentando rejeitar o alívio, o chamado da cruz o alcança. O Peregrino ainda sente o convite de Cristo ecoando no coração.",
                          () => {
                            criarBotaoProximo(container, "Refletir e aceitar a cruz", () => {
                              nextChapter("capitulo5");
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
  