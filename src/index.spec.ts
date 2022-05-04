import { BoardGame } from "./index";

describe("Display board", function () {
  test("Should return a string", function () {
    const board = new BoardGame();
    expect(board.display()).toEqual(expect.any(String));
  });
});
