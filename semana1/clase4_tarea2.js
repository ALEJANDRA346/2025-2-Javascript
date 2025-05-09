const { ask } = require('../helpers/input.js');

function lengthLife(birthdayDay, birthdayMonth, birthdayYear){
    const today = new Date();
    const birthDate = new Date(birthdayYear, birthdayMonth, birthdayDay);

    const diff = today - birthDate;
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24) );
    const totalMonths = totalDays / 30;
    const totalYears = totalDays / 365;

    return {totalDays, totalMonths, totalYears};
}

async function main(){
    const birthdayYear = Number(await ask('¿Cuál es tu fecha de nacimiento? Ingresa el año (4 dígitos): '));
    const birthdayMonth = Number(await ask('¿Cuál es tu fecha de nacimiento? Ingresa el mes (1-12): '));
    const birthdayDay = Number(await ask('¿Cuál es tu fecha de nacimiento? Ingresa el día (1-31): '));

    const {totalDays, totalMonths, totalYears} = lengthLife(birthdayDay, birthdayMonth, birthdayYear);

    console.log("\n🎉 Has vivido aproximadamente:");
    console.log(`📅 ${totalDays} días`);
    console.log(`📆 ${Math.floor(totalMonths)} meses`);
    console.log(`🗓️ ${Math.floor(totalYears)} años`);
    console.log("¡Worales!");
}

main();