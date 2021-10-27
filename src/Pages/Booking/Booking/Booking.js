import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

const Booking = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`https://tranquil-sea-27022.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h1>Details Of : {service.firstName}</h1>
      <h2>This is booking {serviceId}</h2>
    </div>
  );
};
export default Booking;
