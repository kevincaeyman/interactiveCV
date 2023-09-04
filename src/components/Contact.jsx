/* eslint-disable react/no-unescaped-entities */
import {useState} from "react";
import emailjs from "@emailjs/browser";
import {Element} from "react-scroll";
import "../styles/contact.css";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput = e.target.querySelector('input[name="user_email"]');
    if (!emailPattern.test(emailInput.value)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm(
        "service_4gglcpb",
        "template_6two4fz",
        e.target,
        "TzPL0g_M9DDEQR5KO"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setErrorMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Element name="contact">
      <div className="contact">
        <h1>Let's have a chat!</h1>
        <div className="contact-card">
          {isSubmitted ? (
            <p className="success-message">
              Thank you for your message, we'll be in touch soon.
            </p>
          ) : (
            <form className="form-group" onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" required />
              <label>Email</label>
              <input type="email" name="user_email" required />
              <label>Subject (optional)</label>
              <input type="text" />
              <label>Message</label>
              <textarea name="message" required />
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button type="submit"> Send </button>
            </form>
          )}
        </div>
      </div>
    </Element>
  );
};

export default Contact;
