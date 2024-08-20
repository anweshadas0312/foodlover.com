import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              
              Welcome to FOODLOVER.COM, where culinary excellence meets a warm,
              inviting atmosphere. Located in the heart of West Bengal, our
              restaurant offers a unique dining experience that combines modern
              European cuisine with exceptional service. Founded in 2015 by Chef
              Ananya Sen, FOODLOVER.COM began with a passion for food and a
              commitment to creating memorable dining experiences. Over the
              years, we've celebrated numerous milestones, including being
              awarded the "Best New Restaurant". Our mission is simple: to
              delight your taste buds with innovative dishes crafted from the
              finest ingredients. We believe in sustainability and ethical
              sourcing, ensuring that every meal we serve supports our values.
              Our vision is to be a place where guests can relax, enjoy, and
              savor the best flavors.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
