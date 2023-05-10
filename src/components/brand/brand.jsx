import React from "react";
import "./Brand.css";

import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import Atlassian from "../../assets/atlassian.png";
import DropBox from "../../assets/dropbox.png";
import Shopify from "../../assets/shopify.png";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="" srcset="" />
      </div>
      <div>
        <img src={Shopify} alt="" srcset="" />
      </div>
      <div>
        <img src={slack} alt="" srcset="" />
      </div>
      <div>
        <img src={Atlassian} alt="" srcset="" />
      </div>
      <div>
        <img src={DropBox} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Brand;
