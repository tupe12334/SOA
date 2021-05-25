import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Chat from "../components/Chat";
const HomePage = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Button variant="contained" color="secondary">
          <Link to="/room">לCreate room</Link>
        </Button>

        {/* <Chat /> */}
      </div>
    </div>
  );
};
export default HomePage;
