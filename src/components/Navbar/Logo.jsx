import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img
        className="logo-img"
        src="https://miro.medium.com/max/900/0*9hcinRdaHicrNpNE.jpg"
        alt="Logo"
        width="50"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default Logo;
