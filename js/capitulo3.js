import {
    digitarTexto,
    mostrarImagem,
    criarDecisao,
    criarBotaoProximo,
    criarBotaoInicio
  } from "./ui.js";
  
  export function renderChapter(container, showVersiculo, nextChapter) {
    // Cena 1: Caminhada solitária
    mostrarImagem(container, "assets/imagens/planicie.jpg", "Caminho solitário");
    digitarTexto(container,
      "Sem a companhia de Volúvel, o Peregrino segue determinado, mantendo os olhos na luz ao longe. Mas o caminho, antes firme, começa a mudar...",
      () => {
        // Cena 2: Charco do Desânimo
        mostrarImagem(container, "assets/imagens/charco.jpg", "Charco do Desânimo");
        digitarTexto(container,
          "De repente, ele cai em um lamaçal profundo — o temido Charco do Desânimo. A lama pegajosa puxa seus pés, e o peso do fardo o faz afundar ainda mais.",
          () => {
            digitarTexto(container,
              "O lugar simboliza dúvida, tristeza e insegurança. O Peregrino tenta sair, mas cada tentativa o faz escorregar novamente. O desânimo se transforma em quase desespero.",
              () => {
                // Decisão
                criarDecisao(container, [
                  {
                    texto: "➤ Afundar-se no desânimo e desistir.",
                    true: false,
                    versiculo: "Por que estás abatida, ó minha alma? Espera em Deus, pois ainda o louvarei. — Salmo 42:11"
                  },
                  {
                    texto: "➤ Aceitar ajuda e continuar a jornada.",
                    true: true,
                    versiculo: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia. — Salmo 46:1"
                  }
                ], showVersiculo, (escolha) => {
                  if (escolha) {
                    // Aparece o Socorredor
                    mostrarImagem(container, "assets/imagens/socorredor.jpg", "O Socorredor");
                    digitarTexto(container,
                      "Quando tudo parecia perdido, surge um homem forte e sereno — o Socorredor. Sem julgar, ele entra no charco e estende a mão ao Peregrino.",
                      () => {
                        digitarTexto(container,
                          "Com esforço, puxa-o para fora da lama. O Peregrino agradece emocionado. O Socorredor explica: 'Muitos caem aqui porque não conhecem os caminhos firmes ou não estão preparados para as primeiras lutas da fé.'",
                          () => {
                            criarBotaoProximo(container, "Seguir para A Casa do Intérprete", () => {
                              nextChapter("capitulo4");
                            });
                            criarBotaoInicio(container);
                          }
                        );
                      }
                    );
                  } else {
                    // Escolheu desistir
                    mostrarImagem(container, "assets/imagens/charco_escuro.jpg", "Desespero no Charco");
                    digitarTexto(container,
                      "O Peregrino quase se rende. Mas em meio à lama, lembra de uma promessa: 'Deus é socorro presente na angústia.'",
                      () => {
                        digitarTexto(container,
                          "Com um último clamor de fé, vê o Socorredor surgir ao longe...",
                          () => {
                            criarBotaoProximo(container, "Aceitar ajuda e continuar", () => {
                              nextChapter("capitulo3"); // Reinicia capítulo como recomeço
                            });
                            criarBotaoInicio(container);
                          }
                        );
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
  