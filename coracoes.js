// =========================
// CORAÇÕES FLUTUANDO ❤️
// =========================

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function ajustarCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

ajustarCanvas();

window.addEventListener("resize", ajustarCanvas);

const coracoes = [];

for (let i = 0; i < 35; i++) {

    coracoes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        tamanho: Math.random() * 16 + 10,

        velocidade: Math.random() * 0.7 + 0.3,

        opacidade: Math.random() * 0.5 + 0.3,

        balanco: Math.random() * Math.PI * 2,

        velocidadeBalanco: Math.random() * 0.02 + 0.01
    });
}


function desenharCoracao(x, y, tamanho, opacidade) {

    ctx.save();

    ctx.globalAlpha = opacidade;

    ctx.font = `${tamanho}px Arial`;

    ctx.textAlign = "center";

    ctx.fillText("❤️", x, y);

    ctx.restore();
}


function animarCoracoes() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    coracoes.forEach(coracao => {

        coracao.y -= coracao.velocidade;

        coracao.balanco += coracao.velocidadeBalanco;

        coracao.x +=
            Math.sin(coracao.balanco) * 0.3;


        desenharCoracao(
            coracao.x,
            coracao.y,
            coracao.tamanho,
            coracao.opacidade
        );


        // Quando sair da tela,
        // volta para baixo

        if (coracao.y < -30) {

            coracao.y =
                canvas.height + 30;

            coracao.x =
                Math.random() * canvas.width;
        }

    });


    requestAnimationFrame(animarCoracoes);
}


animarCoracoes();
