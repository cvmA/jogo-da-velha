let cells = document.getElementsByClassName('cell')
let playerX = 'X'
let playerO = 'O'

let playTime = playerX
let hasWinner = false;

let arrCells= ['','','','','','','','','',]

atualizarMostrador()

function atualizarMostrador(){
    if (hasWinner) {return}
    if (playTime === playerX ){
        let player = document.querySelector('div#mostrador span')
        player.innerHTML = 'X'
        player.style.color= '#3A2C50'
    } else{
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
        atualizarMostrador()
        mostrarVencedor()
        verificarVencedor()
        if(hasWinner) {
            atualizarVencedor()
        }
        console.log(arrCells)
        console.log(hasWinner)

    }
        
 }
        function mostrarVencedor(){
            if (element.innerHTML === 'X'){
            arrCells[i] = 'X'
        }else{
            arrCells[i] = 'O'
        }
 }
 function verificarVencedor(){
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
  function atualizarVencedor(){
    if (playTime !== playerX ){
        let vencedor = document.querySelector('div#vencedor span')
        vencedor.innerHTML = 'X'
        vencedor.style.color= '#3A2C50'
    } else{
        let vencedor = document.querySelector('div#vencedor span')
        vencedor.innerHTML = 'O'
        vencedor.style.color='#47A4AA'
    }
  }
     element.addEventListener('click', fillCells)
}

