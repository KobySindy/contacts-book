import React from "react";
import { useState, useEffect } from "react";
import TopBar from "./components/TopBar/TopBar";
import ContactsPage from "./components/Contacts/ContactsPage";
import { getContactsList } from "./Helpers";

function App() {
  const [contactsData, setContactsData] = useState([]);
  const [filter, setFilter] = useState({
    nameFilter: "",
    genderFilter: "All Genders",
  });

  useEffect(() => {
    getContactsList((data) => {
      setContactsData(data.results);
    });
  }, []);

  return (
    <div className='App'>
      <TopBar filter={filter} setFilter={setFilter} />
      <ContactsPage filter={filter} contactsData={contactsData} />
    </div>
  );
}

export default App;
