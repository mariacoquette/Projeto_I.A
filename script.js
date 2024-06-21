const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Não saber o que vai acontecer no futuro te assusta?",
        alternativas: [
            {
                texto: "Não me preocupo tanto com o que acontecera, pois prefiro viver o agora e aproveitar!",
                afirmacao: "Viver um dia de cada vez pensando que pode ser o útimo e, aproveitar cada um ao máximo"
            },
            {
                texto: "Sim, me assusta saber o que acontecera no dia de amanhã por isso tento estar previnida.",
                afirmacao: "A insegurança e o estresse que o mundo produz, torna jovens inseguros e medrososos. "
            }
        ]
    },
    {
        enunciado: " O que esta acotecendo na atualidade pode mudar o seu futuro?",
        alternativas: [
            {
                texto: "Talvez, já que as mudanças do mundo também podem me afetar",
                afirmacao: "A mudança do mundo sempre afetara quem viver nele"
            },
            {
                texto: "Não, pois minhas decisões sou eu que tomo, e meu futuro eu decido!",
                afirmacao: "As coisas acontecem por consequencia das minhas decisões."
            }
        ]
    },
    {
        enunciado: "Você acha que o mundo hoje esta mais negativo ou mais positivo?",
        alternativas: [
            {
                texto: "Negativo, pois esta nitido a ausência de carater e respeito das pessoas.",
                afirmacao: "Grande parte das pesoas estão ocupadas de mais pensando nelas mesmas."
            },
            {
                texto: "Positivo, porque os novos avanços vem dando maior liberdade as pessoas.",
                afirmacao: "Essa maior liberdade vem tomando conta do mundo e tornando todos nós mais soltos."
            }
        ]
    },
    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();