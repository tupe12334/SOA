import { useEffect, useState } from "react";
import Row from "./Row";

// export const updateTile = (y, x, value, board) => {
//   let newBoard = board;
//   newBoard[y][x] = value;
//   console.log(newBoard);
//   return newBoard;
// };

const lineWin = (a: string, b: string, c: string) => {
  //   console.log({ a }, { b }, { c });
  if (a === b && b === c) {
    return a;
  }
  return null;
};

const Board = () => {
  const [board, setBoard] = useState<string[][]>([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [turn, setTurn] = useState("X");
  const [win, setWin] = useState("");
  useEffect(() => {
    board.forEach((row) => {
      console.log("dsaf");

      const value = lineWin(row[0], row[1], row[2]);
      if (value) {
        console.log("dsafdsa");
        setWin(value);
      }
    });
  }, [turn]);
  return (
    <div>
      {win ? <div>{win + " win"}</div> : null}
      {board.map((row, i) => (
        <Row
          index={i}
          setBoard={setBoard}
          row={row}
          board={board}
          turn={turn}
          setTurn={setTurn}
        />
      ))}
    </div>
  );
};
export default Board;
