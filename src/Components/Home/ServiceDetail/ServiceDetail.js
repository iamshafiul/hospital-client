import React from "react";

const ServiceDetail = ({ service }) => {
  return (
    <div className="col-md-4 col-sm-12 text-center mb-2">
      <img style={{ height: "60px" }} src={service.imageURL} alt="service" />
      <h5 className="my-4">{service.name}</h5>
      <p>
       {service.description}
      </p>
      <button className="btn btn-primary mt-5">Explore More</button>
    </div>
  );
};

export default ServiceDetail;
