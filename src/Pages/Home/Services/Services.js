import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://tranquil-sea-27022.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container" id="services">
      <div className="row">
        <h2 className="text-secondary mt-3">All Services</h2>
        <hr />
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
