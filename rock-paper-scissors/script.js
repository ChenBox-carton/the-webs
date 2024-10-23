const moves = ['Rock', 'Paper', 'Scissors'];

const counter = {
    winCount: 0,
    loseCount: 0,
    tieCount: 0
}

const winConditions = {
    Rock: 'Scissors',
    Paper: 'Rock',
    Scissors: 'Paper'
}

function playGame(playerMove) {

    // 隨機產生電腦的選擇
    const computerMove = moves[Math.floor(Math.random() * 3)];

    let result = '';

    // 判斷結果
    if (playerMove === computerMove) {
        result = 'Tie';
        updateCounterAndAnimate('Tie count', ++counter.tieCount);
    } else if (winConditions[playerMove] === computerMove) {
        result = 'You Win'
        updateCounterAndAnimate('Win count', ++counter.winCount);
    } else {
        result = 'You Lose';
        updateCounterAndAnimate('Lose count', ++counter.loseCount);
    }

    updateUI(playerMove, computerMove, result);
}

function updateUI(playerMove, computerMove, result) {

    //隱藏初始
    document.getElementById("init").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden")

    //勝負說明
    document.getElementById("you-pick").textContent = `${playerMove}.`;
    document.getElementById("computer-pick").textContent = `${computerMove}.`;
    document.getElementById("ending").textContent = `${result}.`;
}

function updateCounterAndAnimate(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.textContent = `${elementId}: ${newValue}`;
    addBounceAnimation(element);
}

function addBounceAnimation(element) {
    element.classList.remove('bounce');
    setTimeout(() => {
        element.classList.add('bounce');
    }, 10);
}