import React from "react";

const BenifitsCard = ({ title, img, alt, benefits = [] }) => {
  return (
    <div className="flex flex-col items-center gap-4 lg:gap-6 lg:flex-row">
      <img className="size-14 lg:size-20" src={img} alt={alt} />
      <div>
        <h4 className="max-lg:max-w-[130px] w-full font-bold text-[15px] lg:text-[25px] text-blue-primary max-lg:text-center">
          {title}
        </h4>
        <div className="max-lg:hidden flex items-center gap-[22px]">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <img src="/images/tick.svg" alt="tick" />
              <p className="font-normal text-lg text-blue-primary">
                {benefit.title}
              </p>{" "}
              {/* Accessing title property */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenifitsCard;
