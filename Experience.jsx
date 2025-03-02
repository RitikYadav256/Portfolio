import React from "react";
import { experiences } from "../constants";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section className={styles.main_container}>
      <p className={styles.intro}>Experience</p>
      <h3 className={styles.heading}>Projects</h3>
      <div className={styles.experience_container}>
        {experiences.map((experience, index) => (
          <div className={styles.experience_card} key={index}>
            <div className={styles.company_info}>
              <div
                className={styles.icon_wrapper}
                style={{ background: experience.iconBg }}
              >
                <img
                  src={experience.icon}
                  className={styles.icon}
                  alt={experience.company_name}
                />
              </div>
              <div>
                <h4 className={styles.title}>{experience.title}</h4>
                <p className={styles.company}>{experience.company_name}</p>
                <p className={styles.date}>{experience.date}</p>
              </div>
            </div>
            <ul className={styles.points}>
              {experience.points.map((point, idx) => (
                <li key={idx} className={styles.point}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
