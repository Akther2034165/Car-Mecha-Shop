import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = (props) => {
  const { _id, name, price, time, img, description } = props.service;
  return (
    <div className="col-lg-4 col-md-6 col-12 mt-2 service">
      <img src={img} className="img-fluid" alt="" />
      <h3>{name}</h3>
      <h5>{price}</h5>
      <h5>{time}</h5>
      <p className="px-3">{description}</p>
      <Link to={`/booking/${_id}`}>
        <button className="btn btn-warning mb-3">Book {name}</button>
      </Link>
    </div>
  );
};

export default Service;
