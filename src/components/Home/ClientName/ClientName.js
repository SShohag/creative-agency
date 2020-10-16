import React from "react";
import slack from "../../../images/logos/slack.png";
import uber from "../../../images/logos/uber.png";
import google from "../../../images/logos/google.png";
import netflix from "../../../images/logos/netflix.png";
import airbnb from "../../../images/logos/airbnb.png";

const ClientName = () => {
  return (
    <div class="container px-5 py-5"> 
        <div class="row"> 
            <div class="col mx-1"><img className="img-fluid w-75 h-50" src={slack} alt=""/></div> 
            <div class="col mx-1"><img className="img-fluid w-75 h-50" src={uber} alt=""/></div> 
            <div class="col mx-1"><img className="img-fluid w-75 h-50" src={google} alt=""/></div> 
            <div class="col mx-1"><img className="img-fluid w-75 h-50" src={netflix} alt=""/></div> 
            <div class="col mx-1"><img className="img-fluid w-75 h-50" src={airbnb} alt=""/></div> 
        </div> 
    </div> 
  );
};

export default ClientName;
