const mensagens = [
    "Desenvolvedor em formação com paixão por código.",
    "Criando páginas bonitas e funcionais.",
    "Transformando ideias em projetos digitais.",
    "Bem-vindo ao meu universo web!"
  ];
  
  let i = 0;
  
  function mostrarMensagem() {
    const mensagemElemento = document.getElementById("mensagem-dinamica");
    if (mensagemElemento) {
      mensagemElemento.textContent = mensagens[i];
      i = (i + 1) % mensagens.length;
    }
  }
  
  function mostrarMais(event) {
    const paragrafo = document.getElementById("textoSobre");
    if (paragrafo) {
      paragrafo.innerHTML = `
        Olá! Meu nome é Carlos, tenho 26 anos e sou estudante de Desenvolvimento Web, apaixonado por tecnologia.
        Gosto de transformar ideias em soluções digitais práticas, funcionais e visualmente atrativas.
        Estou sempre em busca de novos conhecimentos, tendências e ferramentas que me ajudem a evoluir como desenvolvedor.
        Meu foco é criar experiências que façam sentido para os usuários, combinando design e funcionalidade.
        No meu tempo livre, gosto de explorar novas linguagens, participar de comunidades online e desenvolver projetos pessoais.
      `;
      event.target.style.display = "none";
    }
  }
  
  window.onload = mostrarMensagem;

  document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const mensagemSucesso = document.getElementById("mensagemSucesso");
  
    if(nome === "" || email === "" || mensagem === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
      alert("Por favor, insira um email válido.");
      return;
    }
  
    mensagemSucesso.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    mensagemSucesso.style.display = "block";

    this.reset();
  });

  const btnMostrarMais = document.getElementById("btnMostrarMais");
const listaProjetos = document.getElementById("listaProjetos");

const projetosExtras = [
  { nome: "Projeto 6 - desafio-logica", url: "https://github.com/Carlosjrv25/desafio-logica" },
];

btnMostrarMais.addEventListener("click", () => {
  projetosExtras.forEach(proj => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = proj.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = proj.nome;
    li.appendChild(a);
    listaProjetos.appendChild(li);
  });
  
  btnMostrarMais.style.display = "none";
});
function toggleDetalhes(botao) {
    const detalhes = botao.nextElementSibling;
    if (detalhes.style.display === "none") {
      detalhes.style.display = "block";
      botao.textContent = "Esconder detalhes";
    } else {
      detalhes.style.display = "none";
      botao.textContent = "Ver detalhes";
    }
  }
  

  
  