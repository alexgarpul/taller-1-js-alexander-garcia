onsole.warn('En una sala de cine se están estrenando 4 películas, se desea crear un algoritmo que al ingresar un número del 1 al 4 se muestre el nombre de la película, la categoría y su valor de entrada. ● La primera película es Batman, su categoría es acción y el valor de entradaes 5,000. ● La segunda película es Los Vengadores, su categoría es acción y el valor de la entrada es 10,000. ● La tercera película es SuperCool, su categoría es comedia y el valor de la entrada es 8,000. ● Por último la cuarta película es rápido y furioso 5, subcategoría es de aventura eso valor de entrada es 15,000')

let numero = Number(prompt('Ingrese un numero del 1 al 4'))
const peliculas=['Batman','Los Vengadores', 'Supercool', 'Rapido y Furioso 5']
const categorias=['Accion', 'comedia', 'aventura']
const precioEntrada=[5000,8000,10000,15000]

switch (numero) {
  case 1:
    alert(
      'La película es Batman, su categoría es acción y el valor de entrada es 5000'
    )
    break
  case 2:
    alert(
      'La película es Los Vengadores, su categoría es acción y el valor de la entrada es 10,000.'
    )
    break
  case 3:
    alert(
      'La película es SuperCool, su categoría es comedia y el valor de la entrada es 8,000.'
    )
    break
  case 4:
    alert(
      'La película es rápido y furioso 5, subcategoría es de aventura eso valor de entrada es 15,000'
    )
    break
  default:
    alert('Error: por favor ingrese un numero valido, del 1 al 4')
    break 
}
