import React, { useState } from "react";
import LoginPopup from "../components/LoginPopup";
import Body from "./Body";
import Header from "./Header";

const Page = () => {
  const [loginPopup, setLoginPopup] = useState(false);
  return (
    <>
      <Header setLoginPopup={setLoginPopup} />
      <Body />
      <LoginPopup open={loginPopup} setOpen={setLoginPopup} />
    </>
  );
};

export default Page;
