let inputValorHora = document.querySelector('#valor-hora')
let inputHorasProjeto = document.querySelector('#horas-projeto')

let resposta = document.querySelector('span')
let botao = document.querySelector('button')



function calcular() {

    let valorHora = inputValorHora.valueAsNumber
    let horasProjeto = inputHorasProjeto.valueAsNumber


    let valorHorasProjeto = valorHora * horasProjeto
    let valorDuasCasas = valorHorasProjeto.toFixed(2)


    resposta.textContent = 'R$' + valorDuasCasas
}

