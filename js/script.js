function getMoveName(argMoveId) {
    if(argMoveId == 1) {
        return 'kamień';
    }
    else if(argMoveId == 2) {
        return 'papier';
    }
    else if(argMoveId == 3) {
        return 'nożyce';
    }
}

function displayResult(argComputerMove, argPlayerMove) {
    console.log("ArgComputerMove", argComputerMove);
    console.log("ArgPlayerMove", argPlayerMove);
    if(
        (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
        (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
        (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ){ 
        printMessage('Wygrywasz!');
    } else if (argComputerMove == argPlayerMove){
        printMessage('Remis!');
    } else if (argPlayerMove == 'nieznany ruch'){
        pringMessage('Nieznany ruch, wybierz między 1, 2 i 3');
    } else {
        printMessage('Przegrywasz');
    }
}

/*komputer*/
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);

/*gracz*/
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

// wynik gry //
displayResult(computerMove, playerMove);

