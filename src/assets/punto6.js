console.warn('El presidente de la república ha decidido estimular a todos los estudiantes de una universidad mediante la asignación de becas mensuales, para esto se tomarán en consideración los siguientes criterios: Para alumnos mayores de 18 años con promedio mayor o igual a 9, la beca será de $200.000; con promedio mayor o igual a 7.5, de $100.000; para los promedios menores de 7.5 pero mayores o iguales a 6.0, de $50.000; a los demás se les enviará una carta de invitación a que estudien más en el próximo ciclo escolar. A los alumnos de 18 años o menores de esta edad, con promedios mayores o iguales a 9, se les dará $300.000; con promedios menores a 9 pero mayores o iguales a 8, $200.000; para los alumnos con promedios menores a 8 pero mayores o iguales a 6, se les dará $100.000, y a los alumnos que tengan promedios menores a 6 se les enviará la carta de invitación.')

let edad = Number(prompt('Ingrese su edad'))
let promedioEstudiantil = Number(prompt('Ingrese su promedio'))

if (promedioEstudiantil >= 9 && edad > 18) {
  alert('Usted gano una beca de $200.000')
} else if (promedioEstudiantil < 9 && promedioEstudiantil >= 7.5 && edad > 18) {
  alert('Usted gano una beca de $100.000')
} else if (promedioEstudiantil < 7.5 && promedioEstudiantil >= 6 && edad > 18 ) {
  alert('Usted gano una beca de $50.000')
}  if (promedioEstudiantil >= 9 && edad < 18) {
  alert('Usted gano una beca de $300.000')
} else if (promedioEstudiantil < 9 && promedioEstudiantil >= 8 && edad < 18) {
  alert('Usted gano una beca de $200.000')
} else if (promedioEstudiantil < 8 && promedioEstudiantil >= 6 && edad < 18 ) {
  alert('Usted gano una beca de $100.000')
} else {
  alert('Lo sentimos usted no gano beca, Lo invitamos a que siga estudiando y asi ganar una proxima beca')
}