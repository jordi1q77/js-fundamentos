
console.log('1 - hola antes de la promesa');
//es
const promise = new Promise((resolve,reject) => {
    console.log('2 - instanciando promesa ejecuntandose');
    resolve('Resuelta!');
    reject('La promesa se ha roto');


});
// esto se ejecuta cuando acaba el promise(por principios al final) con lo que devuelve resolve
promise.then((value)=>{
    console.log('La promesa se ha resuelto con el valor: ', value);
});
// esto se ejecuta con lo que devuelva error
promise.catch((error) => {
    console.log(error);
});

console.log('3 este también antes de la promesa');


console.log('--------------------------');

const getAmountInBank = () => {
    const promise = new Promise((resolve,reject) => {
        resolve(100000);
    });
    return promise;
};

getAmountInBank()
.then((amount)=> {
    console.log(`La cantidad que tenemos en el banco es: ${amount}`);

    return `La cantidad es ${amount}`;// esto lo recibirá el siguiente then
})
.then ((message) =>{
    console.log(message);
})
.catch((error) => {
    console.log(`Error: ${error}`);
});


// de cara al dom
fetch().then((response) =>{
    return response.json();
});
// standard api
fetch().then((response) => response.json())
.then((data) => {
    console.log(data);
}
);



