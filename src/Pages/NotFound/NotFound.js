import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../images/404/404page.png";
const NotFound = () => {
  return (
    <div>
      <img style={{ width: "100%" }} src={notFound} alt="" />
      <Link to="/home">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
