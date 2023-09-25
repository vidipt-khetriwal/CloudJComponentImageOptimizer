import React from "react";

import "../OurProposition/index.css";

import Image from "next/image";
import StarGreen from "public/images/OurPropositions/StarGreen.svg";
import DesignAspectOP from "public/images/OurPropositions/DesignAspect.svg";

import OPCard from "../../components/OPCard";

export default function OurProposition() {
  return (
    <div className="OPContainer">
      <div className="designAspectOP">
        <Image src={DesignAspectOP} />
      </div>
      <div className="OPbtnDiv">
        <button class="OPbtn">
          <Image className="starGreen" src={StarGreen} alt="star" />
          <div className="OPbtnText"> Our Proposition</div>
        </button>
      </div>

      <div className="OPheading">
        <span>Take Control of Your Symptoms: Exploring the Benefits of </span>
        <span className="headingColorGreen"> Natural Remedies </span>
        <span> for </span>
      </div>

      <div className="mainContainerOP">
        <OPCard
          number="1"
          heading="Mental well-being"
          subheading="Promotes alleviating anxiety, stress, and depression symptoms."
        />
        <OPCard
          number="2"
          heading="Pain relief"
          subheading="Find solace in relief, as pain succumbs to healing"
        />
        <OPCard
          number="3"
          heading="Digestive issues"
          subheading="Nurture your gut, find harmony within, as digestive woes."
        />
        <OPCard
          number="4"
          heading="Chemotherapy management"
          subheading="In the strength of science chemotherapy's battle faced "
        />
        <OPCard
          number="5"
          heading="Sleep disorders"
          subheading="In the realm of dreamsSleep disorders yield to restful gates"
        />
      </div>
    </div>
  );
}
