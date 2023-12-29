/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";
import image from "../images/image1.jpg";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My youtube link 🎉",
    description:
      "Here is my youtube link where i upload latest videos ",
    url: "https://youtube.com/@Devsaeed01?feature=shared",
  },
  {
    title: "My twitter link",
    description:
      "You have to fullow me on twitter for latest updates.",
    url: "https://x.com/saeedmurad9290?t=x2A6HLqZGSCv5YYfjI-Fzg&s=09",
  },
  {
    title: "My instagram link",
    description:
      "Follow me on instagram so we connect and share ideas.",
    url: "https://www.instagram.com/saeedmurad_?igsh=ODA1NTc5OTg5Nw==",
  },
  {
    title: "Linkedin link",
    description:
      "Lets connect on linkedin.",
    url: "https://www.linkedin.com/in/msaeed01",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img src={image} style={{ height: "90%", width: "100%", objectFit: "cover" }} />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box">
              <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
