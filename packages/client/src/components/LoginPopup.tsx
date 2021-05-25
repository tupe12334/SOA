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
import React, { useState } from "react";
import { connect } from "react-redux";
import { loginAction } from "../store/actions/authActions";
require("dotenv").config();

const LoginPopup = ({ open, setOpen, auth, loginAction }) => {
  const [selectedOption, setSelectedOption] = useState("login");
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
    onSubmit: async (values) => {
      //   console.log(values);
      loginAction(values.email, values.password);
      //   console.log(selectedOption);
      //   const data = (
      //     await axios.post(
      //       `${process.env.REACT_APP_SERVER_URL}/auth/${selectedOption}`,
      //       values
      //     )
      //   ).data;
      //   console.log(data);
      //   alert(JSON.stringify(values, null, 2));
    },
  });
  const handleClickOpen = () => {
    setOpen(true);
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
const mapDispatchToProps = (dispatch) => ({
  loginAction: () => dispatch(loginAction),
});

export default connect(mapStateToProps, { loginAction })(LoginPopup);

type ServerRes = {
  data: any;
  meta: {};
  status?: number;
};
