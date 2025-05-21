// 📝 Instrucciones:
// Crea un arreglo llamado alumnos.
//
// Usa un bucle while para permitir al usuario agregar objetos alumno al arreglo.
// Cada alumno debe tener:
//
// nombre
// edad
// calificacion
//
// Pregunta al usuario si desea seguir agregando más alumnos.
// Después de salir del ciclo, muestra:
// Cuántos alumnos tienen calificación aprobatoria (≥ 70).
// Cuántos pueden votar (edad ≥ 18).
// El promedio general de calificaciones.
// La calificación mayor.
// La calificación menor.

const { ask } = require('../helpers/input');

async function main() {
    let opcion = '';
    let alumnos = [];

    while (opcion !== '2') {
        opcion = await ask(
            `¿Qué deseas hacer?\n` +
            `1. Agregar un alumno\n` +
            `2. Terminar\n` +
            `Ingresa tu opción: `
        );

        if (opcion === '1') {
            let nombreNuevo = await ask('Ingresa el nombre del alumno: ');
            let edadNuevo = await ask('Ingresa la edad del alumno: ');
            let calificacionNuevo = await ask('Ingresa la calificación del alumno: ');

            let alumno = {
                nombre: nombreNuevo,
                edad: parseInt(edadNuevo),
                calificacion: parseFloat(calificacionNuevo)
            };

            alumnos.push(alumno);

        } else if (opcion === '2') {
            if (alumnos.length === 0) {
                console.log("No se ingresaron alumnos.");
                return;
            }

            let aprobados = 0;
            let mayores = 0;
            let suma = 0;
            let calMax = alumnos[0].calificacion;
            let calMin = alumnos[0].calificacion;

            for (let i = 0; i < alumnos.length; i++) {
                let alumno = alumnos[i];
                suma += alumno.calificacion;

                if (alumno.calificacion >= 70) {
                    aprobados++;
                }

                if (alumno.edad >= 18) {
                    mayores++;
                }

                if (alumno.calificacion > calMax) {
                    calMax = alumno.calificacion;
                }

                if (alumno.calificacion < calMin) {
                    calMin = alumno.calificacion;
                }
            }

            let promedio = suma / alumnos.length;

            console.log("\n📊 Resultados:");
            console.log("- Alumnos con calificación aprobatoria (≥ 70):", aprobados);
            console.log("- Alumnos que pueden votar (edad ≥ 18):", mayores);
            console.log("- Promedio general de calificaciones:", promedio.toFixed(2));
            console.log("- Calificación mayor:", calMax);
            console.log("- Calificación menor:", calMin);

            console.log("\n📋 Lista de alumnos:");
            alumnos.forEach((al) => {
                console.log(`- ${al.nombre}, Edad: ${al.edad}, Calificación: ${al.calificacion}`);
            });

        } else {
            console.log('❌ Opción no permitida. Intenta de nuevo.');
        }
    }
}

main();
