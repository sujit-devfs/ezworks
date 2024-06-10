import React, { useState } from "react";
import "./contactform.css";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Email is required.");
      return;
    }

    try {
      const response = await fetch("http://34.225.132.160:8002/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.status === 422) {
        setMessage(result.detail);
      } else if (response.status === 200) {
        setMessage("Form Submitted");
        setEmail("");
        setTimeout(() => {
            setMessage("");
          }, 5000);
      } else {
        setMessage("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      setMessage("Failed to submit form. Please try again later.");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email Address"
        className="email-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="contact-button">
        Contact Me
      </button>
      {message && <p className="message">{message}</p>}
    </form>
  );
};

export default ContactForm;
