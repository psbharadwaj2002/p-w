import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div className="title">
        <div></div>
        CONTACT
        <div></div>
      </div>
      <div id="form">
        <div className="lets_work">
          <div></div>
          <p>
            Hello and Welcome to my digital space! Delve into the dynamic realm
            of IT and MERN stack development. Whether you're a tech enthusiast
            or curious explorer, join me on this coding journey. Discover MERN
            projects, insights, and the art of crafting digital wonders. Got a
            question or an idea? Don't hesitate – drop me a message! Let's
            collaborate and shape something extraordinary together.
          </p>
        </div>
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter Your Name Here"
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email here"
            />
            <label>Message</label>
            <textarea name="message" placeholder="Enter your message here" />
            <div>
              <button type="submit" value="Send" className="button">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
