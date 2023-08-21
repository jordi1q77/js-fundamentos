const marks = [10,6,4,7,5,4,3,9];


// podemos mutar(camgiar) elementos aunque sea const
marks[0] = 4;
console.log(`El array marks tiene longitud: ${marks.length}`);

// último elemento de un array
const lastElement = marks[marks.length - 1];

// añadir al principio del array
marks.unshift(3);// añade un elemento por la izquierda

// eliminar el primer elemento
marks.shift();

//añadir elemento al final del array
marks.push(6);

//eliminar el último elemento
marks.pop();

//crear un nuevo array con parte de otro
const part = marks.slice(3,5);//desde la pos 3 a la pos5

//copiar array a otro array
const copyOfMarks = marks.slice();