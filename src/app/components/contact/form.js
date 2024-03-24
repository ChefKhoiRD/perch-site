"use client";
import React, { useState } from "react";

import "./styles/form.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSuccess, setFormSuccess] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");

  const handleInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const submitForm = (e) => {
    // We don't want the page to refresh
    e.preventDefault();

    const formURL = e.target.action;
    const data = new FormData();

    // Turn our formData state into data we can use with a form submission
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    // POST the data to the URL of the form
    fetch(formURL, {
      method: "POST",
      body: data,
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          city: "",
          country: "",
          phoneNumber: "",
          message: "",
        });

        setFormSuccess(true);
        setFormSuccessMessage(data.submission_text);
      });
  };

  return (
    <div className="form-container d-flex flex-column">
        <div className="form">
        <div className="form-title">
            <h1>Your details</h1>
        </div>
        <div className="form">
            {formSuccess ? (
            <div>{formSuccessMessage}</div>
            ) : (
            <form
                method="POST"
                action="https://www.formbackend.com/f/664decaabbf1c319"
                onSubmit={submitForm}
            >
                <div className="contact-input-label">
                <label for="first-name">First name</label>
                </div>
                <div className="contact-input">
                <input
                    type="text"
                    name="first-name"
                    onChange={handleInput}
                    value={formData.firstName}
                />
                </div>

                <div className="contact-input-label">
                <label for="last-name">Last name</label>
                </div>
                <div className="contact-input">
                <input
                    type="text"
                    name="last-name"
                    onChange={handleInput}
                    value={formData.lastName}
                />
                </div>

                <div className="contact-input-label">
                <label for="email">Email</label>
                </div>
                <div className="contact-input">
                <input
                    type="text"
                    name="email"
                    onChange={handleInput}
                    value={formData.email}
                />
                </div>

                <div className="contact-input-label">
                <label for="city">City</label>
                </div>
                <div className="contact-input">
                <input
                    type="text"
                    name="city"
                    onChange={handleInput}
                    value={formData.city}
                />
                </div>

                <div className="contact-input-label">
                <label for="country">Country</label>
                </div>
                <div className="contact-input">
                <input
                    type="text"
                    name="country"
                    onChange={handleInput}
                    value={formData.country}
                />
                </div>

                <div className="contact-input-label">
                <label for="phone-number">Phone number</label>
                </div>
                <div className="contact-input">
                <input
                    type="text"
                    name="phone-number"
                    onChange={handleInput}
                    value={formData.phoneNumber}
                />
                </div>

                <div className="contact-input-label">
                <label for="message">Message</label>
                </div>
                <div className="contact-input">
                <textarea
                    name="message"
                    onChange={handleInput}
                    value={formData.message}
                ></textarea>
                </div>

                <div className="form-buttons">
                <button type="submit">Submit</button>
                </div>
            </form>
            )}
        </div>
      </div>
    </div>
  );
}
