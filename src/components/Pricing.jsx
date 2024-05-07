import React from "react";

const Pricing = () => {
  return (
    <section className="max-lg:mt-20">
      <div className="flex flex-col gap-[22px] mb-16 lg:mb-24">
        <h3 className="font-bold text-[26px] text-blue-primary lg:text-[42px]">
          Check Out The Best Dog Probiotics For 2024 
        </h3>
        <p className="font-normal text-sm text-blue-primary lg:text-lg">
          When it comes to your dog's health, we leave no stone unturned.
          PupGrade products, including the Probiotic Digestive Chews, undergo
          extensive testing to ensure their efficacy. Their formula have been
          fine-tuned to provide the perfect blend and dosage of essential
          ingredients for your dog's digestive health.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-[1fr_51px_40px_40px_40px_40px] lg:grid-cols-[1fr_164px_112px_112px_112px_112px] ">
          <div></div>
          <div className="font-bold text-sm relative">
            <div
              className="relative z-10 h-5 border-x-2 border-blue-primary text-blue-primary border-t-2 rounded-t-[3px] 
            lg:rounded-t-[10px] lg:h-36"
            />

            <div className="absolute -top-10 z-20 lg:flex lg:items-center lg:flex-col">
              <img className="" src="/images/probiotic1.png" alt="probiotic" />
              <p className="max-lg:hidden text-sm font-bold text-blue-primary w-11/12 text-center">
                Pupgrade Digestive Support by PupGrade
              </p>
            </div>
          </div>
          <div className="font-bold text-sm h-5 relative">
            <div className="absolute -top-8 lg:flex lg:items-center lg:flex-col lg:gap-6">
              <img src="/images/probiotic2.png" alt="probiotic" />
              <p className="max-lg:hidden text-sm font-bold text-blue-primary w-11/12 text-center lg:text-xs">
                Probiotic Bites by Zesty Paws
              </p>
            </div>
          </div>
          <div className="font-bold text-sm h-5 relative">
            <div className="absolute -top-9 lg:flex lg:items-center lg:flex-col lg:gap-6">
              <img className="" src="/images/probiotic3.png" alt="probiotic" />
              <p className="max-lg:hidden text-sm font-bold text-blue-primary w-11/12 text-center lg:text-xs">
                Digestion & Health by Perfect Poop
              </p>
            </div>
          </div>
          <div className="font-bold text-sm h-5 relative">
            <div className="absolute -top-8 lg:flex lg:items-center lg:flex-col lg:gap-6">
              <img className="" src="/images/probiotic4.png" alt="probiotic" />
              <p className="max-lg:hidden text-sm font-bold text-blue-primary w-11/12 text-center lg:text-xs">
                Digestion & Health by Tummy Treats
              </p>
            </div>
          </div>
          <div className="font-bold text-sm h-5 relative">
            <div className="absolute -top-14 lg:flex lg:items-center lg:flex-col lg:gap-6 lg:-top-9">
              <img className="" src="/images/probiotic5.png" alt="probiotic" />
              <p className="max-lg:hidden text-sm font-bold text-blue-primary w-11/12 text-center lg:text-xs">
                Daily Probiotic for dog by Pet Natural of Vermont
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_51px_40px_40px_40px_40px] lg:grid-cols-[1fr_164px_112px_112px_112px_112px] place-items-center place-content-end *:h-[57px] *:border-b *:border-b-blue-primary/30">
          {/* 1st row */}
          <div className="w-full flex items-center text-sm font-normal text-blue-primary lg:text-lg max-lg:!pl-0 lg:pl-6 lg:border-l lg:border-t lg:bg-[#EAF3F6] lg:rounded-tl-[14px]">
            100% Natural
          </div>
          <div className="flex items-center justify-center border-x-2  border-t border-t-blue-primary/30 border-blue-primary !border-b-0 w-full">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/tick-green.svg"
                alt="green tick"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 border-t border-t-blue-primary/30  w-full lg:border-r">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/cross-red.svg"
                alt="cross red"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 border-t border-t-blue-primary/30  w-full lg:border-r">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/tick-green.svg"
                alt="green tick"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 border-t border-t-blue-primary/30  w-full lg:border-r">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/cross-red.svg"
                alt="cross red"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 border-t border-t-blue-primary/30  w-full lg:border-t-0">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12 lg:border-r-2 lg:border-t-2 lg:rounded-tr-[14px]">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/cross-red.svg"
                alt="cross red"
              />
            </div>
          </div>
          {/* 2nd row */}
          <div className="w-full flex items-center text-sm font-normal text-blue-primary lg:text-lg max-lg:!pl-0 lg:pl-6 lg:border-l lg:bg-[#EAF3F6]">
            Free From Additives
          </div>
          <div className="flex items-center justify-center border-x-2 border-blue-primary !border-b-0 w-full">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/tick-green.svg"
                alt="green tick"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full lg:border-r">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/tick-green.svg"
                alt="green tick"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full lg:border-r">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/cross-red.svg"
                alt="cross red"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full lg:border-r">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/tick-green.svg"
                alt="green tick"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12 lg:border-r-2">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/tick-green.svg"
                alt="green tick"
              />
            </div>
          </div>
          {/* 3rd row */}
          <div className="w-full flex items-center text-sm font-normal text-blue-primary lg:text-lg max-lg:!pl-0 lg:pl-6 lg:border-l lg:bg-[#EAF3F6]">
            Meat Flavored 
          </div>
          <div className="flex items-center justify-center border-x-2 border-blue-primary !border-b-0 w-full">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/tick-green.svg"
                alt="green tick"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full lg:border-r">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/tick-green.svg"
                alt="green tick"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full lg:border-r">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/tick-green.svg"
                alt="green tick"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full lg:border-r">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/cross-red.svg"
                alt="cross red"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12 lg:border-r-2">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/tick-green.svg"
                alt="green tick"
              />
            </div>
          </div>
          {/* 4th row */}
          <div className="w-full flex items-center text-sm font-normal text-blue-primary lg:text-lg max-lg:!pl-0 lg:pl-6 lg:border-l lg:bg-[#EAF3F6]">
            Rigorously Tested
          </div>
          <div className="flex items-center justify-center border-x-2 border-blue-primary !border-b-0 w-full">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/tick-green.svg"
                alt="green tick"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full lg:border-r">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/cross-red.svg"
                alt="cross red"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full lg:border-r">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/tick-green.svg"
                alt="green tick"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full lg:border-r">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/tick-green.svg"
                alt="green tick"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12 lg:border-r-2">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/cross-red.svg"
                alt="cross red"
              />
            </div>
          </div>
          {/* 5th row */}
          <div className="w-full flex items-center text-sm font-normal text-blue-primary lg:text-lg max-lg:!pl-0 lg:pl-6 lg:border-l lg:bg-[#EAF3F6]">
            Veterinarian-Formulated 
          </div>
          <div className="flex items-center justify-center border-x-2 border-blue-primary !border-b-0 w-full">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/tick-green.svg"
                alt="green tick"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full lg:border-r">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/tick-green.svg"
                alt="green tick"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full lg:border-r">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/cross-red.svg"
                alt="cross red"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full lg:border-r">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/cross-red.svg"
                alt="cross red"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12 lg:border-r-2">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/tick-green.svg"
                alt="green tick"
              />
            </div>
          </div>
          {/* 6th row */}
          <div className="w-full flex items-center text-sm font-normal text-blue-primary lg:text-lg max-lg:!pl-0 lg:pl-6 lg:border-l lg:bg-[#EAF3F6]">
            For All Ages And Sizes 
          </div>
          <div className="flex items-center justify-center border-x-2 border-blue-primary !border-b-0 w-full">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/tick-green.svg"
                alt="green tick"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full lg:border-r">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/tick-green.svg"
                alt="green tick"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full lg:border-r">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/cross-red.svg"
                alt="cross red"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full lg:border-r">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/cross-red.svg"
                alt="cross red"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12 lg:border-r-2">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/cross-red.svg"
                alt="cross red"
              />
            </div>
          </div>
          {/* 7th row */}
          <div className="w-full flex items-center text-sm font-normal text-blue-primary lg:text-lg max-lg:!pl-0 lg:pl-6 lg:border-l lg:bg-[#EAF3F6]  lg:rounded-bl-[14px]">
            Rigorously Tested
          </div>
          <div className="flex items-center justify-center border-x-2 border-blue-primary !border-b-0 w-full">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/tick-green.svg"
                alt="green tick"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full lg:border-r">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/cross-red.svg"
                alt="cross red"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full lg:border-r">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/tick-green.svg"
                alt="green tick"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full lg:border-r">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/tick-green.svg"
                alt="green tick"
              />
            </div>
          </div>
          <div className="flex items-center justify-center !border-b-0 w-full">
            <div className="border-b border-b-blue-primary/30 h-full flex items-center justify-center w-11/12 lg:border-r-2 lg:rounded-br-[14px]">
              <img
                className="min-h-[18px] min-w-[18px] max-h-[18px] max-w-[18px]"
                src="/images/cross-red.svg"
                alt="cross red"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_51px_40px_40px_40px_40px] lg:grid-cols-[1fr_164px_112px_112px_112px_112px] ">
          <div></div>
          <div className="font-bold text-sm relative">
            <div className="relative z-10 h-5 border-x-2 border-blue-primary text-blue-primary border-b-2 rounded-b-[3px] lg:rounded-b-[10px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
