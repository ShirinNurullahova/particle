import React from "react";
import coverPhoto from "../assets/images/bookcover1.png";
import backPhoto from "../assets/images/backcover.png";
import "../assets/scss/Main.scss";

const Main = () => {
  return (
    <main>
      <div className="author-container">
        <div className="book-detail">
          <h1 className="book-title">THE DREAMRIDERS</h1>
          <p className="book-description">JOURNEY TO INSPIRATION</p>
          <span className="book-author">ANGEL MORELLO</span>
          <button className="order-button">
            buy your book
            <span className="triangle triangle1"></span>
            <span className="triangle triangle2"></span>
            <span className="triangle triangle3"></span>
            <span className="triangle triangle4"></span>
          </button>
        </div>
        <div className="book-images">
          <div className="img-container">
            <img src={coverPhoto} alt="coverphoto" />
          </div>
          <div className="img-container">
            {" "}
            <img src={backPhoto} alt="backphoto" />
          </div>
        </div>
      </div>
      
    </main>
    
  );
};

export default Main;
