import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/page-12.png";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/Landing Page.png";
import IMG4 from "../../assets/Cover.png";
import IMG5 from "../../assets/portfolio5-2.png";
import IMG6 from "../../assets/port-23.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "React Task Tracker",
    github: "https://github.com/abhiishek-10/",
    demo: "https://simple-house-mock.herokuapp.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Multipurpose React App",
    github: "https://github.com/abhiishek-10/reactMultiPurposeApp.git",
    demo: "https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 3,
    image: IMG3,
    title: "CoinBase Mobile App & Web App Design Figma",
    github:
      "https://www.figma.com/file/RPILm578MhaPKXJBdpHsSz/CoinBase-Web-%26-Mobile-App-Design?node-id=32%3A2",
    demo: "https://www.figma.com/file/RPILm578MhaPKXJBdpHsSz/CoinBase-Web-%26-Mobile-App-Design?node-id=32%3A2",
  },
  {
    id: 4,
    image: IMG4,
    title: "NIKE (Community Mock App)",
    github:
      "https://www.figma.com/file/Hg8K6JqcbUvCVLZiS2YC9E/Nike-(Community-App))?node-id=54%3A0",
    demo: "https://www.figma.com/file/Hg8K6JqcbUvCVLZiS2YC9E/Nike-(Community-App))?node-id=54%3A0",
  },
  {
    id: 5,
    image: IMG5,
    title: "NAVIAGE (HTML, CSS, Wordpress Project)",
    github: "https://github.com/abhiishek-10",
    demo: "http://webprojects.cloud/wordpress/naviage",
  },
  {
    id: 6,
    image: IMG6,
    title: "NAVKAR (An OTT Platform Project)",
    github: "https://github.com/abhiishek-10",
    demo: "http://webprojects.cloud/html/navkar/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
