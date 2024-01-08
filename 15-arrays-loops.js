
// calcular media de colección notas
const getAverage = (scores) => {
    let sum = 0;
    let average = 0;

    for (let i = 0; i < scores.lenght;i++){
        const score = scores[i];
        sum = sum + score;
    }
    return sum/scores.lenght;
};
const marks = [10,4,6,9,4,6,1];

const average = getAverage(marks);

console.log(`la media de las notas es ${average}`);

//filtrar los números pares
const getEvenNumber = (numbers) => {
    const evenNumbers = [];

    for (let i = 0; i < numbers.lenght; i++){
        const number = numbers[i];
        if (number % 2 === 0){
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
};

const evenNumbers = getEvenNumber([1,2,3,4,5,6]);
console.log(`los números pares son ${evenNumbers}`);


// for ..of
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (const [value,index] of placesToTravel){
    console.log(value);
}


//para borrar hay que crear un nuevo array sin esos valores// además vemos la función includes
const param = [ 'sushi',
'pizza', 'burger', 'potatoe', 'pasta', 'ice-cream', 'pizza', 'chicken',
'onion rings', 'pasta', 'soda'
];
let noDuplicates = [];
    for(let i = 0; i < param.length; i++){
        
        if (!noDuplicates.includes(param[i])){
            noDuplicates.push(param[i]);
        }
    } 