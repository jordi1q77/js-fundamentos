

var count = 0;

while (count <= 10) {
    console.log(`La cuenta va por ${count}`);
    count++;
}

var negativeCount = 10;

while (negativeCount >= 0) {
    console.log(`La cuenta va por ${negativeCount}`);
    negativeCount--;
}


// equivalente de un for a un while
var timesRepeated = 0;
var sentence = 'La programación me gusta';
var i = 0;

for (var i = 0; i < sentence.length; i++){
    if (sentence[i] === 'a'){
        timesRepeated++;
    }
}

console.log(`La a aparece : ${timesRepeated} veces`);

while (i < sentence.length) {
    if (sentence[i] === 'a'){
        timesRepeated++;
    }
    i++;
}

console.log(`La a aparece : ${timesRepeated} veces`);