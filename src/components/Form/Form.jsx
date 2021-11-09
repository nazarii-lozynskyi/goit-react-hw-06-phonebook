import { useState } from "react";

import { AccountCircle, AddIcCall, LocalPhone } from "@mui/icons-material";
import { Button, TextField, Tooltip } from "@mui/material";
import { Box } from "@mui/system";

export default function Form({ onSubmit }) {
  const [state, setState] = useState({ name: "", number: "" });

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(state);

    reset();
  };

  const reset = () => {
    setState({ name: "", number: "" });
  };

  return (
    <Box sx={{ marginTop: "20px" }} component="form" onSubmit={handleSubmit}>
      <Tooltip title="Enter name" placement="left">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            width: 214,
            maxWidth: "100%",
            marginBottom: "15px",
          }}
        >
          <AccountCircle sx={{ color: "primary.dark", mr: 1, my: 0.5 }} />
          <TextField
            id="input-Name"
            label="Name"
            variant="standard"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={state.name}
            onChange={handleChange}
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
            marginBottom: "15px",
          }}
        >
          <LocalPhone sx={{ color: "primary.dark", mr: 1, my: 0.5 }} />
          <TextField
            id="input-Phone"
            label="Phone"
            variant="standard"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={state.number}
            onChange={handleChange}
          />
        </Box>
      </Tooltip>
      <Tooltip title="Add contact" placement="left">
        <Button
          variant="contained"
          type="submit"
          startIcon={<AddIcCall />}
          sx={{
            marginBottom: "0px",
          }}
        >
          Add contact
        </Button>
      </Tooltip>
    </Box>
  );
}
