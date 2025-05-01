import {
    digitarTexto,
    mostrarImagem,
    criarDecisao,
    criarBotaoProximo,
    criarBotaoInicio
  } from "./ui.js";
  
  export function renderChapter(container, showVersiculo, nextChapter) {
    // Cena 1: Encontro com Fiel
    mostrarImagem(container, "assets/imagens/encontro_fiel.jpg", "Encontro com Fiel");
    digitarTexto(container,
      "Após atravessar o sombrio Vale da Sombra da Morte, o Peregrino vê a luz da manhã e respira aliviado. Logo, encontra outro viajante vindo da Cidade da Destruição. Seu nome é Fiel.",
      () => {
        digitarTexto(container,
          "Os dois se reconhecem como irmãos de fé. Compartilham experiências, tribulações e promessas. A comunhão renova suas forças e enche seus corações de alegria.",
          () => {
            // Cena 2: Importância da amizade cristã
            mostrarImagem(container, "assets/imagens/comunhao_fiel.jpg", "Caminho com Fiel");
            digitarTexto(container,
              "Juntos, seguem cantando, orando e se encorajando. Descobrem que a verdadeira amizade cristã edifica, consola e fortalece a jornada.",
              () => {
                // Decisão
                criarDecisao(container, [
                  {
                    texto: "➤ Seguir sozinho, por orgulho ou medo de dependência.",
                    true: false,
                    versiculo: "Melhor é serem dois do que um, porque têm melhor paga do seu trabalho. — Eclesiastes 4:9"
                  },
                  {
                    texto: "➤ Aceitar caminhar com Fiel e cultivar a comunhão.",
                    true: true,
                    versiculo: "Levai as cargas uns dos outros, e assim cumprireis a lei de Cristo. — Gálatas 6:2"
                  }
                ], showVersiculo, (escolha) => {
                  if (escolha) {
                    digitarTexto(container,
                      "O Peregrino caminha ao lado de Fiel com o coração leve. Descobre que Deus não nos chamou para lutarmos sozinhos, mas em unidade.",
                      () => {
                        criarBotaoProximo(container, "Seguir para a Cidade da Vaidade", () => {
                          nextChapter("capitulo12");
                        });
                        criarBotaoInicio(container);
                      }
                    );
                  } else {
                    digitarTexto(container,
                      "Ao tentar seguir sozinho, o Peregrino logo sente o peso do isolamento. Arrependido, volta para caminhar ao lado de Fiel, agora com humildade.",
                      () => {
                        criarBotaoProximo(container, "Reconectar-se com Fiel", () => {
                          nextChapter("capitulo11");
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
  