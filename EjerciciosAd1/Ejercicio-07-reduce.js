//7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes 
//de los alumnos usando la función .reduce().
const exams = [
{name: 'Yuyu Cabeza Crack', score: 5},
{name: 'Maria Aranda Jimenez', score: 1}, 
{name: 'Cristóbal Martínez Lorenzo', score: 6}, 
{name: 'Mercedez Regrera Brito', score: 7}, 
{name: 'Pamela Anderson', score: 3},
{name: 'Enrique Perez Lijó', score: 6},
{name: 'Pedro Benitez Pacheco', score: 8}, 
{name: 'Ayumi Hamasaki', score: 4},
{name: 'Robert Kiyosaki', score: 2},
{name: 'Keanu Reeves', score: 10}
];

const suma = JSON.parse(JSON.stringify(exams)).reduce((exam1,exam2)=>{
    exam1.score = exam1.score + exam2.score;
    exam1.name = "Suma";
    return exam1;
});
console.log(exams);
console.log(suma);

//7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
//alumnos que esten aprobados usando la función .reduce().

const sumaAprobados = JSON.parse(JSON.stringify(exams)).reduce((exam1,exam2)=>{
    if (exam2.score >= 5 ){
        exam1.score = exam1.score + exam2.score;
    }
    exam1.name = "Suma aprobados";
    return exam1;
});

console.log(sumaAprobados);

//7.3 Dado el mismo array, haz la media de las notas de todos los examenes 
//.reduce().

const media = JSON.parse(JSON.stringify(exams)).reduce((exam1,exam2)=>{
    exam1.score = (exam1.score + exam2.score)/2 ;
    exam1.name = "Media";
    return exam1;
});

console.log(media);