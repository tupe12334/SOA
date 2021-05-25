import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { connect } from "react-redux";

const Header = ({ setLoginPopup, auth }) => {
  return (
    <AppBar position="static" style={{ flexGrow: 1 }}>
      <Toolbar>
        {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Tic Tac Toe Game!
        </Typography>
        {auth.isLogin ? (
          <Button color="inherit" onClick={() => {}}>
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
