console.warn('Escribir un algoritmo para calcular el índice de masa corporal de una persona.')

const peso = parseInt(prompt('Ingrese su peso'))
const altura = parseFloat(prompt('Ingrese su altura'))
let resultado = (peso/(altura*altura)).toFixed(2)

alert(`El indice de masa corporal en una persona con un peso de ${peso}kg y una altura de ${altura}mts es ${resultado}`)