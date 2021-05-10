import { Button, Paper, TextField, Typography } from "@material-ui/core";
import ChatInputField from "./ChatInputField";
import ChatShow from "./ChatShow";

const Chat = () => {
  return (
    <div>
      <Paper>
        <Typography>Title</Typography>
        <ChatShow />
        <ChatInputField />
      </Paper>
    </div>
  );
};
export default Chat;
