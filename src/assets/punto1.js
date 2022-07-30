console.warn(`Escribir un algoritmo que valide si la suma de 2 números ingresados es
positiva, negativa o cero.`)

const num1= Number(prompt('Ingrese el primer numero'))
const num2= Number(prompt('Ingrese el segundo numero'))
let resultado = num1 + num2

if (resultado > 0) {
    alert(`El resultado de la suma de ${num1} y ${num2} es ${resultado} y es numero un positivo`)
}else if(suma === 0){
    alert(`El resultado de la suma de ${num1} y ${num2} es cero`)
}
else{
    alert(`El resultado de la suma de ${num1} y ${num2} es ${resultado} y es numero un negativo`)
}