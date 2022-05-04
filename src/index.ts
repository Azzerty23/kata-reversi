export enum Cell {
  empty = ".",
  player1 = "B",
  player2 = "W",
  suggestion = "0",
}

type Row = Cell[] | string[];
export type Board = Row[];

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

const boardGame = new BoardGame();
console.log(boardGame.display());
