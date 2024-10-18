import { useState } from "react";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import "./index.css";

const App = () => {
  const [contacts, setContacts] = useState([
    { name: "John Doe", id: 1, email: "johndoe@gmail.com" },
    { name: "Jane Smith", id: 2, email: "janesmith@gmail.com" },
    { name: "Michael Johnson", id: 3, email: "michaeljohnson@gmail.com" },
    { name: "Emily Davis", id: 4, email: "emilydavis@gmail.com" },
    { name: "David Brown", id: 5, email: "davidbrown@gmail.com" },
  ]);

  const handleSubmit = (newName, newEmail) => {
    if (newName.trim() === "") {
      alert("Must specify a contact name");
      return;
    }

    const isDuplicate1 = contacts.some(
      (contact) => contact.name.toLowerCase() === newName.trim().toLowerCase()
    );
    const isDuplicate2 = contacts.some(
      (contact) => contact.email.toLowerCase() === newEmail.trim().toLowerCase()
    );

    if (isDuplicate1) {
      alert("Contact names cannot already be in the list");
      return;
    }

    if (isDuplicate2) {
      alert("Emails cannot be in the list already");
      return;
    }

    if (newEmail.trim() === "") {
      alert("Email address must be specified");
      return;
    }

    const newContact = {
      name: newName,
      id: contacts.length + 1,
      email: newEmail,
    };

    setContacts([...contacts, newContact]);
  };

  return (
    <div className="contacts-app">
      <h2>Add a New Contact</h2>
      <AddContact handleSubmit={handleSubmit} />

      <h2>Contact List</h2>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
