const { ask } = require('../helpers/input');

async function main() {
    const num1 = Number (await ask ("Ingresa un numero"));
    const num2 = Number (await ask ("Ingresa otro numero"));
    
  function obtenerMayor (num1, num2){
    if (num1 > num2) {
        return 1;
  } else if  (num1 < num2){
        return 2;
  } else {
    return 3;
  }
}

const resultado = obtenerMayor (num1, num2)

switch (resultado) {
    case 1:
        console.log(num1 + " es mayor que " + num2);
        break;
    case 2:
        console.log(num2 + " es mayor que " + num1);
        break;
    case 3:
        console.log(num1 + " y " + num2 + " son iguales ");
        break;
}
}
main();