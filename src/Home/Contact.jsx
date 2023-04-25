import React from "react";
import "../assets/scss/Footer.scss";
import Bird from "../assets/images/bird.png";
import Email from "../assets/images/email.png";
import Ornament from "../assets/images/textbox_ornament.png";
import Particle from "../Particle";
const Contact = () => {
  return (
    <>
    <footer className="footer">
      <h2>SIGN UP For great news</h2>
      <img className="bird-image" src={Bird} alt="birdimage" />
      <p className="description">
        Sign up for Sonica’s email updates for the latest news on the production
        of this unique novel series! Don’t worry! She only makes direct flights
        with your email to the author and back with important updates, and never
        shares your email for any other purpose... Ever!
        <br />
        <br />
        Chapter 4.5 “Culinary Creations” Is a BONUS CHAPTER that Sonica will
        return to you as a free gift when you register your email, and is only
        available here! Be sure to save it until you have finished the main
        story! It contains spoilers!
      </p>
      <div className="input">
        <img src={Ornament} className="ornament-icon" alt="" />
        <input placeholder="enter your e-mail here" type="text" />
        <i>
          <img className="email-icon" src={Email} alt="" />
        </i>
      </div>
    </footer>
  

</>
  );
};

export default Contact;
