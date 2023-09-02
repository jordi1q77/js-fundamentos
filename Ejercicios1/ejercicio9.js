/*
Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, 
en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función: */

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.']; 
function findLongestWord(param) {
    let greatestWord = ' ';
    const allWords =param.slice();
   
    for (let i = 0; i < allWords.length; i++){
        if (allWords[i].length > greatestWord.length) {
            greatestWord = allWords[i];
        }
       
    }

    return greatestWord;
}

let word = '';

word = findLongestWord(avengers);


console.log(word);