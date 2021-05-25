import Tile from "./Tile";

//@ts-ignore
const Row = ({ row, index, setBoard, board, turn, setTurn }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {row.map((tile: string, i: number) => (
        <Tile
          symbol={tile}
          index={i}
          set={setBoard}
          rowIndex={index}
          board={board}
          turn={turn}
          setTurn={setTurn}
        />
      ))}
    </div>
  );
};
export default Row;
