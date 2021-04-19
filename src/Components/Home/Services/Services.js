import React, { useEffect, useState } from "react";
import "./Services.css";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import { set } from "react-hook-form";

const Services = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
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
          {services.map((service) => (
            <ServiceDetail service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
