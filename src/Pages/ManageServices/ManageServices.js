import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://tranquil-sea-27022.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://tranquil-sea-27022.herokuapp.com/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Successfully deleted");
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };
  return (
    <div>
      <h2>This is the manage services</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h3>{service.firstName}</h3>
          <button onClick={() => handleDelete(service._id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
