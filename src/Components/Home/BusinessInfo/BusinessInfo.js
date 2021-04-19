import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title : "opening hours",
        description : "We Are Open 7 days",
        icon : faClock,
        background : "primary"
    },
    {
      title : "visit our location",
      description : "Broklyn, NY 136, United States",
      icon : faMapMarker,
      background : "dark"
  },
  {
      title : "contact us now",
      description : "+000 123456789",
      icon : faPhone,
      background : "primary"
  },
  ];

const BusinessInfo = () => {
  
  return (
  <section className="container">
      <div className="row">
      {
          infosData.map(info => <InfoCard info={info}></InfoCard>) 
      }
      </div>
  </section>
  );
};

export default BusinessInfo;
