//5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const adults = ages.filter((age)=> age > 18);
console.log(adults);


//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const even = ages2.filter((age)=>age % 2 === 0)

console.log(even);

//5.3 Dado el siguiente array, utiliza .filter() para 
//generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'. 
const streamers = [
{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const league = streamers.filter((streamer) => streamer.gameMorePlayed === "League of Legends");

console.log(league);

//5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los streamers que incluyan el caracter 'u' en su propiedad .name. 
//Recomendamos usar la funcion .includes() para la comprobación.
const streamers2 = [
{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const uStreamers = streamers2.filter((streamer) => streamer.name.includes('u'));

console.log(uStreamers);
//5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
//el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la
// funcion .includes() para la comprobación.
//Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
//.age sea mayor que 35.

const legendsStreamers = streamers2.filter((streamer) => streamer.gameMorePlayed.includes('Legends'))
.map((streamer) =>{
    let streamer1 = streamer;
    if (streamer1.age > 35){
        streamer1.name = streamer1.name.toUpperCase();
    }
    return streamer1;
});

console.log(legendsStreamers);

//5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
//los streamers que incluyan la palabra introducida en el input. De esta forma, 
//si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
//introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers3 = [
{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
//resultado en Ejercicio-05-filter-06.html

/*
<!doctype html>
<html lang="en"> <head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Document</title>
</head> <body>
<input type="text" id="myWord" data-function="toFilterStreamers"/> </body>
</html>
*/

//5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
//los streamers que incluyan la palabra introducida en el input. De esta forma, 
//si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i',
// me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
//En este caso, muestra solo los streamers filtrados cuando hagamos click en el button. 
const streamers4 = [
{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
/*
<!doctype html>
<html lang="en"> <head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Document</title>
</head> <body>
<input type="text" data-function="toFilterStreamers"/>
<button data-function="toShowFilterStreamers">Filter</button> </body>
</html>
*/