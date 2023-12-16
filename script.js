const squares = document.querySelectorAll('.square');
const player = document.querySelector('.player');
var click = 0;
var ganhou = false;
const array = [];
const arraySquares = [];

function game () {
    squares.forEach(square => {
        arraySquares.push(square);
        square.addEventListener('click', () => {
            if(!square.classList.contains('active')) {
                square.classList.add('active');
                if(click === 0) {
                    square.textContent = 'X';
                    click = 1;
                    setTimeout(() => {
                        player.textContent = 'PC é a sua vez!';
                    }, 15)
                    const key = square.getAttribute('key');
                    array.push([key, "X"]);
                    checkWinner ();
                    setTimeout(() => {
                        pc()
                    }, 500)
                }
            }
        });
    });
}

function pc () {
    const winningCombosPl1 = [
        ['0X', '1X'],
        ['1X', '2X'],
        ['0X', '4X'],
        ['4X', '8X'],
        ['3X', '4X'],
        ['4X', '5X'],
        ['6X', '7X'],
        ['7X', '8X'],
        ['6X', '4X'],
        ['4X', '2X'],
        ['0X', '3X'],
        ['3X', '6X'],
        ['1X', '4X'],
        ['4X', '7X'],
        ['2X', '5X'],
        ['5X', '8X'],
        ['3X', '5X'],
        ['6X', '8X'],//AQUI
        ['0X', '6X'],
        ['1X', '7X'],
        ['2X', '8X'],
        ['2X', '6X'],
        ['0X', '8X'],
        ['0X', '2X'],
    ];
    const winningCombosPC = [
        ['0O', '1O'],
        ['1O', '2O'],
        ['0O', '4O'],
        ['4O', '8O'],
        ['3O', '4O'],
        ['4O', '5O'],
        ['6O', '7O'],
        ['7O', '8O'],
        ['6O', '4O'],
        ['4O', '2O'],
        ['0O', '3O'],
        ['3O', '6O'],
        ['1O', '4O'],
        ['4O', '7O'],
        ['2O', '5O'],
        ['5O', '8O'],
        ['3O', '5O'],//AQUI
        ['6O', '8O'],
        ['0O', '6O'],
        ['1O', '7O'],
        ['2O', '8O'],
        ['2O', '6O'],
        ['0O', '8O'],
        ['0O', '2O'],
    ];

    const arrayKeys = array.map(element => element[0] + element[1]);

    if (click === 1 && !ganhou) {
        for (const combo of winningCombosPC) {
            if (combo.every(key => arrayKeys.includes(key)) && click === 1) {
                const availableSquares = arraySquares.filter(square => !square.classList.contains('active'));
                if (combo == winningCombosPC[0]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '2');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['2', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[1]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '0');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['0', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[2]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '8');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['8', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[3]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '0');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['0', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[4]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '5');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['5', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[5]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '3');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['3', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[6]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '8');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['8', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[7]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '6');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['6', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[8]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '2');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['2', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[9]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '6');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['6', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[10]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '6');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['6', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[11]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '0');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['0', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[12]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '7');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['7', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[13]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '1');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['1', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[14]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '8');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['8', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[15]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '2');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['2', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[16]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '4');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['4', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[17]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '7');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['7', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[18]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '3');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['3', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[19]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '4');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['4', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[20]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '5');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['5', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[21]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '4');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['4', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPC[22]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '4');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['4', 'O']);
                        checkWinner();
                    }
                }else{
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '1');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['1', 'O']);
                        checkWinner();
                    }
                }
            }
        }
        for (const combo of winningCombosPl1) {
            if (combo.every(key => arrayKeys.includes(key)) && click === 1) {
                const availableSquares = arraySquares.filter(square => !square.classList.contains('active'));
                if (combo == winningCombosPl1[0]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '2');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['2', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[1]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '0');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['0', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[2]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '8');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['8', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[3]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '0');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['0', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[4]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '5');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['5', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[5]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '3');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['3', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[6]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '8');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['8', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[7]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '6');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['6', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[8]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '2');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['2', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[9]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '6');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['6', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[10]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '6');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['6', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[11]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '0');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['0', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[12]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '7');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['7', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[13]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '1');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['1', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[14]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '8');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['8', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[15]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '2');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['2', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[16]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '4');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['4', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[17]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '7');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['7', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[18]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '3');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['3', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[19]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '4');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['4', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[20]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '5');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['5', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[21]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '4');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['4', 'O']);
                        checkWinner();
                    }
                }else if(combo == winningCombosPl1[22]){
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '4');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['4', 'O']);
                        checkWinner();
                    }
                }else{
                    const squareToPlace = availableSquares.find(square => square.getAttribute('key') === '1');
                    if (squareToPlace) {
                        squareToPlace.textContent = 'O';
                        squareToPlace.classList.add('active');
                        click = 0;
                        setTimeout(() => {
                            player.textContent = 'Player 1 é a sua vez!';
                        }, 15);
                        array.push(['1', 'O']);
                        checkWinner();
                    }
                }
            }
        }
    }

    if (click === 1 && !ganhou) {
        const availableSquares = arraySquares.filter(square => !square.classList.contains('active'));
        const randomSquare = availableSquares[Math.floor(Math.random() * availableSquares.length)];
        randomSquare.textContent = 'O';
        randomSquare.classList.add('active');
        click = 0;
        setTimeout(() => {
            player.textContent = 'Player 1 é a sua vez!';
        }, 15)
        const key = randomSquare.getAttribute('key');
        array.push([key, "O"]);
        checkWinner ();
    }
}

function checkWinner () { 
    const winningCombosPl1 = [
        ['0X', '1X', '2X'],
        ['0X', '4X', '8X'],
        ['3X', '4X', '5X'],
        ['6X', '7X', '8X'],
        ['6X', '4X', '2X'],
        ['0X', '3X', '6X'],
        ['1X', '4X', '7X'],
        ['2X', '5X', '8X'],
    ];
    const winningCombosPl2 = [
        ['0O', '1O', '2O'],
        ['0O', '4O', '8O'],
        ['3O', '4O', '5O'],
        ['6O', '7O', '8O'],
        ['6O', '4O', '2O'],
        ['0O', '3O', '6O'],
        ['1O', '4O', '7O'],
        ['2O', '5O', '8O'],
    ];

    const arrayKeys = array.map(element => element[0] + element[1]);

    for (const combo of winningCombosPl1) {
        if (combo.every(key => arrayKeys.includes(key))) {
            setTimeout(() => {
                alert('JOGADOR 1 GANHOU');
                ganhou = true;
                window.location.reload();
            }, 10);
            return;
        }
    }
    for (const combo of winningCombosPl2) {
        if (combo.every(key => arrayKeys.includes(key))) {
            setTimeout(() => {
                alert('PC GANHOU');
                window.location.reload();
            }, 10);
            return;
        }
    }

    if (arrayKeys.length === 9) {
        setTimeout(() => {
            alert('EMPATE');
            window.location.reload();
        }, 10);
        return;
    }
}

function init () {
    game();
}

init();