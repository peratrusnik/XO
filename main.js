let box = document.querySelector('.box');
let btn = document.querySelector('.btn');
let title = document.querySelector('#title');
let player1Point = document.querySelector('#player1Point');
let player2Point = document.querySelector('#player2Point');

let player1Score = 0;
let player2Score = 0;

let text = '';

startGame();

function startGame() {
    createTable();
    let symbol = "O";
    let boxes = document.querySelectorAll('.xo');
    let lines = [
        [boxes[0], boxes[1], boxes[2]],
        [boxes[3], boxes[4], boxes[5]],
        [boxes[6], boxes[7], boxes[8]],
        [boxes[0], boxes[3], boxes[6]],
        [boxes[1], boxes[4], boxes[7]],
        [boxes[2], boxes[5], boxes[8]],
        [boxes[0], boxes[4], boxes[8]],
        [boxes[2], boxes[4], boxes[6]],
    ];

    function createTable() {
        text = '';
        for (let i = 0; i < 9; i++) {
            text += '<div class="xo"></div>'
        }
        box.innerHTML = text;
    }
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', insertSymbol);
    }

    function insertSymbol() {
        this.removeEventListener('click', insertSymbol);
        if (symbol === 'O') {
            symbol = 'X';
        } else {
            symbol = 'O';
        }
        this.innerHTML = symbol;
        checkedLines();
    }

    function checkedLines() {
        for (var i = 0; i < lines.length; i++) {
            let line = lines[i];
            if (line[0].innerHTML === line[2].innerHTML && line[0].innerHTML === line[1].innerHTML && line[0].innerHTML !== '') {
                line[0].style.background = 'tomato';
                line[1].style.background = 'tomato';
                line[2].style.background = 'tomato';

                btn.style.display = 'block';
                btn.addEventListener('click', newGame);
                stopGame();

                if (symbol === "X") {
                    player1Score++;
                    player1Point.innerHTML = player1Score;
                }
                if (symbol === "O") {
                    player2Score++;
                    player2Point.innerHTML = player2Score;
                }

            }
            if (player1Score === 5) {
                btn.addEventListener('click', newGame);
                title.innerHTML = `Winner "${symbol}"<br>${player1Score} - ${player2Score}`;
                stopGame();
                startGame();
                clearInputs();
            }
            if (player2Score === 5) {
                btn.addEventListener('click', newGame);
                title.innerHTML = `Winner "${symbol}"<br>${player1Score} - ${player2Score} `;
                stopGame();
                startGame();
                clearInputs();
            }
                if (boxes[0].innerHTML != "" && boxes[1].innerHTML != "" && boxes[2].innerHTML != "" && boxes[3].innerHTML != "" && boxes[4].innerHTML != "" && boxes[5].innerHTML != "" && boxes[6].innerHTML != "" && boxes[7].innerHTML != "" && boxes[8].innerHTML != "") {

                    title.innerHTML = 'Match is Draw!'
                    btn.style.display = 'block';
                    btn.addEventListener('click', newGame);
                }
            
        }






        function stopGame() {
            boxes.forEach(box => {
                box.removeEventListener('click', insertSymbol);
            });
        }
    }

    function clearInputs() {
        player1Score = 0;
        player2Score = 0;
        player1Point.innerHTML = 0;
        player2Point.innerHTML = 0;
    }

    function newGame() {
        startGame();
        btn.style.display = 'none';
        title.innerHTML = "";

    }

}
