// 💌 RECADO DO DIA

const recados = [
    "Bom dia, meu amor! Espero que seu dia seja lindo. ❤️",
    "Só passei para lembrar que eu te amo muito. 💕",
    "Seu sorriso sempre consegue melhorar meu dia. 🥰",
    "Você é uma das melhores coisas que já aconteceu na minha vida. ❤️",
    "Espero que hoje você tenha muitos motivos para sorrir. 💗",
    "Mesmo de longe, você está sempre nos meus pensamentos. 💌",
    "Obrigado por fazer parte da minha vida. ❤️",
    "Eu escolheria você de novo, sem pensar duas vezes. 🥰",
    "Que seu dia seja tão especial quanto você é para mim. 💕",
    "Só queria te lembrar: eu amo você. ❤️"
];


// ELEMENTOS DO HTML

const envelope = document.getElementById("envelope");
const botao = document.getElementById("abrirRecado");
const texto = document.getElementById("recadoTexto");
const data = document.getElementById("recadoData");


// DATA ATUAL

const hoje = new Date();


// MOSTRAR DATA

data.textContent = hoje.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
});


// ESCOLHER RECADO

const numeroDoDia = Math.floor(
    (hoje - new Date("2026-06-01T21:37:00")) /
    (1000 * 60 * 60 * 24)
);

const recado = recados[
    Math.abs(numeroDoDia) % recados.length
];


// ABRIR RECADO

function abrirRecado() {

    texto.textContent = recado;

    texto.classList.add("mostrar");

    envelope.style.transform =
        "scale(1.2) rotate(-5deg)";

    botao.textContent =
        "❤️ Recado aberto";

}


// BOTÃO

botao.addEventListener(
    "click",
    abrirRecado
);


// ENVELOPE

envelope.addEventListener(
    "click",
    abrirRecado
);
