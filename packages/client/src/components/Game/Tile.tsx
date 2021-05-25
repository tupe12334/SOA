import { colors } from "@material-ui/core";
//@ts-ignore
const Tile = ({ symbol, index, set, rowIndex, board, turn, setTurn }) => {
  return (
    <div
      style={{
        background: colors.amber[100],
        margin: 5,
        padding: 20,
        borderColor: colors.brown[800],
        borderWidth: 20,
        maxHeight: 500,
        maxWidth: 500,
      }}
      onClick={() => {
        if (!board[rowIndex][index]) {
          // set(updateTile(rowIndex, index, turn, board));
          setTurn(turn === "X" ? "O" : "X");
        }
      }}
    >
      {symbol}
    </div>
  );
};
export default Tile;
