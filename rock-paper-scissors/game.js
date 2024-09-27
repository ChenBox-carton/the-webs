let winCount = 0;
let loseCount = 0;
let tieCount = 0;

function playGame(playerMove) {
    const randomNumber = Math.random() * 3;
    let computerMove = '';

    // 根據隨機數產生電腦的選擇
    if (randomNumber >= 0 && randomNumber < 1) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1 && randomNumber < 2) {
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }

    let result = '';

    // 判斷結果
    if (playerMove === computerMove) {
        result = 'Tie';
        tieCount++;
    } else if (
        (playerMove === 'Rock' && computerMove === 'Scissors') ||
        (playerMove === 'Paper' && computerMove === 'Rock') ||
        (playerMove === 'Scissors' && computerMove === 'Paper')
    ) {
        result = 'You Win';
        winCount++;
    } else {
        result = 'You Lose';
        loseCount++;
    }
    
    // 顯示結果
    document.getElementById("init").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden")

    document.getElementById("you-pick").textContent = (`${playerMove}.`);
    document.getElementById("computer-pick").textContent = (`${computerMove}.`);
    document.getElementById("ending").textContent = (`${result}.`)

    document.getElementById("win-count").textContent =
    (`Win count: ${winCount}`);
    document.getElementById("lose-count").textContent =
    (`Lose count: ${loseCount}`);
    document.getElementById("tie-count").textContent =
    (`Tie count: ${tieCount}`);
}