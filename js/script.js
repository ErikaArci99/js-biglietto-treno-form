// Dichiarazioni variabili e tag HTML
let priceKm = 0.21;
let km = document.getElementById('Km');
let age = document.getElementById('età');
let button = document.getElementById('Bottone');
let name = document.getElementById('nome');

// segnaposti card
let nameCard = document.getElementById('nameCard');
let biglietto = document.getElementById('biglietto');
let carrozza = document.getElementById('carrozza');
let code = document.getElementById('RandomCode');
let prezzoFinale = document.getElementById('prezzoFinale');

// Se premo il bottone, succede questo
button.addEventListener('click', function (event) {
    event.preventDefault();

    // Recupero i valori inseriti dall'utente
    let kmValue = parseFloat(km.value);  // Convertiamo il valore in numero
    let ageValue = parseInt(age.value);  // Convertiamo il valore in numero intero
    let price = priceKm * kmValue;  // Calcoliamo il prezzo totale
    let finalPrice = '';

    // Calcolo degli sconti solo dopo aver definito price
    let firstDiscount = price * 0.2;  // Sconto per minorenni (20%)
    let secondDiscount = price * 0.4;  // Sconto per over 64 (40%)

    // Verifica dell'età per applicare lo sconto e la tariffa
    if (ageValue < 18) {
        finalPrice = (price - firstDiscount);  // Sconto per minorenni
        biglietto.innerHTML = 'Ridotto 20%';  // Tariffa per minorenni
    }
    else if (ageValue > 64) {
        finalPrice = (price - secondDiscount);  // Sconto per over 64
        biglietto.innerHTML = 'Ridotto 40%';  // Tariffa per over 64
    }
    else {
        finalPrice = price;  // Nessuno sconto
        biglietto.innerHTML = 'Tariffa Standard';  // Tariffa senza sconto
    }

    // Generazione di un numero casuale per la carrozza (da 1 a 6)
    let carrozzaValue = Math.floor(Math.random() * 6) + 1;  // Genera un numero tra 1 e 6
    carrozza.innerHTML = 'Carrozza ' + carrozzaValue;  // Visualizza il numero di carrozza

    // Generazione di un codice random per il biglietto
    let randomCode = Math.floor(Math.random() * 1000000);  // Genera un numero casuale per il codice CP

    // Arrotondare il prezzo finale a 2 decimali
    finalPrice = finalPrice.toFixed(2);
    console.log("Il prezzo finale è: €" + finalPrice);

    // Inserimento dati della form nella card biglietto
    nameCard.innerHTML = name.value;  // Inserisce il nome nella card
    code.innerHTML = randomCode;  // Visualizza il codice CP random
    prezzoFinale.innerHTML = '€ ' + finalPrice;  // Visualizza il prezzo finale
});