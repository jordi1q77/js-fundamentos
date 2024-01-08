var name = "Jordi";
var surname = "Garcia";
var fullname = name + " " + surname;

console.log(fullname);

var firstIngredient = "Leche";
var secondIngredient = "Arroz";
var thirdIngredient = "Limón";
var fourthIngredient = "Canela";

var recipe = 
`Lista de ingredientes:
- ${firstIngredient}.
- ${secondIngredient}.
- ${thirdIngredient}.
- ${fourthIngredient}.
`;

console.log(recipe.toUpperCase());

var dog = 'DOGO';
var myDog = `Mi perro es un ${dog.toLowerCase()}`;

console.log(myDog);


var computerDescription = '    Ordenador muy potente con mucha RAM';
//trim - quitar espacios de los lados
console.log(computerDescription.trim());

//slice recoger un trozo de string

var school = 'The POMBA';
var schoolName = school.slice(4);

console.log(schoolName);

schoolName= school.slice(4,6); //desde la 4  hasta la 6

console.log(schoolName);



// includes (devuelve si contiene ese parte de string)

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 
'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (let i = 0; i < products.length; i++){
    if (products[i].includes("Camiseta")){
        console.log(products[i]);
    }
}