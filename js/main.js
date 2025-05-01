// Importa a função para mostrar versículos
import { showVersiculo } from "./ui.js";

// Referências dos elementos
const container = document.getElementById("main-container");
const popup = document.getElementById("versiculo-popup");
const versiculoText = document.getElementById("versiculo-text");
const closePopup = document.getElementById("close-popup");
const rodape = document.getElementById("rodape");
const audio = document.getElementById("musica-fundo");

// Fecha o popup de versículo
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// Função para carregar capítulos dinamicamente
function nextChapter(nome) {
  if (rodape) rodape.style.display = "none";

  import(`./${nome}.js`)
    .then((module) => {
      container.innerHTML = "";
      module.renderChapter(container, showVersiculo, nextChapter);
    })
    .catch((error) => {
      container.innerHTML = `<p style="color: red;">Erro ao carregar capítulo: ${error.message}</p>`;
    });
}

// Função para mostrar a tela inicial (apresentação)
function mostrarApresentacao() {
  if (rodape) rodape.style.display = "block";

  // Limpa o conteúdo atual
  container.innerHTML = "";

  // Cria a imagem de apresentação
  const imagem = document.createElement("img");
  imagem.src = "assets/imagens/apresentacao.png";
  imagem.alt = "Imagem de Apresentação";
  imagem.className = "img-responsiva"; // Classe adicionada aqui
  imagem.style.maxWidth = "100%";
  imagem.style.height = "auto";
  imagem.style.marginBottom = "1rem";
  container.appendChild(imagem);

  // Cria o título
  const titulo = document.createElement("h1");
  titulo.textContent = "O Peregrino";
  container.appendChild(titulo);

  // Cria o subtítulo
  const subtitulo = document.createElement("h2");
  subtitulo.textContent = "Uma jornada espiritual inspirada na obra de John Bunyan";
  container.appendChild(subtitulo);

  // Link para download do livro
  const linkDownload = document.createElement("a");
  linkDownload.href = "assets/pdf/operegrinojohnbunyan.pdf";
  linkDownload.download = "O-Peregrino.pdf";
  linkDownload.textContent = "📄 Baixar o Livro em PDF";
  Object.assign(linkDownload.style, {
    display: "block",
    marginBottom: "1rem",
    color: "#1abc9c",
    textDecoration: "none",
    fontWeight: "bold",
  });
  linkDownload.target = "_blank";
  container.appendChild(linkDownload);

  // Botão de iniciar jornada
  const botao = document.createElement("button");
  botao.className = "true";
  botao.textContent = "Iniciar Jornada";
  botao.addEventListener("click", () => {
    // Tenta reproduzir o áudio
    if (audio) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.warn("A reprodução automática foi bloqueada pelo navegador.");
        });
      }
    }

    nextChapter("capitulo1");
  });

  container.appendChild(botao);
}

// Inicializa a aplicação
mostrarApresentacao();

// === AUTO ROLAGEM SUAVE ===
function iniciarAutoRolagem(velocidade = 0.5) {
    let scrollY = window.scrollY;
  
    function rolar() {
      scrollY += velocidade;
      window.scrollTo(0, scrollY);
      requestAnimationFrame(rolar);
    }
  
    requestAnimationFrame(rolar);
  }
  
  // Iniciar após pequeno delay para evitar conflitos
  setTimeout(() => {
    iniciarAutoRolagem(0.8); // Ajuste a velocidade aqui
  }, 1000);
  