import { AccountBox, Delete } from "@mui/icons-material";
import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import styles from "./Contact.module.css";

export default function Contacts() {
  return (
    <List sx={{ bgcolor: "background.paper" }} className={styles.list}>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "primary.dark" }}>
            <AccountBox />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Nameggggggggg kjkjkjkjkjkjkjk"
          secondary="Numberhhhhhhhhhhhhhhhhh"
        />
        <IconButton edge="end" aria-label="delete" sx={{ marginLeft: "40px" }}>
          <Delete sx={{ color: "error.main" }} />
        </IconButton>
      </ListItem>
    </List>
  );
}
