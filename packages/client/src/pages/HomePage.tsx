import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Chat from "../components/Chat";
const HomePage = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button variant="contained">
          <Link to="/room">Enter room</Link>
        </Button>

        <Chat />
      </div>
    </div>
  );
};
export default HomePage;
