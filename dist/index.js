"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = exports.BoardGame = exports.Cell = void 0;
var Cell;
(function (Cell) {
    Cell["empty"] = ".";
    Cell["player1"] = "B";
    Cell["player2"] = "W";
    Cell["suggestion"] = "0";
})(Cell = exports.Cell || (exports.Cell = {}));
const opponent = (player) => player === Cell.player1 ? Cell.player2 : Cell.player1;
const initialState = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "B", "W", ".", ".", "."],
    [".", ".", ".", "W", "B", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
];
const directions = {
    RIGHT: { x: 1, y: 0 },
    LEFT: { x: -1, y: 0 },
    TOP: { x: 0, y: -1 },
    BOTTOM: { x: 0, y: 1 },
    TOPRIGHT: { x: 1, y: -1 },
    TOPLEFT: { x: -1, y: -1 },
    BOTTOMRIGHT: { x: 1, y: 1 },
    BOTTOMLEFT: { x: -1, y: 1 },
};
class BoardGame {
    constructor(state = initialState) {
        this.state = state;
    }
    display() {
        return (
        // prettier-ignore
        this.state
            .map((row) => row.join(" ").toString())
            .join(`
`)
            .toString());
    }
}
exports.BoardGame = BoardGame;
class Game {
    constructor(board, player = Cell.player1) {
        this.board = board;
        this.currentPlayer = player;
    }
    // get positions of current player
    getPositions(board = this.board.state, player = this.currentPlayer) {
        const positions = [];
        board.map((row, rowIndex) => {
            row.map((cell, cellIndex) => cell === player ? positions.push({ x: cellIndex, y: rowIndex }) : null);
        });
        return positions;
    }
    getSuggestions(board = this.board.state, player = this.currentPlayer) {
        const positions = this.getPositions(board, player);
        const suggestions = [];
        positions.forEach((position) => {
            Object.values(directions).forEach(({ x, y }) => {
                let i = 1;
                //   check if next cell is opponent
                while (board[position.y + i * y][position.x + i * x] === opponent(player)) {
                    i++;
                    //   if cell is empty, set new suggestion
                    if (board[position.y + i * y][position.x + i * x] === Cell.empty) {
                        suggestions.push({ x: position.x + i * x, y: position.y + i * y });
                    }
                }
            });
        });
        return suggestions;
    }
    play(board = this.board.state, player = this.currentPlayer) {
        const suggestions = this.getSuggestions(board, player);
        suggestions.forEach(({ x, y }) => {
            board[y][x] = Cell.suggestion;
        });
        return board;
    }
}
exports.Game = Game;
const boardGame = new BoardGame();
const game = new Game(boardGame, Cell.player1);
console.log(boardGame.display());
console.log(game.currentPlayer);
console.log("current positions : ", game.getPositions());
console.log("suggestions : ", game.getSuggestions());
game.play();
console.log(boardGame.display());
//# sourceMappingURL=index.js.map