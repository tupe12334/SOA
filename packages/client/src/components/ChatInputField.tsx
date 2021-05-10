import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { sendMessage } from "../services/socket";

const ChatInputField = () => {
  const [textInput, setTextInput] = useState("");
  return (
    <div>
      <TextField
        value={textInput}
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          sendMessage(textInput);
        }}
      >
        Send
      </Button>
    </div>
  );
};
export default ChatInputField;
