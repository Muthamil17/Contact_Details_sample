import React from 'react';
import { withRouter } from 'react-router';
class AddContact extends React.Component {
  state = { name: '', email: '' };

  addContact = (e) => {
    e.preventDefault();
    if (this.state.name === '' && this.state.email === '') {
      alert('all fields Must');
    } else {
      this.props.addContactHandler(this.state);
      this.setState({ name: '', email: '' });
      this.props.history.push('/');
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addContact}>
          <div className='form-group form_class'>
            <input
              type='text'
              className='form-control'
              value={this.state.name}
              placeholder='Enter Name'
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div class='form-group form_class'>
            <input
              type='text'
              className='form-control'
              value={this.state.email}
              placeholder='Enter Email'
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <button type='submit' className='btn btn-primary form_button'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddContact);
