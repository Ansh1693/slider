import React, { useState, useEffect, useRef } from "react";
import nat1 from "./images/nat-1.jpg";
import nat2 from "./images/nat-2.jpg";
import nat3 from "./images/nat-3.jpg";
import nat4 from "./images/nat-4.jpg";
import nat5 from "./images/nat-5.jpg";
import nat6 from "./images/nat-6.jpg";
import nat7 from "./images/nat-7.jpg";
import nat8 from "./images/nat-8.jpg";
import nat9 from "./images/nat-9.jpg";
import nat10 from "./images/nat-10.jpg";

const images = [nat1, nat2, nat3, nat4, nat5, nat6, nat7, nat8, nat9, nat10];

let count = 0;

let slideInterval;

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    //slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();

    return () => {
      //pauseSlider();
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 6000);

    const pauseSlider = () => {
      clearInterval(slideInterval);
    };

    const handleOnNextClick = () => {
      console.log(count);
      count = (count + 1) % images.length;
      setCurrentIndex(count);
      slideRef.current.classList.add("fade-anim");
    };
  };
  return (
    <div ref={slideRef} className="w-full select-none">
      <img src={images[currentIndex]} alt=""></img>
    </div>
  );
}
