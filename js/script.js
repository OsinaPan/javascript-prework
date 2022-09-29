{
function clearMessages(){   
    document.getElementById("messages").innerHTML = "";
}

const playGame = function(playerInput){
    clearMessages();

    const getMoveName = function(argMoveId) {
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

    const displayResult = function(argComputerMove, argPlayerMove) {
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
const randomNumber = Math.floor(Math.random() * 3 + 1);
const computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);

/*gracz*/
const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

// wynik gry //
displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){playGame(3);
});
}