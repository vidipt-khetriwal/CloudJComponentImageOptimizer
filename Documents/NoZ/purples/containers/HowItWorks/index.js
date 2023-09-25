import React from "react";

import "../HowItWorks/index.css";

import CardHowItWorks from "../../components/CardHowItWorks";

import Image from "next/image";
import Star from "public/images/HowItWorks/Star.svg";
import GreenLogo from "public/images/HowItWorks/GreenLogo.svg";

export default function HowItWorks() {
  return (
    <div className={`containerHIW`}>
      <div className="btnDiv">
        <button class="btn">
          <Image className="star" src={Star} alt="star" />
          <div className="btnText"> How it Works</div>
        </button>
      </div>
      <div className="headingHIW">
        <span className="headingNormal">The cure for your health in </span>
        <span className="headingColoured">3 simple steps</span>
        <span>
          <Image className="greenLogo" src={GreenLogo} />
        </span>
      </div>
      <div className="cardsHIW">
        <CardHowItWorks
          number="1"
          heading="Take the Quiz"
          subheading="Our expert team is dedicated to guiding you through the world of
        medicinal cannabis."
        />
        <CardHowItWorks
          number="2"
          heading="Speak to the doctor"
          subheading="Our expert team is dedicated to guiding you through the world of medicinal cannabis."
        />
        <CardHowItWorks
          number="3"
          heading="Get your prescription"
          subheading="Our expert team is dedicated to guiding you through the world of medicinal cannabis."
        />
      </div>
    </div>
  );
}
