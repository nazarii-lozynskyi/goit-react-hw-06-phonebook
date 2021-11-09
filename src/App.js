import { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Contacts from "./components/Contacts";
import Form from "./components/Form/Form";
import Header from "./components/Header";
import SearchContactForm from "./components/SearchContactForm";

import { Container } from "@mui/material";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("Contacts")) ?? []
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("Contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = (data) => {
    const contact = {
      id: uuidv4(),
      ...data,
    };

    const checkForDuplicationOfContacts = contacts.find(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (checkForDuplicationOfContacts) {
      toast.error(`${data.name} is already in contacts`);
    } else {
      setContacts((prevState) => [contact, ...prevState]);
    }
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  const changeFilter = (event) => {
    setFilter(event.currentTarget.value.toLowerCase());
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={addContacts} />

        <SearchContactForm onChange={changeFilter} value={filter} />

        <ToastContainer
          theme="colored"
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          progress={undefined}
        />

        <Contacts contacts={visibleContacts} onDeleteContact={deleteContact} />
      </Container>
    </>
  );
}

export default App;
