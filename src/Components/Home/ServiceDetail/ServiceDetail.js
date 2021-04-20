import React from "react";
import { Link } from "react-router-dom";

const ServiceDetail = ({ service }) => {
  return (
    <div className="col-md-4 col-sm-12 text-center mb-2">
      <img style={{ height: "60px" }} src={service.imageURL} alt="service" />
      <h5 className="my-4">{service.name}</h5>
      <p>
       {service.description}
      </p>
      <Link className="btn btn-primary buyBtn mt-5" to={`/service/${service._id}`}>Explore More</Link>
    </div>
  );
};

export default ServiceDetail;
