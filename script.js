let scoreStr = localStorage.getItem('score')
let score;

score = JSON.parse(scoreStr) || {
  win: 0,
  lost: 0,
  tie: 0
}


let userchoice = '';

let choices = ["ROAK", "SESSIOR", "PAPER"];




function userchoiceShow(userchoice) {
  document.querySelector('.user-move').innerText = `USER: ${userchoice}`

}
function computerchoiceShow(computerchoice) {
  document.querySelector('.computer-move').innerText = `COMPUTER:${computerchoice}`

}
let result = '';

function checkResult(userchoice, computerchoice) {
  if (userchoice == computerchoice) {
    score.tie++
    result = "TIE"
  }
  else if (userchoice == 'ROAK' && computerchoice == 'SESSIOR') {
    score.win++;
    result = "YOU WIN"
  }
  else if (userchoice == 'ROAK' && computerchoice == 'PAPER') {
    score.lost++;
    result = "COMPUTER WIN"
  }
  else if (userchoice == 'PAPER' && computerchoice == 'ROAK') {
    score.win++;
    result = "YOU WIN"
  }
  else if (userchoice == 'PAPER' && computerchoice == 'SESSIOR') {
    score.lost++;
    result = "COMPUTER WIN"
  }

  else if (userchoice == 'SESSIOR' && computerchoice == 'ROAK') {
    score.lost++;
    result = "COMPUTER WIN"
  }

  else if (userchoice == 'SESSIOR' && computerchoice == 'PAPER') {
    score.win++;
    result = "YOU WIN"
  }
  else {
    console.warn('ERROR')
  }

}

