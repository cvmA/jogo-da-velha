let celulas = document.getElementsByClassName('cell')
let jogadorX = 'X'
let jogadorO = 'O'

let playTime = jogadorX
let gameOver = false;

atualizarMostrador()

function atualizarMostrador(){
    if (gameOver) {return}
    if (playTime == jogadorX){
        let player = document.querySelector('div#mostrador span')
        player.innerHTML = 'X'
        player.style.color= '#3A2C50'
    } else{
        let player = document.querySelector('div#mostrador span')
        player.innerHTML = 'O'
        player.style.color='#47A4AA'
    }

}
    for (let i = 0; i < celulas.length; i++) {
        const element = celulas[i];
        
        function preencherCelulas(){
            if (gameOver){return}
            if (element.innerHTML === ''){
                if(playTime==jogadorX){
                    element.innerHTML='X'
                    element.style.color= '#3A2C50'
                    playTime=jogadorO
        }else{
            element.innerHTML='O'
            element.style.color='#47A4AA'
            playTime=jogadorX
        }
        atualizarMostrador()
        mostrarVencedor()

    }
        
 }
     element.addEventListener('click', preencherCelulas)
}
