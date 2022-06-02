import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./App.scss";
import banner1 from "./images/mobile-image-hero-1.jpg";
import banner2 from "./images/mobile-image-hero-2.jpg";
import banner3 from "./images/mobile-image-hero-3.jpg";
import bannerDesktop from "./images/desktop-image-hero-1.jpg";
import bannerDesktop2 from "./images/desktop-image-hero-2.jpg";
import bannerDesktop3 from "./images/desktop-image-hero-3.jpg";
import imgDark from "./images/image-about-dark.jpg";
import imgLight from "./images/image-about-light.jpg";
import left from "./images/icon-angle-left.svg";
import right from "./images/icon-angle-right.svg";
import arrow from "./images/icon-arrow.svg";
const detailsArray = [
  {
    mobileImg: banner1,
    desktopImg: bannerDesktop,
    heading: "Discover innovative ways to decorate",
    info: ` We provide unmatched quality, comfort, and style for property owners
  across the country. Our experts combine form and function in
  bringing your vision to life. Create a room in your own style with
  our collection and make your property a reflection of you and what
  you love.`,
  },
  {
    mobileImg: banner2,
    desktopImg: bannerDesktop2,
    heading: "We are available all across the globe",
    info: `
  With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.
`,
  },
  {
    mobileImg: banner3,
    desktopImg: bannerDesktop3,
    heading: " Manufactured with the best materials",
    info: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`,
  },
];
function App() {
  const [detail, setDetail] = useState(0);
  const handlePrevSlide = () => {
    setDetail((prev) => (prev > 0 ? prev - 1 : detailsArray.length - 1));
  };
  const handleNextSlide = () => {
    setDetail((prev) => (prev < detailsArray.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") handleNextSlide();
      if (e.key === "ArrowLeft") handlePrevSlide();
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="main">
        <picture className="hero">
          <source
            srcSet={detailsArray[detail].desktopImg}
            media="(min-width: 729px)"
          />
          <img src={detailsArray[detail].mobileImg} alt="" />
          <div className="slider-btn">
            <button onClick={handlePrevSlide}>
              <img src={left} alt="" />
            </button>
            <button onClick={handleNextSlide}>
              <img src={right} alt="" />
            </button>
          </div>
        </picture>
        <section className="section-one">
          <h1> {detailsArray[detail].heading}</h1>
          <p>{detailsArray[detail].info}</p>
          <a href="/">
            {" "}
            shop now <img src={arrow} alt="" />{" "}
          </a>
        </section>
        <img src={imgDark} className="img-about-one" alt="" />
        <section className="section-two">
          <h2>about our furniture</h2>
          <p>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </section>
        <img src={imgLight} className="img-about-two" alt="" />
      </main>
    </>
  );
}

export default App;
