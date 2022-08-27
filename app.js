let cells = document.getElementsByClassName('cell')
let playerX = 'X'
let playerO = 'O'
let choosePlayerX = document.querySelector('div.playerX')
let choosePlayerO = document.querySelector('div.playerO')
let gameDiv = document.querySelector('div#root')
let popUpContainer = document.querySelector('div.popupContainer')
let playTime
let player1
let hasWinner = false;
let arrCells = ['', '', '', '', '', '', '', '', '',]

function setPlayerX() {
    startGame(playerX)
}
function setPlayerO() {
    startGame(playerO)
}
function updatePlayer() {
    if (hasWinner) { return }
    if (playTime === playerX) {
        let player = document.querySelector('div#playerTime span')
        player.innerHTML = 'X'
        player.style.color = '#3A2C50'
    } else {
        let player = document.querySelector('div#playerTime span')
        player.innerHTML = 'O'
        player.style.color = '#47A4AA'
    }
    console.log('rodou updatePlayer')
}
function startGame(player) {
    playTime = player
    popUpContainer.style.display = 'none'
    gameDiv.innerHTML = `
    <div><h1 class="title">Jogo da velha</h1></div>
    <div id="playerTime">
            <p>Vez do jogador: <span></span></p>
        </div>
        <div id="playerWinner">
            <p>O jogador vencedor foi: <span></span></p>
        </div>
        <div class="container">
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
            <div class="cell"></div>
        </div>
        <div class="btnContainer">
            <button class="btnRestart" >
                Restart
            </button>
        </div>`
    console.log(player)
    updatePlayer()
    for (let i = 0; i < cells.length; i++) {
        const element = cells[i];
        function fillCells() {
            if (hasWinner) return
            if (element.innerHTML === '') {
                if (playTime == playerX) {
                    element.innerHTML = 'X'
                    element.style.color = '#3A2C50'
                    playTime = playerO
                } else {
                    element.innerHTML = 'O'
                    element.style.color = '#47A4AA'
                    playTime = playerX
                }
                updatePlayer()
                fillArrayCells()
                verifyWinner()
                if (hasWinner) {
                    updateWinner()
                }
                gameOver()
                hasDraw()
                console.log(arrCells)
                console.log(hasWinner)
            }
        }
        function fillArrayCells() {
            if (element.innerHTML === 'X') {
                arrCells[i] = 'X'
            } else {
                arrCells[i] = 'O'
            }
        }
        function verifyWinner() {
            if (arrCells[0] !== '' && arrCells[0] === arrCells[1] && arrCells[1] === arrCells[2]) {
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
        }
        function updateWinner() {
            if (playTime !== playerX) {
                let winner = document.querySelector('div#playerWinner span')
                winner.innerHTML = 'X'
                winner.style.color = '#3A2C50'
            } else {
                let winner = document.querySelector('div#playerWinner span')
                winner.innerHTML = 'O'
                winner.style.color = '#47A4AA'
            }

        }
        function gameOver() {
            if (hasWinner) {
                let playerHtml = document.querySelector('div#playerTime')
                playerHtml.innerHTML = 'O jogo acabou!'
            }
        }
        function hasDraw() {
            if (arrCells[0] !== '' && arrCells[1] !== '' && arrCells[2] !== '' && arrCells[3] !== '' && arrCells[4] !== '' && arrCells[5] !== '' && arrCells[6] !== '' && arrCells[7] !== '' && arrCells[8] !== '' && hasWinner === false) {
                let drawPlayer = document.querySelector('div#playerWinner')
                drawPlayer.innerHTML = 'O jogo foi um empate!'
                let playerHtml = document.querySelector('div#playerTime')
                playerHtml.innerHTML = 'O jogo acabou!'
                console.log('empate')
            }
        }
        element.addEventListener('click', fillCells)
    }
}
choosePlayerX.addEventListener('click', setPlayerX)
choosePlayerO.addEventListener('click', setPlayerO)
