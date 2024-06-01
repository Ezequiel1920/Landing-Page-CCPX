const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');

const lancamento = '17 jul 2024'

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const dias = Math.floor(segTotal / 60 / 60 / 24);
    const horas = Math.floor(segTotal / 60 / 60) % 24;
    const minutos = Math.floor(segTotal / 60) % 60;
    const segundos = Math.floor(segTotal) % 60;

    dia.innerHTML = `${dias}D`
    hora.innerHTML = `${horas}H`
    minuto.innerHTML = `${minutos}M`
    segundo.innerHTML = `${segundos}S`
}

countDown();
setInterval(countDown, 1000);