import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Chat from "../components/Chat";
const HomePage = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button variant="contained">Enter room</Button>
        <Button variant="contained">
          <Link to="/login">Login</Link>
        </Button>
        <Chat />
      </div>
    </div>
  );
};
export default HomePage;
