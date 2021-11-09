import { AccountBox, Delete } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import { Transition } from "react-transition-group";

import styles from "./Contact.module.css";

export default function Contacts({ contacts, onDeleteContact }) {
  return (
    <>
      <List sx={{ bgcolor: "background.paper" }} className={styles.list}>
        {contacts.map(({ id, name, number }) => (
          <ListItem
            sx={{
              borderColor: "primary.main",
              border: 1,
              borderRadius: 2,
            }}
            className={styles.item}
            key={id}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "primary.dark" }}>
                <AccountBox />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} secondary={number} />
            <IconButton
              type="button"
              edge="end"
              aria-label="delete"
              sx={{ marginLeft: "40px" }}
              onClick={() => onDeleteContact(id)}
            >
              <Delete sx={{ color: "error.main" }} />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
