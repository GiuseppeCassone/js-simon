// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!
// Consigli
// Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano da domani alle 9:30?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?

// Creazione data del countdown
const countDownDate = new Date("Feb 12, 2024 09:30:00").getTime();

// Impostazione della funzione setinterval per contare tutti i secondi

let time = setInterval(function() {

    let todayDate = new Date().getTime();

    let timeDifference = countDownDate - todayDate;

// Creazione dei calcoli dei parametri di tempo(data, ora, minuti e secondi)

    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000 );

// Stampo in pagina gli elementi
    document.getElementById("countdown").innerHTML = days + "g " + hours + "o " + minutes + "m " + seconds + "s ";

    if (timeDifference < 0) {
        clearInterval(time);
        document.getElementById("countdown").innerHTML = "TEMPO SCADUTO";
      }

}, 1000);