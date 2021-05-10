import { useState } from "react";
import { getMessage } from "../services/socket";

const ChatShow = () => {
  const [text, setText] = useState([]);
  getMessage((data: any) => {
    setText(text.push(data))
  });
  return <div>{text}</div>;
};
export default ChatShow;
