import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className=" paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br /> Most <br />
              Suitable
              <br /> Property
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find a variey of property that suit you very easily <br />
            </span>
            <span className="secondaryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            {/* for uporer line menu logo ashche. import was requried */}
            <input type="text" />
            <button className="button"> Search </button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8600} end={9000} duration={14} />
                {/* ekhane 2 ta parameter dite hoi, one is kokhon theke start hobe and the other is kothai end hobe  */}
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                {" "}
                <CountUp start={1500} end={2000} duration={14} />
                <span>+</span>
              </span>

              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1} end={30} duration={14} /> <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>
        {/* rightside */}
        <div className="hero-right">
          <div className="image-container hero">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
