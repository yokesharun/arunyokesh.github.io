import Atropos from "atropos/react";
import "../css/atropos.css";
import bg from "../assets/atropos-bg.svg";
import mountains from "../assets/atropos-mountains.svg";
import back from "../assets/atropos-forest-back.svg";
import mid from "../assets/atropos-forest-mid.svg";
import front from "../assets/atropos-forest-front.svg";
import name from "../assets/profile-name.png";

function Landing() {
  return (
    <>
      <div className="parallex-container">
        <Atropos className="atropos-banner" highlight={true}>
          <img className="atropos-banner-spacer" src={bg} alt="" />
          <img data-atropos-offset="-4.5" src={bg} alt="" />
          <img data-atropos-offset="-2.5" src={mountains} alt="" />
          <img data-atropos-offset="0" src={back} alt="" />
          <img data-atropos-offset="2" src={mid} alt="" />
          <img data-atropos-offset="4" src={front} alt="" />
          <img data-atropos-offset="5" src={name} alt="" />
        </Atropos>
      </div>
    </>
  );
}

export default Landing;
