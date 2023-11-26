const checkWinner = (cells) => {
    let winner = null;

    // Check rows
    for (let i = 0; i < 9; i += 3) {
        if (cells[i] !== null && cells[i] === cells[i + 1] && cells[i] === cells[i + 2]) {
            winner = cells[i];
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if (cells[i] !== null && cells[i] === cells[i + 3] && cells[i] === cells[i + 6]) {
            winner = cells[i];
        }
    }

    // Check diagonals
    if (cells[0] !== null && cells[0] === cells[4] && cells[0] === cells[8]) {
        winner = cells[0];
    }

    if (cells[2] !== null && cells[2] === cells[4] && cells[2] === cells[6]) {
        winner = cells[2];
    }

    // Check draw
    if (!cells.includes(null) && winner === null) {
        return "draw";
    }

    return winner;

}
export default checkWinner();