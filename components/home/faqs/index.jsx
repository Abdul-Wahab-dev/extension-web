"use client";
import React, { useState } from "react";
import Accordian from "../accordian";

const Faqs = () => {
  const [focused, setFocused] = useState(null);

  const faqs = [
    {
      question: "What is SitePro?",
      answer:
        "SitePro is a browser extension which allows you to create a chatbot on any website instantly.",
    },
    {
      question: "Can I use SitePro for free?",
      answer:
        "Absolutely! We offer a free plan allows you to create upto 5 chatbots with 20K total tokens",
    },
    {
      question: "How does your pricing work?",
      answer:
        "Our prices start at just $6.99 per month, with no commitment required.",
    },
    {
      question: "How can I upgrade my plan?",
      answer:
        "Click your avatar on the widget and choose 'Pricing & plans' from the menu. Select the plan that suits your needs and payout securely.",
    },
    {
      question: "How will I know how many tokens I’ve used each month?",
      answer:
        "Click your avatar on the widget and choose 'View account' from the menu to view your token consumption.",
    },
    {
      question: "Can I create chatbots on multiple webpages?",
      answer:
        "Yes, you can select 'Choose links to chat with' option which allows you to select the pages of your choice on the website before creating a chatbot",
    },
  ];

  return (
    <div className="bg-white md:p-20 p-8 text-[#454647] ">
      <div className="custom_container mx-auto">
        <div className=" ">
          <h3 className="text-4xl mb-2 sm:text-3xl">FAQs</h3>
          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <Accordian
                faq={faq}
                key={index}
                focused={index === focused}
                handleFocus={() => setFocused(focused !== index ? index : null)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
