$(function() {
  $(".positionBox").click(function(){
    var boxId = $(this).attr("id");
    eachTurn(boxId, "X");
    console.log("this is the ID " + boxId);
  });
});

//set up gameboard
CurrentGame.prototype.createGameboard = function(){
  for (i = 1; i <= 9; i ++){
  this.gameBoard["position" + i] = "available"
  }
}

//contructor and object for gameBoard
function CurrentGame(plays){
  this.possiblePlays = plays
  this.playersChoices = []
  this.gameBoard = []
  this.createGameboard()
}
// var gameBoard = new CurrentGame()
// var playersGameBoard = new CurrentGame()
var game = new CurrentGame([1,2,3,4,5,6,7,8,9])



function createArrayOfPossible(){
  possibleOptionsII = new Options()
  for(var i=1; i<10; i++)
  if(gameBoard["position" + i] === "available"){
    possibleOptionsII["position" + i] = "available"
  }
}

//check to see if choice is available
function computerPick(){
  for(i=0; i<10; i++){
    console.log("ran loop")
    var random = [Math.floor(Math.random()*9)]
    if(gameBoard["position" + random] === "available"){
      alert("number found"+random)
      eachTurn(random,"O")
      break
    }
  }

}
//  this is a function the creates random number then calls checkForAvailbility unction and passes the random number to it
// possibleOptions[Math.floor(Math.random()*possibleOptions.length)];
// then "position" + randomNumber
// } else{
// [Math.floor(Math.random()*9)]
//adds current player's choice to the gameBoard
function eachTurn(choice, marker){
  var  index = game.possiblePlays.indexOf(parseInt(choice))
  game.possiblePlays.splice(index, 1)
  game.playersChoices.push(choice)
  $("#" + choice).text(marker);
  $("#" + choice).off()
  console.log(game.playersChoices);
  console.log("curret possiblePlays: " + game.possiblePlays);
  // computerPick()

}


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
