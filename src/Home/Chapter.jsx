import React from "react";
import ChapterIcon from "../assets/images/chapter-corner.png";
import "../assets/scss/Chapter.scss";

const Chapter = () => {
  return (
    <section className="chapter-section">
      <div className="chapters">
        <div className="chapter">
          <span>Chapter1</span>
        </div>
        <div className="chapter">
          <span>Chapter2</span>
        </div>
        <div className="chapter">
          <span>Chapter3</span>
        </div>
        <div className="chapter">
          <span>Chapter4</span>
        </div>
        <div className="chapter">
          <span>Chapter5</span>
        </div>

        <div className="chapter">
          <span>Chapter6</span>
        </div>
        <div className="chapter">
          <span>Chapter7</span>
        </div>
      </div>
      <button className="order-button">
        buy your book
        <span className="triangle triangle1"></span>
        <span className="triangle triangle2"></span>
        <span className="triangle triangle3"></span>
        <span className="triangle triangle4"></span>
      </button>


    </section>
  );
};

export default Chapter;
