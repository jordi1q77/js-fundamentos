/**
 * Usa un bucle y dos condiciones para imprimir por consola el nombre de
los usuarios que sean menor de edad precedidos del texto
"Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad,
precedido del texto "Usuarios mayores de edad:".

 */


const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

let minorUsers = "Usuarios menores de edad: ";
let majorUsers = "Usuarios mayores de edad: ";
 
//users.sort((x, y) => x.years - y.years);

for(const user of users){
    if (user.years < 18){
        minorUsers = minorUsers.concat("\n " + user.name);
    }else{
        majorUsers = majorUsers.concat("\n " + user.name);
    }
}


console.log(minorUsers);
console.log(majorUsers);