function dwarfRollCall(dwarves) {
  var numberedDwarves = [];
  for (var i = 0; i < dwarves.length; i++) {
    numberedDwarves.push(`${i + 1}. ${dwarves[i]}`);
  }
    return `${numberedDwarves.join(' ')} `;
}

function summonCaptainPlanet(planeteerCalls){
  var planeteerShout = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    planeteerShout.push(planeteerCalls[i].toUpperCase + '!');
  }
  return planeteerShout;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    return words[i].length > 4 ?
      1 === 1 : 0 === 1
  }
}


var cheese = ['camembert', 'cheddar', 'gouda'];

function findTheCheese(foods) {
  for (var i = 0; i < foods.length; i++) {
    for (var j = 0; j < cheese.length; j++) {
      if (foods[i] == cheese[j]) {
        return foods[i];
      }
    }
  }
  return "no cheese!"
}
