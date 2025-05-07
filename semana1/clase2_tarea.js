const {ask} = require ('../helpers/input.js');

async function main() {
    const temperatura = Number(await ask ('Cual es la temperatura actual?'));

    if (temperatura < 10) {
        console.log("Hace frío");
      }else if (temperatura >10 && temperatura <20) {
        console.log("Esta templado");
      }else if (temperatura > 20 && temperatura < 30){
        console.log("Hace calor");
      }else if(temperatura > 30){
        console.log ("Hace mucho calor");
      }else{}
        console.log ("No se cumplen los parametros")

    }

main()


// - Si la temperatura es menor a 10 grados, mostrar "Hace frío"
// - Si la temperatura está entre 10 y 20 grados, mostrar "Está templado"
// - Si la temperatura está entre 20 y 30 grados, mostrar "Hace calor"
// - Si la temperatura es mayor a 30 grados, mostrar "Hace mucho calor"