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
            // RIGHT DIRECTION
            if (board[position.y][position.x + 1] === opponent(this.currentPlayer)) {
                suggestions.push({ x: position.x + 2, y: position.y });
            }
            // LEFT DIRECTION
            if (board[position.y][position.x - 1] === opponent(this.currentPlayer)) {
                suggestions.push({ x: position.x - 2, y: position.y });
            }
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
game.play();
console.log("suggestions : ", game.getSuggestions());
console.log(boardGame.display());
//# sourceMappingURL=index.js.map