import { useState } from "react";

export const Accordion = ({ accordionsData, headerStyle, isBlue = true }) => {
  const [isOpen, setIsOpen] = useState(0);

  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  return (
    <div className="flex flex-col gap-2.5">
      {/* title part  */}
      {accordionsData.map((data, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          <div
            className={`rounded-full ${
              isOpen === idx
                ? isBlue
                  ? "bg-blue-primary"
                  : "bg-orange-primary"
                : `border ${
                    isBlue ? "border-blue-primary" : "border-orange-primary"
                  }`
            }`}
          >
            <div
              onClick={() => handleToggle(idx)}
              className={`py-4 px-6 flex items-center gap-4`}
            >
              <div className="flex-1">
                <p
                  className={`font-medium text-xs lg:text-lg ${
                    isOpen === idx
                      ? "text-white "
                      : isBlue
                      ? "text-blue-primary"
                      : "text-orange-primary"
                  }`}
                >
                  {data?.title}
                </p>
              </div>
              <div
                className={`duration-300 ease-in-out p-2 rounded-full ${
                  isOpen === idx
                    ? "rotate-90 bg-white "
                    : `-rotate-90 ${
                        isBlue ? "bg-blue-primary" : "bg-orange-primary"
                      }`
                }
                }`}
              >
                <svg
                  width={25}
                  className={`rotate-180 ${
                    isOpen === idx
                      ? isBlue
                        ? "stroke-blue-primary"
                        : "stroke-orange-primary"
                      : "stroke-white"
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
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen === idx
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className={`md:p-6 text-text-open `}>
                {data?.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
