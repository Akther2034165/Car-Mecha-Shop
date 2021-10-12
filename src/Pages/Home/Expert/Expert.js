import React from "react";

const Expert = (props) => {
  const { name, img, expertise } = props.expert;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5 className="text-danger">{expertise}</h5>
    </div>
  );
};

export default Expert;
