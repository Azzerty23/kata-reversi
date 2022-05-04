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
    get positions() {
        const positions = [];
        this.board.state.map((row, rowIndex) => {
            row.map((cell, cellIndex) => cell === this.currentPlayer
                ? positions.push({ x: cellIndex, y: rowIndex })
                : null);
        });
        return positions;
    }
    get suggestions() {
        const positions = this.positions;
        const board = this.board.state;
        const suggestions = [];
        positions.forEach((position) => {
            // RIGHT DIRECTION
            if (board[position.y][position.x + 1] === opponent(this.currentPlayer)) {
                suggestions.push({ x: position.x + 2, y: position.y });
            }
        });
        return suggestions;
    }
    play() {
        const board = this.board.state;
        this.suggestions.forEach(({ x, y }) => {
            // RIGHT DIRECTION
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
console.log("current positions : ", game.positions);
game.play();
console.log("suggestions : ", game.suggestions);
console.log(boardGame.display());
//# sourceMappingURL=index.js.map