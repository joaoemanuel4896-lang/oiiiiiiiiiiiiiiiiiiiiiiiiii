// =========================
// CONTADOR DO RELACIONAMENTO ❤️
// =========================

// Data em que vocês começaram a namorar
const inicio = new Date("2026-06-01T21:37:00");

function atualizarContador() {

    const agora = new Date();

    const diferenca = agora - inicio;

    // Evita números negativos
    if (diferenca < 0) {
        return;
    }

    const segundosTotais = Math.floor(diferenca / 1000);

    const dias = Math.floor(
        segundosTotais / 86400
    );

    const horas = Math.floor(
        (segundosTotais % 86400) / 3600
    );

    const minutos = Math.floor(
        (segundosTotais % 3600) / 60
    );

    const segundos = segundosTotais % 60;


    document.getElementById("dias").textContent =
        dias;

    document.getElementById("horas").textContent =
        horas;

    document.getElementById("minutos").textContent =
        minutos;

    document.getElementById("segundos").textContent =
        segundos;
}


// Atualiza imediatamente
atualizarContador();

// Atualiza a cada segundo
setInterval(atualizarContador, 1000);
