import NavBar from "../../components/common/navBar";
import Form from "../../components/contact/form";

import "./styles/contact.css";

export default function Contact() {
  return (
    <div className="page-content">
      <NavBar active="contact" />

      <div className="contact-container">
        <div className="contact-info-container">
          <div className="contact-header">
            <h1>Contact Us</h1>
          </div>
          <div className="contact-description">
            <h3>Have questions for us?</h3>
            <h3>Would you like a demo?</h3>
          </div>
          <div className="contact-description">
            <h3>We'd love to hear from you.</h3>
          </div>
        </div>
        <div className="form-container">
          <Form />
        </div>
      </div>
    </div>
  );
};