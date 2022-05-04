import { type Board, Game, BoardGame } from "./index";

describe("Display board", function () {
  test("Should return a string", function () {
    const board = new BoardGame();
    expect(board.display()).toEqual(expect.any(String));
  });
});

describe("Suggestions", function () {
  let game: Game;
  let boardGame: BoardGame;
  beforeAll(() => {
    boardGame = new BoardGame();
    game = new Game(boardGame);
  });
  test("Should return an array of positions {x: number, y: number}", function () {
    expect(game.getSuggestions()).toEqual(
      expect.arrayContaining([{ x: expect.any(Number), y: expect.any(Number) }])
    );
  });

  test("Should appear after an opponent in one direction", function () {
    const initialBoard: Board = [
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", "B", "W", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
    ];
    const expectedBoard: Board = [
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", "B", "W", "0", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
    ];
    expect(game.play(initialBoard)).toEqual(expectedBoard);
  });

  test("Should appear after an opponent in multiple directions", function () {
    const initialBoard: Board = [
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", "B", "W", ".", ".", "."],
      [".", ".", ".", "W", "B", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
    ];
    const expectedBoard: Board = [
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", "B", "W", "0", ".", "."],
      [".", ".", "0", "W", "B", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
    ];
    expect(game.play(initialBoard)).toEqual(expectedBoard);
  });
});
