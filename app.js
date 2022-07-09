let cells = document.getElementsByClassName('cell')
let playerX = 'X'
let playerO = 'O'

let playTime = playerX
let hasWinner = false;

let arrCells = ['','','','','','','','','',]

updatePlayer()

function updatePlayer(){
    if (hasWinner) {return}
    if (playTime === playerX ){
        let player = document.querySelector('div#mostrador span')
        player.innerHTML = 'X'
        player.style.color= '#3A2C50'
    }else{
        let player = document.querySelector('div#mostrador span')
        player.innerHTML = 'O'
        player.style.color='#47A4AA'
    }

}
    for (let i = 0; i < cells.length; i++) {
        const element = cells[i];
        
        function fillCells(){
            if (hasWinner){return}
            if (element.innerHTML === ''){
                if(playTime==playerX){
                    element.innerHTML='X'
                    element.style.color= '#3A2C50'
                    playTime=playerO
        }else{
            element.innerHTML='O'
            element.style.color='#47A4AA'
            playTime=playerX
        }        
        updatePlayer()
        showWinner()
        verifyWinner()
        if(hasWinner) {
            updateWinner()
        }
        hidePlayer()
        hasDraw()
        console.log(arrCells)
        console.log(hasWinner)

    }
        
 }
        function showWinner(){
            if (element.innerHTML === 'X'){
            arrCells[i] = 'X'
        }else{
            arrCells[i] = 'O'
        }
 }
 function verifyWinner(){
    if(arrCells[0] !== '' && arrCells[0] === arrCells[1] && arrCells[1] === arrCells[2]){
        hasWinner = true
    } else if (arrCells[0] !== '' && arrCells[0] === arrCells[3] && arrCells[3] === arrCells[6]) {
        hasWinner = true
    }
    else if (arrCells[0] !== '' && arrCells[0] === arrCells[4] && arrCells[4] === arrCells[8]) {
        hasWinner = true
     }
     else if (arrCells[1] !== '' && arrCells[1] === arrCells[4] && arrCells[4] === arrCells[7]) {
        hasWinner = true
     }
     else if (arrCells[2] !== '' && arrCells[2] === arrCells[5] && arrCells[5] === arrCells[8]) {
        hasWinner = true
     }
     else if (arrCells[2] !== '' && arrCells[2] === arrCells[4] && arrCells[4] === arrCells[6]) {
        hasWinner = true
     }
     else if (arrCells[3] !== '' && arrCells[3] === arrCells[4] && arrCells[4] === arrCells[5]) {
        hasWinner = true
     }
     else if (arrCells[6] !== '' && arrCells[6] === arrCells[7] && arrCells[7] === arrCells[8]) {
        hasWinner = true
     }
     else{
        hasWinner = false
    }
 }
  function updateWinner(){
    if (playTime !== playerX ){
        let winner = document.querySelector('div#vencedor span')
        winner.innerHTML = 'X'
        winner.style.color= '#3A2C50'
    } else{
        let winner = document.querySelector('div#vencedor span')
        winner.innerHTML = 'O'
        winner.style.color='#47A4AA'
    }
    
  }
  function hidePlayer(){
    if(hasWinner){
        let playerHtml = document.querySelector('div#mostrador')
        playerHtml.innerHTML = 'O jogo acabou!'
    }
}
function hasDraw(){
    if(arrCells[0] !== ''&& arrCells[1]!== '' && arrCells[2] !== '' && arrCells[3] !== '' && arrCells[4] !== '' && arrCells[5] !== '' && arrCells[6] !== '' && arrCells[7] !== '' && arrCells[8]!== '' && hasWinner === false){
        let drawPlayer = document.querySelector('div#vencedor')
        drawPlayer.innerHTML = 'O jogo foi um empate!'
        let playerHtml = document.querySelector('div#mostrador')
        playerHtml.innerHTML = 'O jogo acabou!'
        console.log('empate')
    }
}
     element.addEventListener('click', fillCells)
}

