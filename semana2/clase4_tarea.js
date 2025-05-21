//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja
const { ask } = require('../helpers/input');

function analizarCalificaciones(numeros){
    let aprobados = 0;
    let reprobados = 0;
    let promedioGeneral = 0;
    let suma = 0;
    let max = numeros[0];
    let min = numeros[0];

    for (i=0; i<numeros.length; i++){

        suma = suma + numeros[i];
        promedioGeneral = suma / numeros.length;
         
       if (numeros[i]>=70){
        aprobados += 1;
       }
       if (numeros[i]<70){
        reprobados += 1;
       }
       if (max < numeros[i]){
        max = numeros[i];
       }
       if (min > numeros[i]){
        min = numeros[i];
       }

       
    } 

    return {aprobados, reprobados, promedioGeneral, max, min};


}

async function main() {
    let calificaciones = [50, 30, 57, 60, 78, 86, 90, 95];
    let resultado = analizarCalificaciones(calificaciones);

    console.log("El numero de alumnos aprobados es : ", resultado.aprobados);
    console.log("El numero de alumnos reprobados es : ", resultado.reprobados);
    console.log("El promedio de las calificaciones de alumnos es : ", resultado.promedioGeneral);
    console.log("La calificaion mas alta es : ", resultado.max);
    console.log("La calificaion mas baja es : ", resultado.min);


}

main();