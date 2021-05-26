import {
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const OpenGame = () => {
  const [activeGames, setActiveGames] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  let history = useHistory();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/game/open`)
      .then((res) => res.data)
      .then((data: { _id: string }[]) => {
        const ids = [];
        data.forEach((game) => {
          ids.push(game?._id);
        });
        console.log(ids);
        // console.log(data);

        setActiveGames(ids);
      });
  }, []);
  const handleClose = () => {
    setOpen(false);
    // onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    setSelectedValue(value);
    history.push(`room/${value}`);
    // onClose(value);
  };
  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Games
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle id="simple-dialog-title">Select game to join</DialogTitle>
        <List>
          {activeGames.map((game) => (
            <ListItem
              button
              onClick={() => handleListItemClick(game)}
              key={game}
            >
              <ListItemText primary={game} />
            </ListItem>
          ))}
        </List>
      </Dialog>
    </div>
  );
};

export default OpenGame;
