import React from "react";

const IconCard = ({ img, text }) => {
  return (
    <div className="flex items-center gap-2">
      <img src={img} alt="" />
      <p className="font-kayak text-sm text-blue-primary font-normal">{text}</p>
    </div>
  );
};

export default IconCard;
