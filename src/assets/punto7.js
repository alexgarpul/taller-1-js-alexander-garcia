onsole.warn('En una sala de cine se están estrenando 4 películas, se desea crear un algoritmo que al ingresar un número del 1 al 4 se muestre el nombre de la película, la categoría y su valor de entrada. ● La primera película es Batman, su categoría es acción y el valor de entradaes 5,000. ● La segunda película es Los Vengadores, su categoría es acción y el valor de la entrada es 10,000. ● La tercera película es SuperCool, su categoría es comedia y el valor de la entrada es 8,000. ● Por último la cuarta película es rápido y furioso 5, subcategoría es de aventura eso valor de entrada es 15,000')

let numero = Number(prompt('Ingrese un numero del 1 al 4'))
const peliculas=['Batman','Los Vengadores', 'Supercool', 'Rapido y Furioso 5']
const categorias=['Accion', 'comedia', 'aventura']
const precioEntrada=[5000,8000,10000,15000]

switch (numero) {
  case 1:
    alert(
      'La película es ${peliculas[0]}, su categoría es ${categorias[0]} y el valor de entrada es ${precioEntrada[0]}'
    )
    break
  case 2:
    alert(
      'La película es ${peliculas[1]}, su categoría es ${categorias[0]} y el valor de la entrada es ${precioEntrada[2]}.'
    )
    break
  case 3:
    alert(
      'La película es ${peliculas[2]}, su categoría es ${categorias[1]} y el valor de la entrada es ${precioEntrada[1]}.'
    )
    break
  case 4:
    alert(
      'La película es ${peliculas[3]}, subcategoría es de ${categorias[2]} eso valor de entrada es ${precioEntrada[3]}.'
    )
    break
  default:
    alert('Error: por favor ingrese un numero valido, del 1 al 4')
    break 
}
