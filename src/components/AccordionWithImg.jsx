import { useState } from "react";

export const AccordionWithImg = ({
  accordionsData,
  headerStyle,
  isBlue = true,
}) => {
  const [isOpen, setIsOpen] = useState(0);

  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  return (
    <div className="flex flex-col gap-2.5">
      {/* title part  */}
      {accordionsData.map((data, idx) => (
        <div
          key={idx}
          className={`flex flex-col relative pt-6 items-center w-full ${
            isOpen === idx && "mb-5"
          }`}
        >
          <div className="size-20 bg-paste-primary z-10 rounded-full px-2 py-3 absolute -top-5 lg:hidden">
            <img
              className="rounded-lg"
              src={`/images/review-${1 + idx}.png`}
              alt="review"
            />
          </div>
          <div
            className={`rounded-t-[5px] bg-paste-primary w-full ${
              isOpen === idx ? "" : `rounded-b-[5px]`
            }`}
          >
            <div
              onClick={() => handleToggle(idx)}
              className={`p-2.5 flex items-center gap-4 justify-between lg:p-8`}
            >
              <div className="flex items-center gap-2.5 lg:gap-[18px]">
                <img
                  className="w-[61px] h-auto"
                  src={`/images/probiotic${1 + idx}.png`}
                  alt="probiotic"
                />
                <p
                  className={`text-base font-semibold text-blue-primary lg:text-[32px] relative z-20 ${
                    isOpen === idx ? " " : ""
                  }`}
                  dangerouslySetInnerHTML={{ __html: data?.title }}
                />
              </div>
              <div className="flex items-center lg:gap-9">
                <img
                  className="rounded-lg h-[85px] w-auto max-lg:hidden"
                  src={`/images/review-${1 + idx}.png`}
                  alt="review"
                />
                <div
                  className={`duration-300 ease-in-out p-2 rounded-full ${
                    isOpen === idx
                      ? "rotate-90 bg-blue-primary "
                      : `-rotate-90 border border-blue-primary`
                  }
                  }`}
                >
                  <svg
                    width={25}
                    className={`rotate-180 ${
                      isOpen === idx ? "stroke-white" : "stroke-blue-primary"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M10 7L15 12L10 17"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`grid overflow-hidden transition-all w-full rounded-b-[5px] bg-paste-primary p-2.5 lg:px-8 duration-300 ease-in-out ${
              isOpen === idx
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className={`text-text-open`}>{data?.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
