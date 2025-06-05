  let cross = [];
  let circle = [];
  let turn = 0;

  const conditions = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"],
  ];

  function clicked(value) {
    const cell = document.getElementById(value.toString());
    const content = cell.querySelector(".cell-content");

    if (cell.style.pointerEvents === "none") return;

    turn++;

    if (turn % 2 !== 0) {
      content.innerHTML = "❌";
      cross.push(value.toString());
    } else {
      content.innerHTML = "⭕";
      circle.push(value.toString());
    }

    cell.style.pointerEvents = "none";

    if (checkWin(cross)) {
      document.getElementById("p1").style.display = "block";
      disableBoard();
    } else if (checkWin(circle)) {
      document.getElementById("p2").style.display = "block";
      disableBoard();
    } else if (turn === 9) {
      document.getElementById("dr").style.display = "block";
    }
  }

  function checkWin(playerMoves) {
    return conditions.some(condition =>
      condition.every(cell => playerMoves.includes(cell))
    );
  }

  function disableBoard() {
    for (let i = 1; i <= 9; i++) {
      document.getElementById(i.toString()).style.pointerEvents = "none";
    }
  }

  function restart() {
    location.reload();
  }