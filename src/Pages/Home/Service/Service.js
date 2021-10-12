import React from "react";
import "./Service.css";
const Service = (props) => {
  const { name, price, time, img, description } = props.service;
  return (
    <div className="col-lg-4 col-md-6 col-12 mt-2">
      <img src={img} className="img-fluid" alt="" />
      <h3>{name}</h3>
      <h5>{price}</h5>
      <h5>{time}</h5>
      <p className="px-3">{description}</p>
    </div>
  );
};

export default Service;
