import { useState } from "react";
import style from "./Banner.module.css";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

export function Banner() {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 300);
  };

  return (
    <div className={style.bannerContainer}>
      <img
        src={images[currentIndex]}
        alt="Banner"
        className={style.Image}
        onClick={handleClick} // Image changes when clicked
      />
    </div>
  );
}
