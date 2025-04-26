import React from "react";
import { services } from "../constants";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.main_container}>
      <p className={styles.intro}>Introduction</p>
      <h3 className={styles.heading}>Overview</h3>
      <p className={styles.description}>
        Hi, I'm Ritik, a software developer and data science enthusiast from
        Azamgarh, Uttar Pradesh. I'm pursuing my graduation from Lovely
        Professional University. Skilled in C++, JavaScript, React, Python, R,
        Power BI, Tableau, and predictive analysis, I love building web
        applications and leveraging data insights to solve problems.
      </p>
      <div className={styles.container}>
        {services.map((service, index) => (
          <div className={styles.card} key={index}>
            <img
              src={service.icon}
              className={styles.image}
              alt={service.title}
            />
            <p className={styles.card_heading}>{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
