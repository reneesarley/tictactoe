
var player = []
var computer = []
var possibleOptions = [1,2,3,4,5,6,7,8,9]

function playersTurn (position){
  var  index = possibleOptions.indexOf(position)
  if (index > -1){
    player.push(position);
    possibleOptions.splice(index,1)
  }
  else{
    alert("not an option")
  }
  console.log(player)
  checkForWin(player)
  computersTurn()
}

function computersTurn (){
  var computersPick = possibleOptions[Math.floor(Math.random()*possibleOptions.length)];
  var index = possibleOptions.indexOf(computersPick)
  computer.push(computersPick);
  possibleOptions.splice(index,1)
  console.log("computer" + computer)
}

function checkForWin(win){
  // if player array number are 1 and 2 and 3 then player wins
  console.log(win)
  if(win.includes(1) && win.includes(2) && win.includes(3)){
    return true
  }
  else if (win.includes(4) && win.includes(5) && win.includes(6)){
    return true
  }
  else if (win.includes(7) && win.includes(8) && win.includes(9)){
    return true
  }
  else if (win.includes(1) && win.includes(4) && win.includes(7)){
    return true
  }
  else if (win.includes(2) && win.includes(5) && win.includes(8)){
    return true
  }
  else if (win.includes(3) && win.includes(6) && win.includes(9)){
    return true
  }
  else if (win.includes(1) && win.includes(5) && win.includes(9)){
    return true
  }
  else if (win.includes(3) && win.includes(5) && win.includes(7)){
    return true
  } else {
    return false
  }
}
