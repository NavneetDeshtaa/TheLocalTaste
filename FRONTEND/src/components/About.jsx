import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid" style={{"fontSize":"30px"}}>

            Welcome to [The Local Bite]!

            At [The Local Bite], we are passionate about delivering an unforgettable dining experience that tantalizes 
            your taste buds and creates lasting memories. Nestled in the heart of [City/Area], our restaurant is a culinary 
            oasis where exceptional food meets warm hospitality.

            Our Story:
            Founded in [2022], [The Local Bite] was born out of a shared love for good food and a vision to create
            a dining destination that celebrates flavors from around the world. With a commitment to culinary excellence
            and a dedication to sourcing the freshest, highest-quality ingredients, we embarked on a journey to craft a menu that 
            reflects our passion for both traditional and innovative cuisine.

    

          </p>
          <Link to={"menu"} spy={true} smooth={true} duration={500}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;