import React from "react";

const Citations = () => {
  return (
    <section className="max-lg:px-[18px] max-lg:py-[22px] lg:p-[26px] rounded-[15px] border border-[#E2E2EA]">
      <div className="flex flex-col gap-[22px] italic lg:gap-6">
        <h3 className="font-bold text-xl text-blue-primary lg:italic lg:text-[26px]">
          CITATIONS{" "}
        </h3>
        <p className="font-normal text-sm text-blue-primary lg:text-lg">
          <span className="uppercase">DISCLAIMER:</span> This scientific
          research is for informational purposes only. The results reported may
          not necessarily occur in all individuals. Wholesome Goods provides
          this information as a service but does not endorse it. This
          information should not be read to recommend or endorse any specific
          products.
        </p>
      </div>
    </section>
  );
};

export default Citations;
