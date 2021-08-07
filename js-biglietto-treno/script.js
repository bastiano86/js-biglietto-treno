let anni = parseInt(prompt('Ciao! Quanti anni hai?'));
let chilometri = parseInt(prompt('Quanti chilomentri devi percorrere?'));

document.getElementById('anni').innerHTML = anni;
document.getElementById('chilometri').innerHTML = chilometri;

const prezzoKm = 0.20;

let prezzoBiglietto = chilometri * prezzoKm;
let prezzoBigliettoRounded = Math.round( prezzoBiglietto * 100 ) / 100;



if (anni <= 18) {
document.getElementById('prezzo-biglietto').innerHTML = (prezzoBigliettoRounded * 80)/100;
} else if (anni >= 65) {
document.getElementById('prezzo-biglietto').innerHTML = (prezzoBigliettoRounded * 60)/100;
} else {
  document.getElementById('prezzo-biglietto').innerHTML = prezzoBigliettoRounded;
}
