const { ask } = require('../helpers/input');

function obtenerPromedio(numeros){
    let suma = 0;
    for(let i = 0; i < numeros.length; i++){
        suma = suma + numeros[i];
    }
    const promedio = suma / numeros.length;
    return promedio;    
}

function obtenerMayor(numeros){
        let mayor = numeros[0];
        for(let i = 0; i < numeros.length; i++){
            if(numeros[i] > mayor){
                mayor = numeros[i];
            }
        }
        return mayor;
}

function obtenerMenor(numeros){
        let menor = numeros[0];
        for(let i = 0; i < numeros.length; i++){
            if(numeros[i] < menor){
                menor = numeros[i];
            }
        }
        return menor;
}

function resumenEstadistico(numeros){
    const promedio = obtenerPromedio(numeros);
    let minimo = numeros[0];
    let maximo = obtenerMayor(numeros);

    for (let i = 0; i < numeros.length; i++){
        if (numeros[i]<minimo){
            minimo = numeros[i]
        }
    }
    return {promedio, minimo, maximo}
}

function nombresConVocal(nombres){
    const vocales = ["a", "i",  "o", "u", "e" ];
    const resultado = [];

    for (let i = 0; i < nombres; i++){
        let primeraLetra = nombres[i][0].toLowerCase();
        if (vocales.includes(primeraLetra)){
            resultado.push(nombres[i]);
        }
    }
    return resultado;
}


async function main() {
  const edades = [20, 18, 25, 30, 22];
  const lista = [5, 20, 8, 99, 3];
  const datos = [70, 80, 90, 100, 85];
  const nombres = ["alejandra", "adriana", "ana", "paula", "ivonne"];
  
    console.log(`Promedio = ${obtenerPromedio(edades)}`);
    console.log(`El numero mayor de ${lista} es = ${obtenerMayor(lista)}`);
    const estadistica = resumenEstadistico(datos);
    console.log(`El número menor de ${datos} es: ${estadistica.minimo}`);
    console.log(`El número mayor de ${datos} es: ${estadistica.maximo}`);
    console.log(`El promedio de ${datos} es: ${estadistica.promedio}`);
    console.log("Lista de nombres: ", nombres);
    console.log("Nombres solo con vocal: ", nombresConVocal(nombres));
    

}

main();