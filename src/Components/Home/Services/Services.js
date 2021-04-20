import React, { useEffect, useState } from "react";
import "./Services.css";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import { set } from "react-hook-form";
import { Spinner } from "react-bootstrap";

const Services = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("https://quiet-caverns-85312.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <section className="services-container bg-light py-5">
      <div className="text-center mb-5">
        <h2>Our Services</h2>
      </div>
      <div className="container">
        <div className="row gx-5">
        {services.length === 0 && <Spinner animation="border" />}
          {services.map((service) => (
            <ServiceDetail id={service._id} service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
