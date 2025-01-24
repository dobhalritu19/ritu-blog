import React from 'react';

const Contact = () => (
  <div className="container mt-4">
    <h1>Contact Us</h1>
    <form>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" placeholder="Your Name" />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" placeholder="Your Email" />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
);

export default Contact;
