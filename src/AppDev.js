import Atropos from "atropos/react";
import "./atropos.css";
import "./AppDev.css";
import bg from "./i/atropos-bg.svg";
import mountains from "./i/atropos-mountains.svg";
import back from "./i/atropos-forest-back.svg";
import mid from "./i/atropos-forest-mid.svg";
import front from "./i/atropos-forest-front.svg";
import name from "./i/profile-name.png";
// import comingSoon from "./i/coming-soon.png";

function AppDev() {
  return (
    <>
    <div className="parallex-container">
      <Atropos
        className="atropos-banner"
        highlight={true}
      >
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

export default AppDev;
