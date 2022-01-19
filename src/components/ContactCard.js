import React from 'react';
import { Link } from 'react-router-dom';
const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div>
      <div className='row'>
        <div className='col-sm-6'>
          <div className='card'>
            <div className='card-body'>
              <Link
                style={{ textDecoration: 'none' }}
                to={{
                  pathname: `contact/${id}`,
                  state: { contact: props.contact },
                }}
              >
                <h5 className='card-title'>{name}</h5>
                <p className='card-text'>{email}</p>
              </Link>
              <a
                href='#'
                className='btn btn-primary'
                onClick={() => props.deleteId(id)}
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
