import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_2inyf4c",
      "template_cu6dz8n",
      form.current,
      "CABQt-lMpo5Sjnb3S"
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>muzamilrashid38@gmail.com</h5>
            <a
              href="mailto:muzamilrashid38@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Muhammad Muzamil Rashid</h5>
            <a
              href="https://www.linkedin.com/in/mmuzamil7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect On LinkedIn
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+923042844442</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+923042844442"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject Here"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
