import React, { useState, FormEvent } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  // Initialize state with empty values
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  // Add state for showing thank you message
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  // Create the mailto link with form data
  const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
  const body = encodeURIComponent(
    `Name: ${formData.name}\n` +
    `Email: ${formData.email}\n\n` +
    `Message:\n${formData.message}`
  );
  
  // Your email address
  const email = 'hannahbry05@gmail.com';
  
  // Construct the mailto URL
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
  
  // Open the user's email client
  window.location.href = mailtoLink;

  // Show thank you message and reset form
  setIsSubmitted(true);
  setFormData({ name: '', email: '', message: '' });
  
  // Hide thank you message after 3 seconds
  setTimeout(() => {
    setIsSubmitted(false);
  }, 3000);
  };
  return (
    <div>
      <div className="contact-container">
      <h1>Contact Me</h1>

      <div className="contact-info">
          <p>You can find me here:</p>
          <div className="contact-icons">
            <a href="mailto:hannahbry05@gmail.com" title="Email">
              <FaEnvelope className="contact-icon" />
            </a>
            <a href="https://github.com/hanhasbeenbanned" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub className="contact-icon" />
            </a>
            <a href="https://linkedin.com/in/hannah-bryant-18a77024b" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin className="contact-icon" />
            </a>
          </div>
        </div>

      <h2>Send a Message</h2>

      {/* Conditionally render form or thank you message */}
      {isSubmitted ? (
          <div className="thank-you-message">
            <p>Thank you for your submission! I'll get back to you soon.</p>
          </div>
        ) : (
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
        )}
    </div>
    </div>
  );
};

export default Contact;