// sirve a ordenar array, modifica el original

const numbers = [3 ,7,9,5,10];

numbers.sort(); //los pasa a string y los ordena ojo!!! por lo tanto pondría el 10 primero

console.log(numbers);
const orderNumbersAscending = (a,b) => a -b;
const orderNumbersDescending = (a,b) => b -a;
numbers.sort((a,b) => {
    if (a > b){
        return 1;
    }
    if (a < b){
        return -1;
    }
    return  0;
});

console.log(numbers);
numbers.sort(orderNumbersAscending);
console.log(numbers);
numbers.sort(orderNumbersDescending);
console.log(numbers);

const names = ['pepe','juan','alberto', 'Pepe'];

names.sort((a,b) => {
    return a.localeCompare(b);
}); // ascendente
console.log(names);

names.sort((a,b) => {
    return b.localeCompare(a);
});
console.log(names);

const compareStringAscending = (a,b) => a.localeCompare(b);
const compareStringDescending = (a,b) => b.localeCompare(a);

names.sort(compareStringAscending);
console.log(names);
names.sort(compareStringDescending);
console.log(names);

const people = [
    {name: 'pepe', age : 40},
    {name :'juan', age : 15},
    {name :'alberto', age : 23},
    {name :'Pepe', age : 56}];

people.sort((a,b) =>{
    return compareStringAscending(a.name,b.name);
});

console.log(people);