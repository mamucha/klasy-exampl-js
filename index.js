import Student from './student.js';
import Doktorant from './doktorant.js';

import Samochod from './samochod.js';

const student = new Student('Mateusz', 1988, 10, 5);

console.log(student.toString());
console.log(`Wiek: ${student.wiek}`);


const doktorant = new Doktorant('mgr Marcin', 1980, 10, 27, 2012);

console.log(doktorant.toString());
console.log(`Wiek: ${doktorant.wiek}`);
console.log(`Rok rozpoczęcia studiów doktoranckich: ${doktorant.rokRozpoczeciaStudiowDr}`);


/********************************************************/
// Napisać klasę Samochód która w konstruktorze przyjmuje 
// markę samochodu, i metodę MaxV zwracająca liczbę znaków
// marki samochodu zakończoną jednostką km/s. Czyli:
// marka Opel to MaxV zwraca 4 km/s 

const samochod = new Samochod('Ferrari');

console.log(samochod.maxV());