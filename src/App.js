import Navbar from "./Navbar";
import "./App.scss";
import banner from "./images/mobile-image-hero-1.jpg";
import bannerD from "./images/desktop-image-hero-1.jpg";
import imgDark from "./images/image-about-dark.jpg";
import imgLight from "./images/image-about-light.jpg";
import left from "./images/icon-angle-left.svg";
import right from "./images/icon-angle-right.svg";
function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <picture className="hero">
          <source srcset={bannerD} media="(min-width: 729px)" />
          <img src={banner} alt="" />
          <div className="slider-btn">
            <button>
              <img src={left} alt="" />
            </button>
            <button>
              <img src={right} alt="" />
            </button>
          </div>
        </picture>
        <section className="section-one">
          <h1> Discover innovative ways to decorate</h1>
          <p>
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <a href="/"> shop now </a>
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
