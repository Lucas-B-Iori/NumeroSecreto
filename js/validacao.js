function verificaSeChuteValido(chute) {
  const numero = +chute;

  if (chuteInvalido(numero) || numeroForaDoIntervaloPermitido(numero)) {
    elementoChute.innerHTML += "<div>Valor Inválido</div>";
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
        <h2>Você Acertou!!</h2>
        <h3>O número secreto era: ${numeroSecreto}
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<div>O numero secreto menor <i class="fa-solid fa-arrow-down"></i></div>`;
  } else {
    elementoChute.innerHTML += `<div>O numero secreto maior <i class="fa-solid fa-arrow-up"></i></div>`
  }
}

function chuteInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForaDoIntervaloPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id === 'jogar-novamente') {
        window.location.reload();
    }
})
