const botoes = document.querySelectorAll(".botao");

for(let i=0; i<botoes.length; i++){
    botoes[i].onclick = function(){
        for(j=0; j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
    }
}
const abas = document.querySelectorAll(".aba-conteudo");

for(let i=0; i<abas.length; i++){
    abas[i].onclick = function(){
        for(j=0; j<abas.length;j++){
            abas[j].classList.remove("ativo");
        }
        abas[i].classList.add("ativo");
    }
}
