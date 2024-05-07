import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const TopProbiotics1 = () => {
  const percentage = 90;

  return (
    <div className="flex flex-col gap-2.5 lg:gap-8">
      <div className="flex flex-col gap-2.5 lg:flex-row-reverse lg:gap-[22px]">
        <div className="flex gap-2.5 lg:max-w-[271px] lg:w-full lg:flex-col">
          <div className="bg-white stroke-stroke-primary rounded-lg py-4 w-full lg:h-full flex items-center justify-center flex-col">
            <h3 className="text-[76px] font-bold leading-none">A+</h3>
            <p className="text-base font-normal">Overall Grade</p>
          </div>
          <div className="bg-white stroke-stroke-primary rounded-lg py-4 w-full lg:h-full flex items-center justify-center flex-col gap-3">
            <div className="size-16">
              <CircularProgressbarWithChildren
                background
                styles={buildStyles({
                  backgroundColor: "rgba(47,47,129,.2)",
                  textColor: "#fff",
                  pathColor: "#2e2f81",
                  trailColor: "transparent",
                })}
                strokeWidth="4"
                value={percentage}
              >
                <div className="text-blue-primary font-bold text-[10px] text-center">
                  <p className="">417 Votes</p>
                  <p>9.7 / 10</p>
                </div>
              </CircularProgressbarWithChildren>
            </div>
            <p className="font-normal text-base text-blue-primary">
              Total Ranking
            </p>
          </div>
        </div>
        <div className="bg-white stroke-stroke-primary rounded-lg py-4 px-[18px] w-full flex items-center justify-center flex-col gap-3">
          <LineProgress
            percentage={98}
            average="9.9"
            title={"INGREDIENT SAFETY"}
          />
          <LineProgress
            percentage={93}
            average="9.8"
            title={"PROJECT EFFECTIVENESS"}
          />
          <LineProgress percentage={88} average="9.7" title={"VALUE"} />
          <LineProgress percentage={83} average="9.7" title={"RETURN POLICY"} />
          <LineProgress
            percentage={78}
            average="9.6"
            title={"CUSTOMER SATISFACTION"}
          />
        </div>
      </div>
      <div className=" w-full lg:flex *:w-full">
        {/* pros */}
        <div className="flex flex-col gap-4 bg-white stroke-stroke-primary max-lg:rounded-t-[10px] p-[18px] lg:p-8 lg:rounded-l-[10px]">
          <h3 className="font-bold text-xl text-blue-primary">PROS</h3>
          <div className="flex flex-col gap-3.5">
            <ProsConsCard
              img="/images/tick-green.svg"
              title="Junk-free and 100% natural formula"
            />
            <ProsConsCard
              img="/images/tick-green.svg"
              title="Delicious meat-flavored bite-sized chews"
            />
            <ProsConsCard
              img="/images/tick-green.svg"
              title="Veterinarian-developed and rigorously tested"
            />
            <ProsConsCard
              img="/images/tick-green.svg"
              title="Contains Prebiotics, Probiotics, and powerful ingredients"
            />
            <ProsConsCard
              img="/images/tick-green.svg"
              title="Available as one-time payments, bundles, or subscription plans"
            />
            <ProsConsCard
              img="/images/tick-green.svg"
              title="90-day money-back guarantee & free shipping over $50"
            />
          </div>
        </div>
        {/* cons */}
        <div
          className="flex flex-col gap-4 max-lg:rounded-b-[10px] lg:rounded-r-[10px] p-[18px] lg:p-8 border max-lg:border-t-0 lg:border-l-0
        border-stroke-primary"
        >
          <h3 className="font-bold text-xl text-blue-primary">CONS</h3>
          <div className="flex flex-col gap-3.5">
            <ProsConsCard
              img="/images/cross-red.svg"
              title="Limited to online orders "
            />
          </div>
        </div>
      </div>
      {/* bottom line */}
      <div className="p-2.5 flex flex-col gap-[18px] lg:flex-row lg:gap-7">
        <div className="flex flex-col gap-[18px]">
          <h3 className="font-bold text-2xl text-blue-primary lg:text-[26px]">
            The Bottom Line
          </h3>
          <p className="text-blue-primary text-sm font-normal lg:text-lg">
            Our top choice is the PupGrade Probiotic & Digestive Chew, a
            veterinarian-formulated product that combines quality ingredients
            with an affordable price point. This product offers outstanding
            value with its compact packaging, enticing dog-friendly flavor, and
            a comprehensive list of natural, safe components. These
            nutrient-rich chews are designed to support a healthy digestive
            system and fortify the immune system. They feature a diverse range
            of probiotic enzymes and prebiotics specifically crafted to promote
            gut health. Additionally, blueberry prebiotic powder, pumpkin
            powder, and mineral oil have been included to enhance digestive
            wellness and boost the immune system. Furthermore, the company's
            robust return policy includes a 90-day, risk-free, money-back
            guarantee, highlighting their confidence in the product's
            effectiveness and quality.
          </p>
          <p className="bg-white px-3.5 py-5 rounded-xl font-normal text-sm italic text-blue-primary lg:text-lg">
            *Results are based on the Smarter Reviews Ranking System and do not
            necessarily reflect typical results from the use of these products.
            Please visit product websites for more information.
          </p>
          <button className="flex items-center gap-2 bg-[#2DC650] rounded-full px-5 py-[18px] font-bold text-white text-lg lg:text-2xl justify-center">
            Learn about out Top Pick
            <img src="/images/right-hand.png" alt="right-hand" />
          </button>
        </div>
        {/* result */}
        <div className="relative flex items-center justify-center">
          <img
            className="max-lg:h-[320px] max-lg:object-cover max-lg:object-top rounded-[15px] lg:max-w-[383px] lg:min-w-[383px]"
            src="/images/probiotic-video.png"
            alt="probiotic-video"
          />
          <img
            className="absolute"
            src="/images/play-button.png"
            alt="play-button"
          />
        </div>
      </div>
    </div>
  );
};

export default TopProbiotics1;

function LineProgress({ title, percentage = 98, average = "9.9" }) {
  return (
    <div className="w-full felx flex-col gap-2.5 pb-2.5 border-b border-blue-primary/20 last-of-type:border-none">
      <div className="flex items-center gap-2.5">
        <p className="font-normal text-sm uppercase text-blue-primary">
          {title}
        </p>
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 13.9971C10.9375 13.9971 13.75 11.1846 13.75 7.74707C13.75 4.30957 10.9375 1.49707 7.5 1.49707C4.0625 1.49707 1.25 4.30957 1.25 7.74707C1.25 11.1846 4.0625 13.9971 7.5 13.9971Z"
            stroke="#2F2F81"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 5.24707V8.37207"
            stroke="#2F2F81"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.49609 10.2471H7.50171"
            stroke="#2F2F81"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-full bg-[#EAF3F6] border-[.2px] border-blue-primary h-[18px] rounded-full">
          <div
            className="h-full bg-blue-primary rounded-full flex items-center justify-end px-5"
            style={{ width: `${percentage}%` }}
          >
            <span className="text-white text-[10px] font-bold leading-none">
              {average} AVG.
            </span>
          </div>
        </div>
        <p className="font-normal text-sm text-blue-primary">{average}/10</p>
      </div>
    </div>
  );
}

function ProsConsCard({ img, title }) {
  return (
    <div className="flex items-center gap-2.5">
      <img className="w-[15px] h-2.5" src={img} alt="tick" />
      <p className="text-blue-primary text-sm font-normal">{title}</p>
    </div>
  );
}
