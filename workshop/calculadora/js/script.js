
var inputSalario = document.querySelector('#ganho-mes')
var inputHoras = document.querySelector('#horas-dia')
var inputDias = document.querySelector('#dias-mes')

var resultado = document.querySelector('span')


function calcularValorHora() {

    var salario = inputSalario.valueAsNumber
    var horas = inputHoras.valueAsNumber
    var dias = inputDias.valueAsNumber


    var valorHora = salario / (horas * dias)
    var valorDuasCasas = valorHora.toFixed(2)
    

    resultado.textContent = 'R$' + valorDuasCasas
}
