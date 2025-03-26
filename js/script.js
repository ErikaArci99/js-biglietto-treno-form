// Dichiarazioni variabili e tag HTML
let priceKm = 0.21;
let km = document.getElementById('Km'); 
let age = document.getElementById('età'); 
let button = document.getElementById('Bottone');

// Se premo il bottone, succede questo
button.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Recupero i valori inseriti dall'utente
    let kmValue = parseFloat(km.value);  // Convertiamo il valore in numero
    let ageValue = parseInt(age.value);  // Convertiamo il valore in numero intero
    let price = priceKm * kmValue;  // Calcoliamo il prezzo totale
    let finalPrice = '';

    // Calcolo degli sconti solo dopo aver definito price
    let firstDiscount = price * 0.2;  // Sconto per minorenni
    let secondDiscount = price * 0.4;  // Sconto per over 64

    // Verifica dell'età per applicare lo sconto
    if (ageValue < 18) {
        finalPrice = (price - firstDiscount);  // Sconto per minorenni
    }
    else if (ageValue > 64) {
        finalPrice = (price - secondDiscount);  // Sconto per over 64
    }
    else {
        finalPrice = price;  // Nessuno sconto
    }

    // Arrotondare il prezzo finale a 2 decimali
    finalPrice = finalPrice.toFixed(2);
    console.log("Il prezzo finale è: €" + finalPrice);
});