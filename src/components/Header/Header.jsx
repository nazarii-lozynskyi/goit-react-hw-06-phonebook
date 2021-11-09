import { ContactPhone } from "@mui/icons-material";
import { Toolbar, AppBar, Typography, Icon, Container } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          Phone book
        </Typography>
        <Icon color="inherit">
          <ContactPhone />
        </Icon>
      </Toolbar>
    </AppBar>
  );
}
