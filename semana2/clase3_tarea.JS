// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.

// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() {
    
// Pedir al usuario una lista de edades separadas por comas   
let entrada = await ask('Ingresa una lista de edades separadas por comas (ej. 15, 22, 18, 17): ');

// Convertir la entrada en un arreglo de números
let edades = entrada.split(",").map(edad => parseInt(edad.trim()));

// Contador de personas que pueden votar
let puedenVotar = 0;

// Recorrer el arreglo y contar mayores o iguales a 18
for (let i = 0; i < edades.length; i++) {
  if (edades[i] >= 18) {
    puedenVotar++;
  }
}

// Mostrar el total
console.log(`Total de personas que pueden votar: ${puedenVotar}`);


}

main();