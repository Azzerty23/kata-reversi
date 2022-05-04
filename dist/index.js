"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardGame = exports.Cell = void 0;
var Cell;
(function (Cell) {
    Cell["empty"] = ".";
    Cell["player1"] = "B";
    Cell["player2"] = "W";
    Cell["suggestion"] = "0";
})(Cell = exports.Cell || (exports.Cell = {}));
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
const boardGame = new BoardGame();
console.log(boardGame.display());
//# sourceMappingURL=index.js.map