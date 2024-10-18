import { useState } from "react";

const ContactList = ({ contacts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
      />
      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.length === 0 ? (
            <tr className="green-row">
              <td colSpan={2}>No Contact Found</td>
            </tr>
          ) : (
            filteredContacts.map((contact) => (
              <tr
                key={contact.id}
                className={contact.id % 2 === 1 ? "green-row" : "green-row-dark"}
              >
                <td>{contact.name}</td>
                <td>{contact.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default ContactList;
