// variabili
const totalInteracts = 100;

// prendo tutti in numeri da 1 a 100

for (let i = 0; i < totalInteracts; i++) {
  // creo variabili all'interno del ciclo for
  const num = i + 1; //Aggiunge 1 al conteggio per prendere numeri da 1 a 100
  const restoTre = num % 3; // tutti i resti di /3
  const restoCinque = num % 5; //tutti i resti di /5
  // apro un if e prendo come primo caso FizzBuzz con connettore A and B = true
  if (restoCinque === 0 && restoTre === 0) {
    console.log("FizzBuzz");
  }
  // come secondo caso prendo i multipli di 3 e li sostistuisco con Fizz
  else if (restoTre === 0) {
    console.log("Fizz");
  }
  // come terzo caso prendo i multipli di 5 e li sostistuisco con Buzz
  else if (restoCinque === 0) {
    console.log("Buzz");
  //altrimenti stampa numero
  } else {
    console.log(num);
  }
}

console.log("Questo output permette di sostituire Fizz con i multipli di 3, Buzz con i multipli di 5 e quando coincidono mettere FizzBuzz, per essere riutilizzato più comodamente conviene creare delle variabili Fizz e Buzz e concatenare le stringhe in questo modo:")

const Fizz = "Fizz"
const Buzz = "Buzz"

for (let i = 0; i < totalInteracts; i++) {
  // creo variabili all'interno del ciclo for
  const num = i + 1; //Aggiunge 1 al conteggio per prendere numeri da 1 a 100
  const restoTre = num % 3; // tutti i resti di /3
  const restoCinque = num % 5; //tutti i resti di /5
  // apro un if e prendo come primo caso FizzBuzz con connettore A and B = true
  if (restoCinque === 0 && restoTre === 0) {
    console.log(Fizz + Buzz);
  }
  // come secondo caso prendo i multipli di 3 e li sostistuisco con Fizz
  else if (restoTre === 0) {
    console.log(Fizz);
  }
  // come terzo caso prendo i multipli di 5 e li sostistuisco con Buzz
  else if (restoCinque === 0) {
    console.log(Buzz);
    //altrimenti stampa numero
  } else {
    console.log(num);
  }
}


console.log("Questo secondo conteggio invece sfrutta delle variabili Fizz e Buzz")
