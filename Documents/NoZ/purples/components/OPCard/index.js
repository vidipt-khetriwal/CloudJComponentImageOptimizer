import React from "react";

import "../OPCard/index.css";

import Image from "next/image";
import OPCardImage1 from "public/images/OurPropositions/OPCardImg1.svg";
import OPCardImage2 from "public/images/OurPropositions/OPCardImg2.svg";
import OPCardImage3 from "public/images/OurPropositions/OPCardImg3.svg";
import OPCardImage4 from "public/images/OurPropositions/OPCardImg4.svg";
import OPCardImage5 from "public/images/OurPropositions/OPCardImg5.svg";

export default function OPCard({ number, heading, subheading }) {
  return (
    <div className="OPCardContainer">
      <div className="OPCardImg">
        {number == 1 && <Image src={OPCardImage1} />}
      </div>
      <div className="OPCardImg">
        {number == 2 && <Image src={OPCardImage2} />}
      </div>
      <div className="OPCardImg">
        {number == 3 && <Image src={OPCardImage3} />}
      </div>
      <div className="OPCardImg">
        {number == 4 && <Image src={OPCardImage4} />}
      </div>
      <div className="OPCardImg">
        {number == 5 && <Image src={OPCardImage5} />}
      </div>
      <div className="OPCardheading">{heading}</div>
      <div className="OPCardsubheading">{subheading}</div>
    </div>
  );
}
