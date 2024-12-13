import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendForm = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact" id="contact">
      <div className="left-contact"></div>
      <div className="right-contact">
        <h1>Verizone</h1>
        <p>
          Write us a few words about your property and we will prepare a
          proposal for you.
        </p>
        <form onSubmit={sendForm}>
          <label htmlFor="name">YOUR NAME</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">EMAIL</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">MESSAGE</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
