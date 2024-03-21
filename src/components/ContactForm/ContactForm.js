import React from 'react';
import './ContactForm.css'; // Make sure this CSS file is updated with new class names

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
