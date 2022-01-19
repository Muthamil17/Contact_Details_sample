import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect } from 'react';
import ContactDetails from './components/ContactDetails';
function App() {
  const LOCAL_STORAGE = 'contacts';
  const [contacts, setContact] = useState([]);
  const addContactHandler = (contact) => {
    setContact([...contacts, { id: uuidv4(), ...contact }]);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
    if (retriveContacts) setContact(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(contacts));
  }, [contacts]);

  const deleteHandler = (id) => {
    const newContact = contacts.filter((contact) => contact.id !== id);
    setContact(newContact);
  };

  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route
            path='/'
            exact
            render={(props) => (
              <Contacts
                {...props}
                contacts={contacts}
                deleteHandler={deleteHandler}
              />
            )}
          />
          <Route
            path='/add'
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route path='/contact/:id' component={ContactDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
