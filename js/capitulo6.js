import {
    digitarTexto,
    mostrarImagem,
    criarDecisao,
    criarBotaoProximo,
    criarBotaoInicio
  } from "./ui.js";
  
  export function renderChapter(container, showVersiculo, nextChapter) {
    // Cena 1: Retomando a estrada
    mostrarImagem(container, "assets/imagens/estrada.jpg", "Caminho estreito");
    digitarTexto(container,
      "Com o coração leve e espírito renovado após o Monte Calvário, o Peregrino prossegue pela estrada estreita, agora com vestes novas, um rolo em mãos e o selo em sua testa.",
      () => {
        // Cena 2: Encontro com dois viajantes
        mostrarImagem(container, "assets/imagens/formalista_hipocrisia.jpg", "Formalista e Hipocrisia");
        digitarTexto(container,
          "Dois homens se aproximam vindos de um atalho lateral. Chamam-se Formalista e Hipocrisia. Estão vestidos religiosamente, mas não passaram pelo portão estreito nem pelo Calvário.",
          () => {
            digitarTexto(container,
              "Eles afirmam que basta estar na estrada — não importa como se entrou. O Peregrino tenta alertá-los: 'Sem o selo, sem o rolo, não há entrada na Cidade Celestial.'",
              () => {
                digitarTexto(container,
                  "Os dois riem, ignoram o aviso e seguem com confiança na aparência externa.",
                  () => {
                    // Decisão
                    criarDecisao(container, [
                      {
                        texto: "➤ Seguir o exemplo deles e buscar atalhos para facilitar a jornada.",
                        true: false,
                        versiculo: "Há caminho que parece certo ao homem, mas no final conduz à morte. — Provérbios 14:12"
                      },
                      {
                        texto: "➤ Permanecer no caminho certo, ainda que mais difícil e solitário.",
                        true: true,
                        versiculo: "Seja forte e corajoso. Não se apavore, pois o Senhor estará com você por onde andar. — Josué 1:9"
                      }
                    ], showVersiculo, (escolha) => {
                      if (escolha) {
                        digitarTexto(container,
                          "Mesmo sozinho, o Peregrino permanece firme na estrada estreita. Sabe que aparência não é garantia — só a fé verdadeira o levará ao destino eterno.",
                          () => {
                            criarBotaoProximo(container, "Seguir para A Colina da Dificuldade", () => {
                              nextChapter("capitulo7");
                            });
                            criarBotaoInicio(container);
                          }
                        );
                      } else {
                        digitarTexto(container,
                          "Ao tentar buscar um atalho, percebe o desvio do propósito. Sente o Espírito alertar e decide voltar ao caminho certo.",
                          () => {
                            criarBotaoProximo(container, "Retornar ao caminho estreito", () => {
                              nextChapter("capitulo6");
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
  