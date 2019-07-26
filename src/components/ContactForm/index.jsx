import React from 'react';
import './contactForm.scss';

const formFields = [
  {
    id: 'fullName',
    type: 'text',
    placeholder: 'Full Name',
  },
  {
    id: 'email',
    type: 'email',
    placeholder: 'Email',
  },
  {
    id: 'subject',
    type: 'text',
    placeholder: 'Subject',
  },
];

const ContactForm = () => (
  <div className="contact-form">
    <form>
      {formFields.map(field => (
        <div key={field.id} className="form-group">
          <input
            type={field.type}
            name={field.id}
            id={field.id}
            placeholder={field.placeholder}
            className="form-control"
          />
        </div>
      ))}
      <div className="form-group">
        <textarea className="form-control" rows={5} placeholder="Message" />
      </div>
      <button type="submit" className="btn btn-primary">
        SEND EMAIL
      </button>
    </form>
  </div>
);

export default ContactForm;
