import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Figma, Adobe XD</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interaction Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>UI Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile App Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Design</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>HTML, CSS, React</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>MongoDB, Node, Express</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Progressive Web Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom Website Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>API Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-Commerce Website</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blog Posts</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Long-form content</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Online guides</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Promotion</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Videos</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
