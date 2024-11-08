import { winnerCombos } from "./constants";

export const checkWinnerFrom = (boardToCheck) => {
  for (const combo of winnerCombos) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
};

export const checkEndGame = (boardToCheck) => {
  return boardToCheck.every((square) => square != null);
};
