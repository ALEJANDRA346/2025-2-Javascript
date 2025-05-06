const {ask} = require ('../helpers/input.js');

async function main() {
    const num1 = Number(await ask ('Cual es el primer numero?'));
    const num2 = Number(await ask ('Cual es el segundo numero?'));

    const suma = num1 + num2;
    const resta = num1 - num2;
    const mult = num1 * num2;
    const div = num1 / num2;

    console.log (`Hola el resultado de la suma es ${suma}, de la resta es ${resta}, de la multiplicacion es ${mult} y de la division es ${div}`);
}

main()
