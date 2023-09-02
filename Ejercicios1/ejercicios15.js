/*
Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite 
cada una de las palabras que lo conforma. Puedes usar este array para probar tu función: */

const counterWords = [ 'code',
'repeat', 'eat', 'sleep', 'code', 'enjoy', 'sleep', 'code', 'enjoy', 'upgrade', 'code'
];
const counterWords1 = [ 'code',
'code', 'code', 'hola'
];

function finderWord(param, word) {
    let wordFinded = {
        word: "",
        exists: false,
        index: 0,
    
    };
    wordFinded.word = word;
    for(let i = 0; i < param.length; i++){
        
        if (param[i].word === wordFinded.word){
            wordFinded.exists = true;
            wordFinded.index = i;
        }

    }

    return wordFinded;
}

function repeatCounter(param) {
    const wordCounted = { //objeto que contiene la palabra y cuantas veces aparece
        word: "",
        counts: 0,
    }; 
    const counters = []; //array que contendrá todos las palabras contadas

    for(let i = 0; i < param.length; i++){
        let finded = finderWord(counters, param[i]);
        if (finded.exists){
            counters[finded.index].counts ++; 
        }else{
            let newWord = Object.create(wordCounted);
            newWord.word = param[i];
            newWord.counts = 1;
            counters.push(newWord);
        }
        
    }
    return counters;

}

console.log(repeatCounter(counterWords));