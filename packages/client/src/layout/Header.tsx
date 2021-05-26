import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { globalJwtContext } from "../App";

const Header = ({ setLoginPopup, auth }) => {
  const { user, setUser } = useContext(globalJwtContext);

  return (
    <AppBar position="static" style={{ flexGrow: 1 }}>
      <Toolbar>
        {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}

        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Tic Tac Toe Game!{" "}
          {user ? ` - User: ${JSON.parse(user.user_id).email}` : null}
        </Typography>
        {user ? (
          <Button
            color="inherit"
            onClick={() => {
              setUser(null);
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            color="inherit"
            onClick={() => {
              setLoginPopup(true);
            }}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Header);
