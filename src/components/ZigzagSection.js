// src/components/ZigzagSection.js
import React from "react";
import "./globals.css";

const ZigzagSection = ({ title, text, imgSrc, imgAlt, reverse = false }) => {
  return (
    <div className={`zigzag ${reverse ? "reverse" : ""}`}>
      <div className="text-col">
        <h2 className="section-title">{title}</h2>
        <p className="section-text">{text}</p>
      </div>
      <div className="image-col">
        <img src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
};

export default ZigzagSection;
