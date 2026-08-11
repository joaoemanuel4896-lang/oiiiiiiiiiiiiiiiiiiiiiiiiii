// =========================
// FOGOS DE ARTIFÍCIO 🎆
// =========================

const canvasFogos = document.createElement("canvas");

canvasFogos.id = "canvasFogos";

document.body.appendChild(canvasFogos);

const ctxFogos = canvasFogos.getContext("2d");

canvasFogos.style.position = "fixed";
canvasFogos.style.inset = "0";
canvasFogos.style.width = "100%";
canvasFogos.style.height = "100%";
canvasFogos.style.pointerEvents = "none";
canvasFogos.style.zIndex = "0";

function tamanhoFogos() {
    canvasFogos.width = window.innerWidth;
    canvasFogos.height = window.innerHeight;
}

tamanhoFogos();

window.addEventListener("resize", tamanhoFogos);


let particulas = [];


function criarExplosao(x, y) {

    for (let i = 0; i < 45; i++) {

        const angulo =
            Math.random() * Math.PI * 2;

        const velocidade =
            Math.random() * 4 + 2;

        particulas.push({

            x: x,
            y: y,

            vx:
                Math.cos(angulo) *
                velocidade,

            vy:
                Math.sin(angulo) *
                velocidade,

            vida: 1,

            tamanho:
                Math.random() * 2 + 1
        });
    }
}


function desenharFogos() {

    ctxFogos.clearRect(
        0,
        0,
        canvasFogos.width,
        canvasFogos.height
    );


    particulas.forEach((p, index) => {

        p.x += p.vx;

        p.y += p.vy;

        p.vy += 0.04;

        p.vida -= 0.015;


        ctxFogos.globalAlpha =
            Math.max(p.vida, 0);

        ctxFogos.beginPath();

        ctxFogos.arc(
            p.x,
            p.y,
            p.tamanho,
            0,
            Math.PI * 2
        );

        ctxFogos.fillStyle = "#ff4da6";

        ctxFogos.fill();


        if (p.vida <= 0) {

            particulas.splice(index, 1);

        }

    });


    ctxFogos.globalAlpha = 1;

    requestAnimationFrame(desenharFogos);
}


desenharFogos();


// Primeiro fogo depois de alguns segundos

setTimeout(() => {

    criarExplosao(
        canvasFogos.width * 0.25,
        canvasFogos.height * 0.25
    );

}, 1500);


// Segundo

setTimeout(() => {

    criarExplosao(
        canvasFogos.width * 0.75,
        canvasFogos.height * 0.3
    );

}, 3000);
