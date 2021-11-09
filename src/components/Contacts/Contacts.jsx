import { AccountBox } from "@mui/icons-material";
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

export default function Contacts() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccountBox />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Nameggggggggggggggggggggggggggg"
          secondary="Numberhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
        />
      </ListItem>
    </List>
  );
}
