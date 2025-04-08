function mostrarAlerta() {
    alert("Você concluiu seu login!");
  }
  function mostrarAlerta1() {
    alert("Mensagem enviada!");
  }
  
  function trocarTextoGenerico(meuBotao) {
    document.getElementById(meuBotao).textContent = "SAIBA MAIS EM BREVE!";
  }
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".meuBotao");
  
    botoes.forEach((botao) => {
      botao.addEventListener("mouseover", () => {
        botao.style.textDecoration = "underline"
        
      });
  
      botao.addEventListener("mouseout", () => {
        botao.style.textDecoration = "none"
      });

      
    });
  });


  
  