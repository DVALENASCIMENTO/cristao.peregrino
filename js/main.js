import { showVersiculo } from "./ui.js";

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
      container.innerHTML = `<p>Erro ao carregar capítulo: ${error.message}</p>`;
    });
}

// Função para mostrar a tela inicial
function mostrarApresentacao() {
  if (rodape) rodape.style.display = "block";

  container.innerHTML = "";

  const imagem = document.createElement("img");
  imagem.src = "assets/imagens/apresentacao.jpg";
  imagem.alt = "Imagem de Apresentação";
  container.appendChild(imagem);

  const titulo = document.createElement("h1");
  titulo.textContent = "O Peregrino";
  container.appendChild(titulo);

  const subtitulo = document.createElement("h2");
  subtitulo.textContent = "Uma jornada espiritual inspirada na obra de John Bunyan";
  container.appendChild(subtitulo);

  const linkDownload = document.createElement("a");
    linkDownload.href = "assets/pdf/operegrinojohnbunyan.pdf"; // Caminho do PDF
    linkDownload.download = "O-Peregrino.pdf";       // Nome sugerido para o arquivo
    linkDownload.textContent = "📄 Baixar o Livro em PDF";
    linkDownload.style.display = "block";
    linkDownload.style.marginBottom = "1rem";
    linkDownload.style.color = "#1abc9c";
    linkDownload.style.textDecoration = "none";
    linkDownload.style.fontWeight = "bold";
    linkDownload.target = "_blank"; // Abre em nova aba, se quiser

    container.appendChild(linkDownload);


  const botao = document.createElement("button");
  botao.className = "true";
  botao.textContent = "Iniciar Jornada";
  botao.addEventListener("click", () => {
    if (audio) audio.play().catch(() => {
      console.warn("A reprodução automática foi bloqueada pelo navegador.");
    });
    nextChapter("capitulo1");
  });
  container.appendChild(botao);
}

// Início da aplicação
mostrarApresentacao();
