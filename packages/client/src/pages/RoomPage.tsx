import { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { globalJwtContext } from "../App";
import Board from "../components/Game/Board";
import { socket } from "../services/socket";

const RoomPage = () => {
  const { user, setUser } = useContext(globalJwtContext);
  let loction = useLocation();
  let params = useParams();
  useEffect(() => {
    console.log(JSON.parse(user.user_id).email);
    // console.log(params?.gameId);
    socket.emit(
      "join_room",
      JSON.stringify({
        email: JSON.parse(user.user_id).email,
        //@ts-ignore
        room: params?.gameId,
      })
    );
    console.log("brodcat socket");

    // joinRoom(, );
  }, []);
  return (
    <div>
      <Board />
      {/* <Chat /> */}
    </div>
  );
};
export default RoomPage;
