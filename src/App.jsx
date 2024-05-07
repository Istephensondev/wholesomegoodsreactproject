import { Accordion } from "./components/Accordion";
import {useEffect } from 'react'
import { AccordionWithImg } from "./components/AccordionWithImg";
import BenifitsCard from "./components/BenifitsCard";
import Citations from "./components/Citations";
import IconCard from "./components/IconCard";
import Note from "./components/Note";
import Pricing from "./components/Pricing";
import TopProbiotics1 from "./components/TopProbiotics1";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      // here you can configure AOS settings
      duration : 2000 // values from 0 to 3000, with step 50ms
    });
  }, []);


  const accordionsData = [
    {
      title: "Natural Ingredients",
      description:
        "Your beloved canine companion deserves nothing but the best, so ensure that the supplement you provide contains clean, natural ingredients. This means avoiding any additives like artificial coloring, synthetic flavoring. or questionable chemicals used to prolong shelf life. Some helpful and natural ingredients known to support digestive health in dogs include pumpkin, blueberry, and mineral oil-keep an eye out for these components in the list below.",
    },
    {
      title: "HOW DO I FEED THIS SUPPLEMENT TO MY DOG?",
      description:
        "Your beloved canine companion deserves nothing but the best, so ensure that the supplement you provide contains clean, natural ingredients. This means avoiding any additives like artificial coloring, synthetic flavoring. or questionable chemicals used to prolong shelf life. Some helpful and natural ingredients known to support digestive health in dogs include pumpkin, blueberry, and mineral oil-keep an eye out for these components in the list below.",
    },
    {
      title: "IS THIS SUPPLEMENT FREE OF GRAIN?",
      description:
        "Your beloved canine companion deserves nothing but the best, so ensure that the supplement you provide contains clean, natural ingredients. This means avoiding any additives like artificial coloring, synthetic flavoring. or questionable chemicals used to prolong shelf life. Some helpful and natural ingredients known to support digestive health in dogs include pumpkin, blueberry, and mineral oil-keep an eye out for these components in the list below.",
    },
    {
      title: "HOW MANY CHEWS ARE IN THIS CONTAINER?",
      description:
        "Your beloved canine companion deserves nothing but the best, so ensure that the supplement you provide contains clean, natural ingredients. This means avoiding any additives like artificial coloring, synthetic flavoring. or questionable chemicals used to prolong shelf life. Some helpful and natural ingredients known to support digestive health in dogs include pumpkin, blueberry, and mineral oil-keep an eye out for these components in the list below.",
    },
  ];
  const accordionsData2 = [
    {
      title: "Formulas Without Probiotics or Prebiotics",
      description:
        "We cannot stress this enough: probiotics are essential for your dog's well-being! While a digestive support supplement without probiotics may offer some limited assistance, the combination of prebiotics and probiotics works together to thoroughly cleanse their system from within, preventing episodes of diarrhea, constipation, or other gut-related issues.",
    },
    {
      title: "Additives",
      description:
        "Your beloved canine companion deserves nothing but the best, so ensure that the supplement you provide contains clean, natural ingredients. This means avoiding any additives like artificial coloring, synthetic flavoring. or questionable chemicals used to prolong shelf life. Some helpful and natural ingredients known to support digestive health in dogs include pumpkin, blueberry, and mineral oil-keep an eye out for these components in the list below.",
    },
  ];
  const accordionsData3 = [
    {
      title: "Digestive Support by <span class='underline'>PupGrade</span>",
      description: <TopProbiotics1 />,
    },
    {
      title: "Probiotic Bites by <span class='underline'>Zesty Paws</span>",
      description: <TopProbiotics1 />,
    },
    {
      title:
        "Digestion & Health Supplement for dogs by <span class='underline'>Perfect Poop</span>",
      description: <TopProbiotics1 />,
    },
    {
      title:
        "Digestion & Health by <span class='underline'>Tummy Treats</span>",
      description: <TopProbiotics1 />,
    },
    {
      title:
        "Daily Probiotic for dog by <span class='underline'>Pet Natural of Vermont</span>",
      description: <TopProbiotics1 />,
    },
  ];

  const benefits = [
    {
      title: "Better Digestive System Functionality",
      img: "/images/digestive.svg",
      alt: "digestive",
      benifits: [
        {
          title: "Offers essential nutrition for good gut bacteria",
        },
        {
          title: "Aids in nutrient absorption from food",
        },
      ],
    },
    {
      title: "Helps Alleviate Blockages",
      img: "/images/blockages.svg",
      alt: "blockages",
      benifits: [
        {
          title: "Reduces the likelihood of constipation",
        },
        {
          title: "Normalizes bowel movements",
        },
      ],
    },
    {
      title: "Reinforces Their Immune System",
      img: "/images/immune.svg",
      alt: "immune",
      benifits: [
        {
          title: "Lowers the chances of allergies in dogs",
        },
        {
          title: "Makes it easier for them to fight off infections",
        },
      ],
    },
    {
      title: "Enhances Overall Well-being",
      img: "/images/well-being.svg",
      alt: "well-being",
      benifits: [
        {
          title: "A healthy gut keeps your pup feeling calm and less stressed",
        },
        {
          title: "Can positively influence a dog's mood and behavior",
        },
      ],
    },
  ];
  return (
    <main className="container my-10 flex flex-col gap-6">
      <section data-aos="fade-down" data-aos-delay="300" className="flex flex-col gap-[22px] lg:gap-8">
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center gap-5">
            <IconCard
              img={"/images/calendar.svg"}
              text={"Posted 12th Dec 2023"}
            />
            <IconCard img={"/images/clock.svg"} text={"5 minute read"} />
          </div>
          <h2 className="text-2xl lg:text-[40px] font-bold text-blue-primary">
            Your Guide to the Best Dog Probiotics in 2024: What to Buy
          </h2>
          <p className="font-normal text-sm lg:text-lg text-blue-primary">
            Is your dog experiencing discomfort due to irritated bowels or other
            gut health issues?
          </p>
        </div>
        <div>
          <img
            className="w-full h-auto"
            src="/images/dog-probiotics.jpg"
            alt="dog-probiotics"
          />
        </div>
        <div className="flex flex-col gap-5 lg:gap-7 font-normal text-sm lg:text-lg text-blue-primary">
          <p>
            We understand the challenges of dealing with such problems, and
            fortunately, there's a simple solution to help them feel better:
            probiotics and digestive chews designed specifically for dogs!
          </p>
          <p>
            By incorporating these supplements into your dog's daily routine for
            a few weeks, you can expect to see various positive effects,
            including improved bowel regularity. Additionally, a healthier coat,
            enhanced cognitive function, and a fortified immune system are just
            a few of the advantages linked to maintaining a well-functioning
            digestive system.
          </p>
          <p>
            Certain ingredients are essential in digestive supplements, with
            probiotics being a prime example. These live microorganisms
            naturally inhabit your pup's gut and play a vital role in
            maintaining its proper function. In fact, the gut plays a
            significant role in your dog's immune and digestive health.[1,2,3,4]
            Thus, maintaining a healthy gut microbiome is vital for the optimal
            functioning of both their digestive and immune systems.
          </p>
          <p>
            Many probiotics and digestive chews on the market come with hefty
            price tags and questionable additives. Selecting the right probiotic
            for your dog hinges on three crucial factors: the use of safe
            ingredients, effectiveness, and value for your money.
          </p>
          <p>
            It can be difficult to find what the best probiotic for your dog is,
            that's why Smarter Reviews has compiled a list from months of
            research about the best probiotics for dogs to keep your pup healthy
            and happy. But first, let’s go over the essential features and
            ingredients to look for and what to avoid when searching for
            digestive supplements, and how a daily supplement could improve your
            dog’s overall health.
          </p>
        </div>
      </section>
      {/* benefits of probiotics section */}
      <section data-aos="fade-down" data-aos-delay="300" className="flex flex-col gap-6 mt-[26px]">
        <div>
          <img
            className="w-full h-auto"
            src="/images/benefit-of-probiotics.png"
            alt="benefit-of-probiotics"
          />
        </div>
        <div className="px-4 flex flex-col gap-5">
          <div className="flex flex-col gap-[18px] lg:gap-[60px]">
            <h3 className="font-bold text-[22px] text-blue-primary lg:text-[42px]">
              Benefits Of Probiotics For Dogs
            </h3>
            <p className="font-normal text-sm text-blue-primary lg:text-lg lg:max-w-[918px]">
              Boosting the immune system, preventing digestive troubles, and
              offering added support during stress, dietary changes, or
              digestive imbalances are just a few of the advantages probiotics
              provide for dogs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[30px] lg:grid-cols-1">
            {benefits.map((benefit, index) => (
              <BenifitsCard
                key={index}
                title={benefit.title}
                img={benefit.img}
                alt={benefit.alt}
                benefits={benefit.benifits}
              />
            ))}
          </div>
        </div>
      </section>
      {/* supplement sectio
       */}
      <section className="">
        <div className="bg-paste-primary rounded-t-xl p-3 sm:p-4 md:p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-3 text-blue-primary">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold">
              What To Look For In A Quality Digestive <br />
              Supplement For Dogs
            </h3>
            <p>
              Considering all the beneficial qualities mentioned above, we've
              broken down a list of four key characteristics to always consider
              when searching for a high-quality digestive support supplement. Be
              sure to look for these essential features:
            </p>
          </div>
          <Accordion accordionsData={accordionsData} />
        </div>
        <div className="bg-orange-light rounded-b-xl p-3 sm:p-4 md:p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-3 ">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold text-orange-primary">
              What To Avoid When Buying Dog
              <br />
              Probiotic Supplements?
            </h3>
            <p className="text-blue-primary">
              In a market full of promises for happy bellies and thriving pups,
              it's super important for dog parents to choose wisely. Here's a
              heads-up on what to watch out for when picking the right
              supplements for your dogs:
            </p>
          </div>
          <Accordion isBlue={false} accordionsData={accordionsData2} />
        </div>
      </section>
      {/* tested formula */}
      <section data-aos="fade-down" data-aos-delay="300" className="flex flex-col gap-6">
        <div className="flex flex-col gap-[22px] lg:hidden">
          <h3 className="font-bold text-[26px] text-blue-primary">
            Carefully Tested Formula
          </h3>
          <p className="font-normal text-sm text-blue-primary">
            When it comes to your dog's health, we leave no stone unturned.
            PupGrade products, including the Probiotic Digestive Chews, undergo
            extensive testing to ensure their efficacy. Their formula have been
            fine-tuned to provide the perfect blend and dosage of essential
            ingredients for your dog's digestive health.
          </p>
          <div className="flex items-center justify-center">
            <img src="/images/dog.png" alt="dog" />
          </div>
        </div>
        <Pricing />
        <Note />
      </section>
      {/* accordionn with image */}

      <section className="max-lg:mt-20">
        <AccordionWithImg accordionsData={accordionsData3} />
      </section>

      {/* citations */}
      <Citations />
    </main>
  );
}

export default App;
