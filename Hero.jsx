import React, { useEffect, useState } from "react";
import stylesHero from "./Hero.module.css";
import ComputerCanvas from "./canvas/Computers";

const Hero = () => {
  const [scale, setScale] = useState(0.75); // Default scale

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setScale(0.5); // Smaller scale for mobile screens
      } else {
        setScale(0.75); // Default scale for larger screens
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={stylesHero.heroSection}>
      <div className={stylesHero.heroContainer}>
        <div className={stylesHero.heroLeft}>
          <div className={stylesHero.info}>
            <h1 className={stylesHero.heroText}>
              Hi, I'm <span className={stylesHero.name}>Ritik</span>
            </h1>
            <p className={stylesHero.description}>
              A passionate software developer with expertise in C++, JavaScript,
              and React. I love building innovative web applications and
              exploring the latest trends in technology.
            </p>
          </div>
          <div className={stylesHero.circle}></div>
          <div className={stylesHero.gradientLine}></div>
        </div>
      </div>
      <ComputerCanvas scale={scale} />
    </section>
  );
};

export default Hero;
