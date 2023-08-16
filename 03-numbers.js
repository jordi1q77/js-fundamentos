var two = 2;
var twoWithDecimals = 2.5;
var negative = -2;


//suma
var sum = 3 + 2;
console.log(sum);
console.log("La suma vale" + 5);
console.log('La suma vale ${sum}');
//Restar
var substract = 10 -4;
//Multiplicar
var multiply = 6 * 4;
// Dividir exacto
var divide = 40/4;
//Dividir con decimales
var divideWithDecimals = 25/4;
//Resto de la división
var rest = 25%4;

//Potencia
var power = 5**2;

// En los cálculos sin paréntesis primero hacer multiplicaciones y divisiones
var complexCalculos = 2 + 2 * 4 + 5 / 5 + 6;

var numberAsString = '30';
var number = 35;
console.log(numberAsString + number);// da '3035'
console.log(+numberAsString + number);// El + pegado hace que transforme en number pero no es muy bonito

var numberAsNumber = Number(numberAsString); // Esto es lo más correcto
// también existen parseInt y parseFloat


//NaN(Not A Number)

var notValidNumber = Number('_');

console.log(`El número no válido es : ${notValidNumber}`);
console.log(Number.isNaN(notValidNumber));




