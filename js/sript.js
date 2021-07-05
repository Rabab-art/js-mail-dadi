// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.



// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato.


// Dado
// var player1 = Math.floor(Math.random() * 6) + 1;
// var player2 = Math.floor(Math.random() * 6) + 1;
// var resultElement = document.getElementById('result');

// console.log('Tiro giocatore 1:', player1);
// console.log('Tiro giocatore 2:', player2);

// if (player1 > player2) {
//     console.log('Giocatore 1 ha vinto');
//     message = 'Giocatore 1 ha vinto';
// } else if (player2 > player1) {
//     console.log(' Giocatore 2 ha vinto');
//     message = 'Giocatore 2 ha vinto';
// } else {
//     console.log('Pareggio');
//     message = 'Pareggio';
// }
// resultElementinnerText = message;

//  Email
var display = document.getElementById('display');
var emails = [lola@libero.com,
bibi@yahoo.it,
balu@tiscali.it ];

// collection email from user

var userEmail = prompt('Inserisci la tua email', 'lola@libero.it');

// Check

var isAllowd = false;
for (var i = 0; <emails.length; i ++) {
    if (userEmail === emails[i]) {
        console.log('userEmail', userEmail);
        console.log('current Email checked from the list', emails)
        isAllowd = true;
    }
}

if (emails) {
    display.innerText = 'Benvenuto' + userEmail;
} else {
    display.innerText = 'Spiacente, non sei autorizzato';
}
}