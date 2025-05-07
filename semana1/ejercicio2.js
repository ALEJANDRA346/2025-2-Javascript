const { ask } = require('../helpers/input');

async function main() {
    const age = Number (await ask ('Cuantos anos tienes?'));
    const genere = await ask ('Cual es tu genero? (hombre/mujer)')

    if ((age >=1 && age < 18) && (genere === 'hombre')){
        console.log('Eres un hombre menor de edad');
    }else if ((age >=18 && age < 65) && (genere === 'hombre')){
        console.log('Eres un hombre mayor de edad')
    }else{
        console.log('No se cunplen los valores de busqueda')
    }
}

main();