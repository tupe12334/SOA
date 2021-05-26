import { Button } from "@material-ui/core";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { gameContext, globalJwtContext } from "../App";
import OpenGame from "../components/OpenGame";
const HomePage = () => {
  const { user, setUser } = useContext(globalJwtContext);
  const { game, setGame } = useContext(gameContext);
  let history = useHistory();

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {user ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={async () => {
              console.log(JSON.parse(user.user_id).email);

              const gameId = (
                await axios.post(
                  `${process.env.REACT_APP_SERVER_URL}/game/new`,
                  { email: JSON.parse(user.user_id).email }
                )
              ).data._id;
              setGame(gameId);
              history.push(`/room/${gameId}`);
              console.log(game);
            }}
          >
            {/* <Link to="/room">Create room</Link> */}
            Create Room
          </Button>
        ) : null}

        <OpenGame />
        {JSON.stringify(user)}

        {/* <Chat /> */}
      </div>
    </div>
  );
};
export default HomePage;
