// ContactForm.js
import React from 'react';
import './ContactForm.css'; // Ensure you create this CSS file for styling

const ContactForm = () => {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the form submission, e.g., sending data to a server or an email service
    alert('Form submitted!');
  };

  return (
    <section className="contact-form-section">
      <div className="container_contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
