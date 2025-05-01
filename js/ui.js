// Efeito de digitação
export function digitarTexto(container, texto, callback, velocidade = 80) {
    let i = 0;
    const p = document.createElement("p");
    container.appendChild(p);
  
    function digitar() {
      if (i < texto.length) {
        p.innerHTML += texto.charAt(i);
        i++;
        setTimeout(digitar, velocidade);
      } else if (callback) {
        callback();
      }
    }
  
    digitar();
  }
  
  // Insere imagem
  export function mostrarImagem(container, src, alt = "") {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    container.appendChild(img);
  }
  
  // Cria botões de decisão com versículo
  export function criarDecisao(container, opcoes, showVersiculo, onDecisao) {
    const botoesDiv = document.createElement("div");
  
    opcoes.forEach(op => {
      const btn = document.createElement("button");
      btn.className = op.true ? "true" : "false";
      btn.textContent = op.texto;
      btn.addEventListener("click", () => {
        showVersiculo(op.versiculo);
        if (onDecisao) onDecisao(op.true);
      });
      botoesDiv.appendChild(btn);
    });
  
    container.appendChild(botoesDiv);
  }
  
  // Botão para próximo capítulo
  export function criarBotaoProximo(container, texto, onClick) {
    const btn = document.createElement("button");
    btn.className = "true";
    btn.textContent = texto;
    btn.addEventListener("click", onClick);
    container.appendChild(btn);
  }
  
  // Botão para reiniciar
  export function criarBotaoInicio(container) {
    const btn = document.createElement("button");
    btn.className = "false";
    btn.textContent = "Voltar ao Início";
    btn.addEventListener("click", () => location.reload());
    container.appendChild(btn);
  }
  
  // Popup (para ser usado em main.js)
  export function showVersiculo(verso) {
    const popup = document.getElementById("versiculo-popup");
    const versiculoText = document.getElementById("versiculo-text");
    popup.style.display = "flex";
    versiculoText.innerHTML = verso;
  }
  