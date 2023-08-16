var trueVar = true;
var falseVar = false;


console.log(!trueVar);


//5 = 5 asignar valor
// 5 == 5 true or false si el valor es el mismo 
// 5 === 5 true or false si el valor es el mismo y del mismo tipo


console.log('Igual doble' + ('5' == 5)); // da true

console.log('Igual doble' + ('5' === 5)); // da false

// se recomienda el triple igual ===


console.log('Es 2 mayor que 3?: ' + (2 > 3));

// opciones
// >
//<
//>=

var isSameName = 'juan' === 'Juan';

console.log('Son el mismo nombre :' + isSameName);

var isSameName2 = 'juan'.toUpperCase() + 'Juan'.toUpperCase;

console.log('Son el mismo nombre :' + isSameName);

//Truthy - devuelve true si contiene algún valor
console.log("Es 2 truthy? " + Boolean(2));// da true
console.log("Es PMBA truthy? " + Boolean('PMBA'));// da true
console.log("Es true truthy? " + Boolean(true));// da true

//Falsy
console.log("Es false falsy? " + Boolean(false));// da false
console.log("Es 0 falsy? " + Boolean(0));// da false
console.log("Es string vacío falsy? " + Boolean(''));// da false

var surname1;
console.log(surname1);
console.log("Es surname vacío falsy? " + Boolean(surname1));// da false

var surname2 = null;
console.log(surname2);
console.log("Es surname vacío falsy? " + Boolean(surname2));// da false

