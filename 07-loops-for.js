
// for(valor inicial; comparación(siempre que se cumpla ejecutará de nuevo); operación)

for (var i = 0; i < 5;i++){
    console.log(` el valor de i es ${i}`);
}


for (var i = 10; i >= 0;i--){
    console.log(` el valor de i es ${i}`);
}

for (var i = 10; i >= 0;i =-3){
    console.log(` el valor de i es ${i}`);
}

var timesRepeated = 0;
var sentence = 'La programación me gusta';

for (var i = 0; i < sentence.length; i++){
    if (sentence[i] === 'a'){
        timesRepeated++;
    }
}

console.log(`La a aparece : ${timesRepeated} veces`);