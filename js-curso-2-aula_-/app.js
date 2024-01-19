let numerosSorteados = [];
function verificarChute(){

    let chute = document.querySelector("input").value;
    limparCampo();
    if (chute == numeroAleatorio){

        let tentativasCheck = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Parabêns, você descobriu com ${tentativas} ${tentativasCheck}`
        campoConfig("h1","Você acertou !");
        campoConfig('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }
    else{
        
        tentativas++;
        let numeroCheck = chute > numeroAleatorio ? "Maior" : "Menor";
        let mensagemDica = `O chute é ${numeroCheck} do que o numero secreto.`;
        campoConfig('p',mensagemDica);
        limparCampo();

    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function campoConfig(tag, texto){
    
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,"Brazilian Portuguese Female",{rate:1.2});
    //Esta função é muito boa, pois substitui eu ter que ter uma variável para cada campo
    //Posso apenas chamar a função, fornecer o campo e texto.

    //let titulo = document.querySelector('h1');
    //titulo.innerHTML = 'Adivinhação de número';
    //let paragrafo = document.querySelector('p');
    //paragrafo.innerHTML = "Escolha entre 1 e 10.";

    //isso vira: campoConfig('h1',"Adivinhação de número");
}

function gerarNumeroAleatorio(numMax){
    let numeroEscolhido = parseInt(Math.random()*numMax + 1);
    let QTDdeElementos = numerosSorteados.length;

    if (QTDdeElementos == numMax){
        numerosSorteados = [];
    }
    if (numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(numMax);
    }else {
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function mensagemInicial(){
    campoConfig('h1',"Adivinhação de número");
    campoConfig('p',`Escolha entre 1 e ${numMax}`);
}

function reiniciar(){

    limparCampo();
    mensagemInicial();
    numeroAleatorio = gerarNumeroAleatorio(numMax );
    console.log(numeroAleatorio);
    tentativas = 1;

    document.getElementById('reiniciar').setAttribute('disabled',  true);
}

numMax = 100;

mensagemInicial();

let tentativas = 1;
let chute;
let numeroAleatorio = gerarNumeroAleatorio(numMax);
//let numeroAleatorio = parseInt(Math.random()*numMax + 1);

console.log(numeroAleatorio);

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Adivinhação de número';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "Escolha entre 1 e 10.";

