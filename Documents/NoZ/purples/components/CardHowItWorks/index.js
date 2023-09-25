import React from "react";

import "../CardHowItWorks/index.css";

import Image from "next/image";
import star2 from "public/images/HowItWorks/star2.png";
import firstcardPic from "public/images/HowItWorks/firstcardPic.svg";
import secondcardPic from "public/images/HowItWorks/secondcardPic.svg";
import thirdcardPic from "public/images/HowItWorks/thirdcardPic.svg";

export default function Card1({ number, heading, subheading }) {
  return (
    <div className="CardHIWContainer">
      <div className="stepLine">
        <div className="step">Step {number}</div>
        <div className="line"></div>
        <div className={`bigNumber bigNumber${number}`}>{number}</div>
      </div>
      <div className="head">
        <div className="headingCardHIW"> {heading} </div>
        <div className="star2">
          <Image src={star2} />
        </div>
      </div>
      <div className="subheadingHIW">{subheading}</div>
      <div className="picContainer">
        {number == 1 && <Image className="picCardHIW" src={firstcardPic} />}
        {number == 2 && <Image className="picCardHIW" src={secondcardPic} />}
        {number == 3 && <Image className="picCardHIW" src={thirdcardPic} />}
      </div>
    </div>
  );
}
