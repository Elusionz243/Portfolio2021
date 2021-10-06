import React from 'react';
import { useHistory } from 'react-router';
import { useForm, ValidationError } from '@formspree/react';

import './contact.css';

export default function Contact() {

  let history = useHistory();

  const [state, handleSubmit] = useForm('mwkaylog')
  if (state.succeeded) {
    return <p>Thanks for contacting me!</p>
  }

  return (
    <div className='contact-bg'>
      <div className='contact-container'>
        <div className='card form-card'>
          <div className='contact-title'>
            <h2>Contact Me!</h2>
          </div>
          <div className='form-cp'>
            <form onSubmit={handleSubmit}>
              <div className='form-config'>
                <label htmlFor="email" className='label-font'>
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className='input-config'
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <label htmlFor='message'
                  className='label-font'>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className='input-config'
                  rows='5'
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className='form-btn'>
                <button type="submit"
                  disabled={state.submitting}
                  className='btn btn-success'>
                  Submit
                </button>
                <button
                  type='cancel'
                  className='btn btn-danger'
                  onClick={() => history.push('/')}>
                  Cancel
                </button>
                <button
                  type='reset'
                  className='btn btn-secondary'>
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}