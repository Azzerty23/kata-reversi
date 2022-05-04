export enum Cell {
  empty = ".",
  player1 = "B",
  player2 = "W",
  suggestion = "0",
}

type Player = Cell.player1 | Cell.player2;

const opponent = (player: Player) =>
  player === Cell.player1 ? Cell.player2 : Cell.player1;

type Row = Cell[] | string[];
export type Board = Row[];

export type Position = { x: number; y: number };

const initialState: Board = [
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "B", "W", ".", ".", "."],
  [".", ".", ".", "W", "B", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "."],
];

export class BoardGame {
  state: Board;

  constructor(state = initialState) {
    this.state = state;
  }

  display(): string {
    return (
      // prettier-ignore
      this.state
        .map((row) => row.join(" ").toString())
        .join(`
`
        )
        .toString()
    );
  }
}

export class Game {
  board: BoardGame;
  currentPlayer: Player;

  constructor(board: BoardGame, player = Cell.player1 as Player) {
    this.board = board;
    this.currentPlayer = player;
  }

  // get positions of current player
  get positions(): Position[] {
    const positions: Position[] = [];
    this.board.state.map((row, rowIndex) => {
      row.map((cell, cellIndex) =>
        cell === this.currentPlayer
          ? positions.push({ x: cellIndex, y: rowIndex })
          : null
      );
    });
    return positions;
  }

  get suggestions(): Position[] {
    const positions = this.positions;
    const board = this.board.state;
    const suggestions: Position[] = [];
    positions.forEach((position) => {
      // RIGHT DIRECTION
      if (board[position.y][position.x + 1] === opponent(this.currentPlayer)) {
        suggestions.push({ x: position.x + 2, y: position.y });
      }
    });
    return suggestions;
  }

  play(): Board {
    const board = this.board.state;
    this.suggestions.forEach(({ x, y }) => {
      // RIGHT DIRECTION
      board[y][x] = Cell.suggestion;
    });
    return board;
  }
}

const boardGame = new BoardGame();
const game = new Game(boardGame, Cell.player1);
console.log(boardGame.display());
console.log(game.currentPlayer);
console.log("current positions : ", game.positions);
game.play();
console.log("suggestions : ", game.suggestions);
console.log(boardGame.display());
