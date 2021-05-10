import { TextField, Button } from "@material-ui/core";
import { useState } from "react";

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
      <Button variant="contained">Send</Button>
    </div>
  );
};
export default ChatInputField;
