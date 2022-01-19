import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const Contacts = (props) => {
  const deleteId = (id) => {
    props.deleteHandler(id);
  };
  const renderContacts = props.contacts.map((contact) => {
    return <ContactCard contact={contact} deleteId={deleteId} />;
  });
  return (
    <div className='row'>
      <div className='col-lg-6'>
        <h1>Contact List</h1>
      </div>
      <div className='col-lg-6'>
        <Link to='/add'>
            <button type='button' className='btn btn-success'>
              Add Button
            </button>
        </Link>
      </div>
      <div>{renderContacts}</div>
    </div>
  );
};

export default Contacts;
