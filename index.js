function dwarfRollCall(dwarves) {
  var list
  for (var i = 0; i < dwarves.length; i++) {
      list = list + (i + 1) + '. ' + dwarves[i] + ' '
  }
  return list
}

function summonCaptainPlanet(planeteerCalls){
  var original = planeteerCalls
  var calls = []
  for (var i = 0; i < original.length; i++) {
      original[i] = original[i].toUpperCase()
      calls.push(original[i] + '!')
    }
  return calls
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++){
  if (words[i].length > 4) {
    return true
  }
  else {
    return false}
}
}

function findTheCheese (foods) {
  var typesOfCheese = ['cheddar', 'gouda', 'camembert']
  for (var i = 0; i < foods.length; i++) {
    if (typesOfCheese.includes(foods[i])) {
      return foods[i]
    }
  }
  return 'no cheese!'
}
