var age = 25;
var canParticipate = false;

if (age < 30) {
  canParticipate = true;
}

console.log(`¿Puede participar el usuario?${canParticipate}`);

var yearsToRenew = 0;
var driverAge;

// 18 o más, y 50 o menos cada  10
// más de 50 y menos o igual 75 cada 5
// más de 75 años = 1
/*
if (driverAge > = 18 && driverAge <= 50){
    yearsToRenew = 10;
} else if (driverAge > 50 && driverAge <= 75){
    yearsToRenew = 5;
} else if(driverAge > 75){
    yearsToRenew = 1;
}*/

console.log(`Se tiene que renovar cada ${yearsToRenew}`);

var time = 10000;
var record = "";

if (time < 8000) {
  record = "World record";
} else if (time < 10000) {
  record = "Olympic record";
} else if (time < 12000) {
  record = "Personal record";
} else {
    record = 'No Record';
}

console.log(`Record: ${record}`);


var city = 'Madrid';
var hasCard = false;

if (city === 'Madrid' && !hasCar){// es lo mismo que hasCar === true
    console.log('Va en metro!');
}
if (city === 'Madrid' && hasCar){
    console.log('Va en coche o metro!');
}

if ((city === 'Madrid' || city === 'Barcelona')) && hasCar{
    console.log('Va en coche o metro!');
}