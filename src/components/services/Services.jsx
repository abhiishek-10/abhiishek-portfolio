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
              <p>Figma, XD, Sketch, Photoshop, Illustrator, Affinity</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>UI and Interaction Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Rapid and Interactive Prototyping</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile First and Responsive Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Customer Experience Consulting</p>
            </li>
          </ul>
        </article>
        {/* End of UI UX Service */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Carefully Analyzed Requirements</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Frontend ready to go for development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Stand-out, Easy-to-Navigate UI & UX Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Search Engine Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Rich and Engaging Visuals</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Maintenance and Support</p>
            </li>
          </ul>
        </article>
        {/*end of Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Proficient in creating all types of online content</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Revisions on request</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Motion Graphics on the go.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Graphic Design Services</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Video Marketing Services</p>
            </li>
          </ul>
        </article>
        {/* End of content creation */}
      </div>
    </section>
  );
};

export default Services;
