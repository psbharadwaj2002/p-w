import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  GithubOutlined,
  LinkedinFilled,
  PhoneOutlined,
} from "@ant-design/icons";
import { Howl } from "howler";

import { Alert } from "antd";
import message_sent_sound from "../assests/audio/message_sent.mp3";

function Contact() {
  const form = useRef();
  const [show, setShow] = useState(false);
  const sound = useRef(null);

  useEffect(() => {
    sound.current = new Howl({
      src: [message_sent_sound],
    });
  }, []);

  const playAudio = () => {
    if (sound.current) {
      sound.current.play();
    }
  };
  const sendEmail = async (e) => {
    e.preventDefault();

    await emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          setShow(true);
          playAudio();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const closeAlert = () => {
    setShow(false);
  };

  return (
    <div id="contactFrom" className="contactFrom">
      <div className="title">
        <div></div>
        CONTACT
        <div></div>
      </div>
      <div id="form">
        <div className="lets_work">
          <div>
            <p>Let's Work</p>
          </div>
          <p>
            Hello and Welcome to my digital space! Delve into the dynamic realm
            of IT and MERN stack development. Whether you're a tech enthusiast
            or curious explorer, join me on this coding journey. Discover MERN
            projects, insights, and the art of crafting digital wonders. Got a
            question or an idea? Don't hesitate - drop me a message! Let's
            collaborate and shape something extraordinary together.
          </p>
          <div className="icons">
            <a
              href="https://github.com/psbharadwaj2002"
              rel="noreferrer noopener"
              target="_blank"
            >
              <GithubOutlined />
            </a>
            <a
              href="https://www.linkedin.com/in/srinivasa-bharadwaj-peddinti"
              rel="noreferrer noopener"
              target="_blank"
            >
              <LinkedinFilled />
            </a>
            <a
              href="tel:+918919667762"
              rel="noreferrer noopener"
              target="_blank"
            >
              <PhoneOutlined />
            </a>
          </div>
        </div>
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter Your Name Here"
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email here"
              required
            />
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Enter your message here"
              required
            />
            <div>
              <button type="submit" value="Send" className="button">
                Send
              </button>
            </div>
          </form>
          {/* <audio ref={audioPlayer} src={message_sent_sound} /> */}

          {show && (
            <Alert
              message="Message Sent Successfully"
              // description="Your message has been sent successfully!"
              type="success"
              showIcon
              closable
              onClose={closeAlert}
              style={{
                position: "absolute",
                bottom: -50,
                right: -10,
                // height: 50,
                width: 250,
                fontSize: 14,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
