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
CurrentGame.prototype.winningArrays = function(){
  this.winningArrays = [[1,2,3],[4,5,6],[7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]
  }

//contructor and object for gameBoard
function CurrentGame(plays){
  this.possiblePlays = plays
  this.playersChoices = []
  this.computerChoices = []
  this.gameBoard = []
  this.createGameboard()
  this.winningArrays()
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
  var offense = computerHelper(game.computerChoices)
  var defense = computerHelper(game.playersChoices)
  if (offense > 0){
   alert("YOU ARE BAD AT THIS GAME")
   eachTurn(offense, "O")
   return
 }
  if(defense > 0){
    console.log("in the first if computer pick")
   eachTurn(defense, "O")
   return
 } else {
    console.log("in the else computer pick ")
   var random = game.possiblePlays[Math.floor(Math.random()*(game.possiblePlays.length))];
   eachTurn(random,"O")
    console.log("computer choices" + game.computerChoices);
    console.log(" after computer curret possiblePlays: " + game.possiblePlays);
  }
}


function eachTurn(choice, marker){
  var  index = game.possiblePlays.indexOf(parseInt(choice))
  if(marker==="X"){
    game.playersChoices.push(parseInt(choice))
    console.log("curret playersChoices " + game.playersChoices);
    if (checkWin(game.playersChoices)=== true) {
      alert("you win")
    }

  } else{
    game.computerChoices.push(parseInt(choice))
    if (checkWin(game.computerChoices)=== true) {
      alert("I win")
    }
  }
  game.possiblePlays.splice(index, 1)
  $("#" + choice).text(marker);
  $("#" + choice).off()
  if(((game.possiblePlays.length % 2) === 0) && (game.possiblePlays.length > 0)){
    computerPick()
  }
}

function computerHelper(currentPlays){
  for (i=0;i<game.winningArrays.length;i++) {
    console.log(game.winningArrays[i]+"")
    var winner = 0
    var leftOvers = game.winningArrays[i].slice(0)
    for (j=0;j<3;j++){
      console.log(game.winningArrays[i][j])
      if (currentPlays.includes(game.winningArrays[i][j])){
        winner +=1
        var  index = leftOvers.indexOf(game.winningArrays[i][j])
        leftOvers.splice(index, 1)
        console.log("win counter" + winner)
        console.log("the current left over array is:" + leftOvers)
        if (winner === 2 && game.possiblePlays.includes(leftOvers[0])){
          console.log("the left over number is:" + leftOvers)
          return leftOvers
        }
      }
    }
  }
}

function checkWin(win){
  for (i=0;i<game.winningArrays.length;i++) {
    console.log(game.winningArrays[i]+"")
    var winner = 0
    for (j=0;j<3;j++){
      console.log(game.winningArrays[i][j])
      if (win.includes(game.winningArrays[i][j])){
        winner +=1
        console.log("win counter" + winner)
        if (winner === 3){
          return true
        }
      }
    }
  }
}




// var player = []
// var computer = []
// var possibleOptions = [1,2,3,4,5,6,7,8,9]

// function playersTurn (position){
//   var  index = possibleOptions.indexOf(position)
//   if (index > -1){
//     player.push(position);
//     possibleOptions.splice(index,1)
//   }
//   else{
//     alert("not an option")
//   }
//   console.log(player)
//   checkForWin(player)
//   computersTurn()
// }

// function computersTurn (){
//   var computersPick = possibleOptions[Math.floor(Math.random()*possibleOptions.length)];
//   var index = possibleOptions.indexOf(computersPick)
//   computer.push(computersPick);
//   possibleOptions.splice(index,1)
//   console.log("computer" + computer)
// }
//
// function checkForWin(win){
//   // if player array number are 1 and 2 and 3 then player wins
//   console.log(win)
//   if(win.includes(1) && win.includes(2) && win.includes(3)){
//     return true
//   }
//   else if (win.includes(4) && win.includes(5) && win.includes(6)){
//     return true
//   }
//   else if (win.includes(7) && win.includes(8) && win.includes(9)){
//     return true
//   }
//   else if (win.includes(1) && win.includes(4) && win.includes(7)){
//     return true
//   }
//   else if (win.includes(2) && win.includes(5) && win.includes(8)){
//     return true
//   }
//   else if (win.includes(3) && win.includes(6) && win.includes(9)){
//     return true
//   }
//   else if (win.includes(1) && win.includes(5) && win.includes(9)){
//     return true
//   }
//   else if (win.includes(3) && win.includes(5) && win.includes(7)){
//     return true
//   } else {
//     return false
//   }
// }
