function dwarfRollCall(dwarves) {
  var list
  for (var i = 0; i < dwarves.length; i++) {
    if (i === 0) {
      list = (i + 1) + '. ' + dwarves[i] + ' '
    }
    else {
      list = list + (i + 1) + '. ' + dwarves[i] + ' '
    }
  }
  return list
}

function summonCaptainPlanet(planeteerCalls){
  var original = planeteerCalls
  var calls = []
  for (var i = 0; i < original.length; i++) {
      calls.push(original[i] + '!')
    }
    calls.toUpperCase
  return calls
}

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}
