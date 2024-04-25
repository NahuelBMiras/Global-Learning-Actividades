//Actividad 1
// True || (1 > 3) && (10 == 5) => True || False = True
function problema1() {
  return true || (1 > 3 && 10 == 5);
}

//Actividad 2
// !(5 < 5) && (140 % 10 == 0) && !(False) || (2*5 >= 11) => True && True && True || False
// True || False = True
function problema2() {
  return (!(5 < 5) && 140 % 10 == 0 && !false) || 2 * 5 >= 11;
}

//Actividad 3
// (33 % 2 == 0) || (2**3 + 1 == 9) || (4 >= 4) && False => False || True || True && False
// True || False = True
function problema3() {
  return 33 % 2 == 0 || 2 ** 3 + 1 == 9 || (4 >= 4 && false);
}

console.log(problema1());
console.log(problema2());
console.log(problema3());

//Actividad 4
// si Dia (Soleado || Nublado) && Fin de semana:
function rideABike(dia, clima) {
  let message =
    "it's not the weekend or it is neither cloudy nor sunny,it is maybe raining, or did you write something else";

  let week = {
    Saturday: 'Fin de semana',
    Sunday: 'Fin de semana',
  };
  let weekend = week[dia] || message;

  let climate = {
    soleado: 'Soleado',
    nublado: 'Nublado',
  };
  let weather = climate[clima] || message;

  if (weather === message || weekend === message) {
    return message;
  }
  if (weather && weekend) {
    return "I'm going to ride a bike";
  }
}

console.log(rideABike('Sunday', 't'));

//Actividad 5
// Si frutas frescas && frutas dentro de presupuesto:
let moneyInTheWallet = 30000;
function buyFruit(freshFruit, money, fruitPrice) {
  let Price = parseInt(fruitPrice);
  let fresh = freshFruit;

  if (fresh === 'fresh' && Price <= money) {
    moneyInTheWallet -= Price;
    return `We can buy the fruit. The money we have left in our wallet is: ${moneyInTheWallet}`;
  } else {
    return `We can't buy the fruit. The money we have left in our wallet is: ${moneyInTheWallet}`;
  }
}

let banana = buyFruit('fresh', moneyInTheWallet, 3000);
console.log(banana);
console.log(moneyInTheWallet);
