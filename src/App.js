import { Container } from "@mui/material";
import "./App.css";
import Contacts from "./components/Contacts";
import Form from "./components/Form/Form";
import Header from "./components/Header";
import SearchContactForm from "./components/SearchContactForm";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Form />

        <SearchContactForm />

        <Contacts />
      </Container>
    </>
  );
}

export default App;
