import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { connect } from "react-redux";
import { globalJwtContext } from "../App";
import { loginAction } from "../store/actions/authActions";
require("dotenv").config();
// type props = {
//   open: boolean;
//   setOpen: any;
//   auth;
//   loginAction;
// };
const LoginPopup = ({ open, setOpen, auth, loginAction }) => {
  const [selectedOption, setSelectedOption] = useState("login");
  const { user, setUser } = useContext(globalJwtContext);

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    onSubmit: async (values) => {
      // console.log(selectedOption);
      // console.log(values);
      console.log(user);

      const data = (
        await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/auth/${selectedOption}`,
          values
        )
      ).data;
      // console.log(data.meta.jwt);
      setUser(data.meta.jwt);
      setOpen(false);
      // alert(JSON.stringify(values, null, 2));
    },
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleSubmitAction = (values) => {
    loginAction(values.email, values.password);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Login / register</DialogTitle>
      <DialogContent style={{ flexDirection: "column" }}>
        <TextField
          id="email"
          label="Email"
          name="email"
          type="email"
          onChange={handleChange}
        />
        <br />
        <TextField
          id="password"
          name="password"
          type="password"
          label="Password"
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={(e) => {
            setSelectedOption("login");
            handleSubmit();
            handleClickOpen();
          }}
          color="primary"
        >
          Login
        </Button>
        <Button
          onClick={(e) => {
            setSelectedOption("register");
            handleSubmit();
            handleClickOpen();
          }}
          color="primary"
          autoFocus
        >
          Register
        </Button>
      </DialogActions>
    </Dialog>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
// const mapDispatchToProps = (dispatch) => ({
//   loginAction: () => dispatch(loginAction),
// });

export default connect(mapStateToProps, { loginAction })(LoginPopup);

type ServerRes = {
  data: any;
  meta: {};
  status?: number;
};
