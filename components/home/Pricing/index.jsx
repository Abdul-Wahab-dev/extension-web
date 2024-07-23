import tick from "@/assets/tick.svg";
import Image from "next/image";

const plans = [
  {
    name: "Basic",
    value: "basic",
    price: "Free",
    features: ["Create upto 5 chats", "Gather links from any website", "20K tokens"],
    chatCount: "~ 20+ messages",
  },
  {
    name: "Hobby",
    value: "hobby",
    price: `$6.99`,
    features: [
      "Create upto 20 chats",
      "Persistant chat history",
      "Gather links from any website",
      "500K tokens",
    ],
    chatCount: "~ 500+ messages",
  },
  {
    name: "Standard",
    value: "standard",
    price: "$12.99",
    features: ["Unlimited chats", "Persistant chat history", "Gather links on any website", "1000K tokens"],
    chatCount: "~ 1000+ messages",
  },
];

const Pricing = () => {
  return (
    <div className="py-16 px-20 md:p-8 items-start flex flex-col">
      <h3 className="text-4xl mb-4 sm:text-3xl text-white">Plans & pricing</h3>
      <p className="text-subTitle mb-12 text-xl sm:text-lg">Choose the plan that suits your needs, cancel anytime.</p>
      <div className="flex gap-6 flex-wrap self-center justify-center">
        {plans.map((element) => {
          return (
            <div className="w-[280px] h-[340px] hover:scale-105 transition-transform p-6 flex flex-col items-start gap-6 bg-[#2e2e2e]">
              <p className="flex flex-col text-white text-xl sm:text-lg">
                {element.name}
              </p>
              <h3 className="text-5xl text-white font-normal sm:text-4xl">
                {element.price}
                  {element.price !== "Free" && <strong className="font-normal text-subTitle text-2xl sm:text-xl">/month</strong>}
              </h3>
              <div className="flex flex-col items-start text-white">
                {element.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Image className="mt-2" width={16} src={tick} />
                    <p>{feature}</p>
                  </div>
                ))}
                <p className="text-subTitle ml-6">{element.chatCount}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
