// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100,
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
for (let i=1; i<=100; i++){
// ma per i multipli di 3 stampi “Fizz” al posto del numero
    if ( i % 3 === 0 && i % 5 !==0) {
        console.log("Fizz");
    }
// e per i multipli di 5 stampi Buzz.
    else if ( i % 5 === 0 && i % 3 !==0){
        console.log("Buzz");
    }
    else if ( i % 3 === 0 && i % 5 ===0){
        console.log("FizzBuzz");
    }
    else{
        console.log(i);
    }
}

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?

// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"