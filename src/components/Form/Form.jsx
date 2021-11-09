import { AccountCircle, AddIcCall, LocalPhone } from "@mui/icons-material";
import { Button, TextField, Tooltip } from "@mui/material";
import { Box } from "@mui/system";

export default function Form() {
  return (
    <Box
      sx={{ "& > :not(style)": { m: 1 }, marginTop: "20px" }}
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Tooltip title="Enter name" placement="left">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            width: 214,
            maxWidth: "100%",
          }}
        >
          <AccountCircle sx={{ color: "primary.dark", mr: 1, my: 0.5 }} />
          <TextField
            id="input-Name"
            label="Name"
            variant="standard"
            type="search"
          />
        </Box>
      </Tooltip>
      <Tooltip title="Enter phone number" placement="left">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            width: 214,
            maxWidth: "100%",
          }}
        >
          <LocalPhone sx={{ color: "primary.dark", mr: 1, my: 0.5 }} />
          <TextField
            id="input-Phone"
            label="Phone"
            variant="standard"
            type="search"
          />
        </Box>
      </Tooltip>
      <Tooltip title="Add contact" placement="left">
        <Button variant="contained" type="submit" startIcon={<AddIcCall />}>
          Add contact
        </Button>
      </Tooltip>
    </Box>
  );
}
