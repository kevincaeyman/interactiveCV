/* eslint-disable react/no-unescaped-entities */
import "../styles/contact.css"; // Import your CSS file for styling
import { useState } from "react";

function ContactCard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate sending an email (opens the user's email client)
    const emailContent = `Subject: ${formData.subject}\n\nMessage: ${formData.message}`;
    const emailTo = "kevin.caeyman@gmail.com";
    const emailSubject = `Contact Form Submission from ${formData.name}`;

    const emailLink = `mailto:${emailTo}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailContent)}`;

    window.location.href = emailLink;

    // Set the form as submitted
    setIsSubmitted(true);
  };

  return (
    <div className="contact">
      <h1>Let's have a chat!</h1>
      <div className="contact-card">
        {isSubmitted ? (
          <div className="message-popup">
            <p>Thank you for your message! We'll be in touch.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
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
              <label htmlFor="email">Your Email:</label>
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
              <label htmlFor="subject">Subject (optional):</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactCard;
