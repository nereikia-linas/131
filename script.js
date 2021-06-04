'use strict'

do {
  var price = prompt('Įrašykite pasirinktos prekės kainą €');
  var price = Number(price);
} while (isNaN(price) || price <= 0);

console.log('Pasirinktos prekės kaina: ' + price.toFixed(2) + ' €');

function deliveryFunction() {
  var delivery = confirm('Ar reikalingas pristatymas į namus?');
  var deliveryPrice = 5;

if (delivery == true) {
    do {
      var deliveryCity = prompt('Nurodykite miestą, į kurį reikia pristatyti prekę:')
    } while (deliveryCity <= 0);

    console.log('Pristatymas į namus: ' + deliveryPrice.toFixed(2) + ' €');
    console.log('Iš viso: ' + (deliveryPrice + price).toFixed(2) + ' €');
    console.log('Prekę pristatysime į ' + deliveryCity + ', per 1-3 dienas.');
  } else {
    console.log('Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1A');
  }
}
deliveryFunction();
