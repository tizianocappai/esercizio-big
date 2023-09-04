let a, b;

function sum(a, b){
    return a + b;
}

const somma = (a, b) => {
    return a + b;
}

a = 10;
b = 7;


setTimeout(console.log(sum(a, b)), 1000);

setTimeout(console.log(somma(a, b)), 2000);