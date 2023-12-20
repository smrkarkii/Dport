import React from "react";

export default function Contact() {
  return (
    <>
      <section id="contact-me">
        <h2>
          <b>Get In Touch</b>
        </h2>
        <div className="contact-me">
          <form
            target="_blank"
            action="https://formsubmit.co/dbac63d72b973e0ee9b49611bf083d05"
            method="POST"
          >
            <div className="login">
              <label htmlFor="fname">Full Name</label>
              <input
                name="fname"
                type="text"
                className="input inputName"
                placeholder=""
                required
              />
              <label htmlFor="sender-email">Your email</label>
              <input
                name="sender-email"
                className="input inputEmail"
                placeholder=""
                required
              />
            </div>
            <div className="msg">
              <label htmlFor="message">Your Message</label>
              <textarea
                className="area inputMessage"
                name="message"
                id=""
                cols="30"
                rows="4"
                placeholder=""
              ></textarea>
            </div>
            <div className="send-message">
              <button
                type="submit"
                className="btn btn-outline-success contactButton"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
