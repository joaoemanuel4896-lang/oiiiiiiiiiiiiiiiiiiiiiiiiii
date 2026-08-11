// ==========================================
// 💌 NOSSO DIÁRIO — 365 REC​​ADOS
// ==========================================

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
    "Só queria te lembrar: eu amo você. ❤️",
    "Você deixa meus dias muito mais bonitos. ✨",
    "Tenho muita sorte por ter você na minha vida. 💗",
    "Espero que você esteja sorrindo agora. Se não, sorria por mim. ❤️",
    "Mais um dia da nossa história. E eu quero muitos outros. 💕",
    "Você é meu pensamento favorito durante o dia. 🥰",
    "Obrigado por cada conversa e cada momento. ❤️",
    "Mesmo quando estamos longe, meu carinho por você continua pertinho. 💌",
    "Você é muito importante para mim. Nunca se esqueça disso. ❤️",
    "Que hoje seja um dia cheio de coisas boas para você. 💗",
    "Eu gosto de lembrar que tenho você na minha vida. 🥰",
    "Seu jeito é uma das coisas que mais gosto em você. ❤️",
    "Você consegue transformar um dia comum em um dia especial. 💕",
    "Meu maior desejo é continuar vivendo momentos lindos com você. ❤️",
    "Espero que hoje você sinta todo o carinho que tenho por você. 💌",
    "Você mora em um cantinho muito especial do meu coração. ❤️",
    "Só mais um recadinho para dizer que eu te amo. 🥰",
    "Você é incrível do seu jeitinho. Nunca mude para agradar ninguém. 💗",
    "Meu dia fica melhor quando lembro de você. ❤️",
    "Obrigado por ser você. 💕",
    "Eu amo nossas conversas, até as mais bobas. 😂❤️",
    "Você consegue me fazer sorrir sem nem perceber. 🥰",
    "Espero que seu dia esteja sendo maravilhoso. 💗",
    "Se eu pudesse, te daria um abraço agora. ❤️",
    "Você é uma pessoa que quero guardar para sempre na minha história. 💕",
    "Cada lembrança nossa tem um lugar especial em mim. ❤️",
    "Eu amo quando você aparece e muda completamente meu dia. 🥰",
    "Que nunca faltem motivos para nós dois sorrirmos juntos. 💗",
    "Você é especial demais para mim. ❤️",
    "Hoje eu só quero que você saiba que estou pensando em você. 💌",
    "Eu amo ter você para chamar de meu amor. ❤️",
    "Você faz parte dos meus melhores pensamentos. 💕",
    "Obrigado por todos os momentos que já vivemos. 🥰",
    "Ainda quero criar muitas histórias ao seu lado. ❤️",
    "Você é meu motivo para sorrir em muitos dias. 💗",
    "Espero que você nunca duvide do meu carinho por você. ❤️",
    "Mais um dia, mais uma oportunidade de te amar. 💕",
    "Você deixa tudo mais bonito quando está por perto. 🥰",
    "Meu coração sempre fica feliz quando penso em você. ❤️",

    "Eu gosto muito de nós dois. 💗",
    "Você é uma lembrança boa até nos dias difíceis. ❤️",
    "Queria poder guardar todos os nossos momentos em uma caixinha. 💌",
    "Você merece todo carinho do mundo. 🥰",
    "Eu amo quando conseguimos conversar e esquecer do resto. ❤️",
    "Que nosso relacionamento continue cheio de respeito, carinho e amor. 💕",
    "Você é uma pessoa que eu quero continuar conhecendo cada vez mais. ❤️",
    "Obrigado por confiar em mim. 💗",
    "Espero poder te fazer feliz muitas vezes ainda. 🥰",
    "Você é muito mais importante para mim do que consigo explicar. ❤️",
    "Meu carinho por você cresce a cada dia. 💕",
    "Hoje é mais um dia para agradecer por ter você. ❤️",
    "Você é simplesmente especial. 💗",
    "Se eu pudesse escolher uma pessoa para viver muitos momentos, escolheria você. 🥰",
    "Eu amo o jeito que você faz parte da minha vida. ❤️",
    "Nunca esqueça que você tem alguém torcendo por você. 💌",
    "Espero que seu dia seja leve e cheio de coisas boas. 💕",
    "Você merece sorrir muito hoje. ❤️",
    "Tenho orgulho da pessoa que você é. 💗",
    "Você sempre vai ter um lugar especial no meu coração. 🥰",

    // 71–365
    ...Array.from({ length: 295 }, (_, i) => {
        const mensagens = [
            "Mais um dia da nossa história. ❤️",
            "Só passando para dizer: eu amo você. 💕",
            "Você continua sendo meu pensamento favorito. 🥰",
            "Espero que seu dia seja maravilhoso. ❤️",
            "Você é muito especial para mim. 💗",
            "Obrigado por existir na minha vida. ❤️",
            "Que hoje você sorria bastante. 💕",
            "Meu carinho por você é enorme. 🥰",
            "Você sempre consegue alegrar meus dias. ❤️",
            "Eu escolheria você novamente. 💗",
            "Mais um dia pensando em você. ❤️",
            "Você merece tudo de bom. 💕",
            "Estou feliz por ter você na minha vida. 🥰",
            "Nunca esqueça o quanto você é importante. ❤️",
            "Espero viver muitos momentos ao seu lado. 💗",
            "Você é uma parte muito bonita da minha história. ❤️",
            "Meu coração fica feliz quando penso em você. 💕",
            "Obrigado por cada momento juntos. 🥰",
            "Hoje também tem alguém pensando em você. ❤️",
            "Que nosso amor continue crescendo. 💗"
        ];

        return mensagens[i % mensagens.length];
    })
];


// ==========================================
// 📅 ESCOLHER O RECADO DO DIA
// ==========================================

const dataInicio = new Date("2026-06-01T21:37:00");

const agora = new Date();

const diferenca = agora - dataInicio;

const diaDoRelacionamento = Math.max(
    0,
    Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    )
);


// Escolhe um dos 365 recados
const numeroRecado =
    diaDoRelacionamento % recados.length;

const recadoDoDia =
    recados[numeroRecado];


// ==========================================
// 💌 ELEMENTOS
// ==========================================

const envelope =
    document.getElementById("envelope");

const botao =
    document.getElementById("abrirRecado");

const texto =
    document.getElementById("recadoTexto");

const dataElemento =
    document.getElementById("recadoData");


// ==========================================
// 📅 MOSTRAR DATA
// ==========================================

if (dataElemento) {

    dataElemento.textContent =
        agora.toLocaleDateString(
            "pt-BR",
            {
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );
}


// ==========================================
// 💌 ABRIR RECADO
// ==========================================

function abrirRecado() {

    if (!texto) return;

    texto.textContent =
        recadoDoDia;

    texto.classList.add("mostrar");

    if (envelope) {

        envelope.style.transform =
            "scale(1.15) rotate(-5deg)";
    }

    if (botao) {

        botao.textContent =
            "❤️ Recado aberto";
    }
}


// Clique no envelope
if (envelope) {

    envelope.addEventListener(
        "click",
        abrirRecado
    );
}


// Clique no botão
if (botao) {

    botao.addEventListener(
        "click",
        abrirRecado
    );
}
