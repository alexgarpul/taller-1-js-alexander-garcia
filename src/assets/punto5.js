console.warn('Ingresar por pantalla un número entre 1 y 12, luego imprimir en letras elmes al que corresponde el valor ingresado, la cantidad de días que tiene ese mes y sus signos del zodiaco. Ejemplo: si el valor ingresado es 5, entonces imprimir “Mayo”, “31 días”, “Tauro - Géminis”.')

let meses=["Enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
let signos=["capricornio","sagitario","acuario","piscis","aries","tauro","geminis","cancer","escorpion","leo","libra","virgo"]
let dias=[28,30,31]


const numeroPorPantalla = Number(prompt('Ingrese un numero del 1 al 12'))

switch (numeroPorPantalla) {
  case 1:
    alert(`este numero corresponde al mes ${meses[0]} cuenta con ${dias[2]}dias con signos zodiacales ${signos[0]} y ${signos[2]}`)
    break
  case 2:
    alert(`este numero corresponde al mes ${meses[1]} cuenta con ${dias[0]} dias, con signos zodiacales ${signos[2]} y ${signos[3]}`)
    break
  case 3:
    alert(`este numero corresponde al mes ${meses[2]} cuenta con ${dias[2]} dias, con signos zodiacales ${signos[3]} y ${signos[4]}`)
    break
    case 4:
        alert(`este numero corresponde al mes ${meses[3]} cuenta con ${dias[1]} dias, con signos zodicales ${signos[4]} y ${signos[5]}`)
        break
    
      case 5:
        alert(`este numero corresponde al mes ${meses[4]} cuenta con ${dias[2]} dias, con signos zodiacales ${signos[5]} y ${signos[6]}`)
        break
      case 6:
        alert(`este numero corresponde al mes ${meses[5]} cuenta con ${dias[1]} dias con signos zodiacales ${signos[6]} y ${signos[7]}`)
        break
    
      case 7:
        alert(`este numero corresponde al mes ${meses[6]} cuenta con ${dias[2]} dias con signos zodiacales ${signos[7]} y ${signos[9]}`)
        break
    
      case 8:
        alert(`este numero corresponde al mes ${meses[7]} cuenta con ${dias[2]} dias con signos zodiacales ${signos[9]} y ${signos[11]}`)
        break
      case 9:
        alert(`este numero corresponde al mes ${meses[8]} cuenta con ${dias[2]} dias con signos zodiacales ${signos[11]} y ${signos[10]}`)
        break
      case 10:
        alert(`este numero corresponde al mes ${meses[9]} cuenta con ${dias[2]} dias con signos zodiacales ${signos[10]} y ${signos[8]}`)
        break
      case 11:
        alert(`este numero corresponde al mes ${meses[10]} cuenta con ${dias[1]} dias con signos zodiacales ${signos[8]} y ${signos[1]}`)
        break
      case 12:
        alert(`este numero corresponde al mes ${meses[11]} cuebta con ${dias[2]} dias con signos zodiacales ${signos[1]} y ${signos[0]}`)
        break

  default:
    alert(`Error: Ingrese un numero valido, entre el 1 y el 12`)
    break
}

