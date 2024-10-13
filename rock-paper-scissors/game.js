const moves = ['Rock', 'Paper', 'Scissors'];

const counter = {
    winCount: 0,
    loseCount: 0,
    tieCount: 0
};

function playGame(playerMove) {
    
     // 隨機產生電腦的選擇
    const computerMove = moves[Math.floor(Math.random() * 3)];

    let result = '';

    // 判斷結果
    if (playerMove === computerMove) {
        result = 'Tie';
        counter.tieCount++;
    } else if (
        (playerMove === 'Rock' && computerMove === 'Scissors') ||
        (playerMove === 'Paper' && computerMove === 'Rock') ||
        (playerMove === 'Scissors' && computerMove === 'Paper')
    ) {
        result = 'You Win';
        counter.winCount++;
    } else {
        result = 'You Lose';
        counter.loseCount++;
    }

    updateUI(playerMove, computerMove, result);
}   
    // 顯示結果
function updateUI(playerMove, computerMove, result) {

    document.getElementById("init").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden")

    document.getElementById("you-pick").textContent = `${playerMove}.`;
    document.getElementById("computer-pick").textContent = `${computerMove}.`;
    document.getElementById("ending").textContent = `${result}.`;

    document.getElementById("win-count").textContent =
    (`Win count: ${counter.winCount}`);
    document.getElementById("lose-count").textContent =
    (`Lose count: ${counter.loseCount}`);
    document.getElementById("tie-count").textContent =
    (`Tie count: ${counter.tieCount}`);
}