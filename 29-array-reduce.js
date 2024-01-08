// dado un array puedo sacar otra cosa (objeto,string)  Se recomienda no usar

// el caso es crear objeto

const numbers = [10,6,4,7,5,4,3,9];

//En la primera vuelta el acumulador tiene el primer elemento y next el segundo
// después el acc tendrá lo que se devuelva en return
const sum = numbers.reduce((acc, next) => {
    console.log(acc, next);
    return acc + next;
});

const word = ['Hola','que','tal','?'];

//word.join(' ')
const sentence = word.reduce((acc,next)=>{
    return `${acc} ${next}`
});

console.log(sentence);

//filter
const animals = [{icon: '🐼', herbal:true} ,{icon:'🐣',herbal:false},{icon : '🐮',herbal: true} ,
{icon:'🦁',herbal : false}];


const herbAnimals = animals.reduce((acc, next) => {
    if (next.herb){
        acc.push(next);
    }
    return acc;
},[]);

console.log(herbAnimals);