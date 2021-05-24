import { useState } from "react";
import { getMessage } from "../services/socket";

const ChatShow = () => {
  const [text, setText] = useState<string[]>([]);
  //@ts-ignore
  getMessage((data) => {
    text.push(data);
    console.log(text);
    setText(text);
  });
  return (
    <div>
      {text.map((data) => (
        <div>{data}</div>
      ))}
    </div>
  );
};
export default ChatShow;
