const animals = [
    {icon: '🐼', herbal:true} ,{icon:'🐣',herbal:false},{icon : '🐮',herbal: true} ,
{icon:'🦁',herbal : false}];

const animals2 = [
    {icon: '🐼', herbal:true} ,{icon:'🐣',herbal:false},{icon : '🐮',herbal: true} ,
{icon:'🦁',herbal : false}];

const moreAnimals = animals.concat(animals2);


// flat dado un array de arrays lo une todo
const numbers = [[3 ,7],[9,5],[10,9,7]];

const simpleNumbers = numbers.flat();

console.log(numbers);
console.log(simpleNumbers);
