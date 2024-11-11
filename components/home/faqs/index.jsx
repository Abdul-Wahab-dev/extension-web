"use client";
import React, { useState } from "react";
import Accordian from "../accordian";

const Faqs = () => {
  const [focused, setFocused] = useState(null);

  const faqs = [
    {
      question: "What is Flexisaves?",
      answer:
        "Flexisaves is a Chrome extension designed to help you effortlessly save, manage, and share web content. Select and save content from any website with options for temporary or permanent storage, and organize your saved items into categories or custom collections. With Flexisaves, you can also create personalized notes for any webpage, making it easy to capture thoughts or clarify ideas in your own words. Share content, collections, and notes with others for seamless collaboration. Plus, update, delete, copy, or open the source page of any saved content—making it a versatile tool for organizing and accessing your web resources",
    },
    {
      question: "How does the CONTENT work?",
      answer:
        "The ALL CONTENT feature in Flexisaves provides a comprehensive view of all your saved content, categorized by temporary, permanent, or all. You can choose to save content temporarily (which expires after 36 hours) or permanently. This section allows you to easily browse and manage your saved items based on their storage duration",
    },
    {
      question: "How does the COLLECTION work?",
      answer:
        "Custom Collections in Flexisaves allow you to group saved content by specific websites or topics. For example, you can create a collection for upwork.com and add relevant content to it. When you revisit upwork.com and use a special shortcut, the extension will display all content saved under that domain. This feature helps you organize and access content tailored to particular projects or subjects easily.",
    },
    {
      question: "How does the SITE-SPECIFIC feature work?",
      answer:
        " The site-specific feature in Flexisaves organizes your saved content by individual domains. When you use this feature, it displays all content saved from a specific website, making it easy to find relevant information from the active site you're currently browsing",
    },
    {
      question: "How does the NOTE feature work?",
      answer:
        "Add personalized notes to web pages to help you remember details, clarify ideas, or express your understanding in your own words. Each note can be saved with a title and description, and shared with others—making it easy to collaborate or revisit your insights at any time.",
    },

    {
      question: "Can I use it for free?",
      answer:
        "Flexisaves offers a free version with essential features for saving and managing web content. In the free version, you can save up to 10 pieces of content, 10 notes, and create up to 3 custom collections. Any content saved as temporary will be automatically removed after 36 hours. You can also share content and notes with up to 1 user. For extended storage options, more collections, premium support, and additional sharing capabilities, you can upgrade to one of our paid plans. Check our Plan and Pricing section for more details on the available options.",
    },
  ];

  return (
    <section
      className="bg-white md:p-20 p-8 overflow-hidden text-[#454647] relative"
      id="faqs"
    >
      <div className="w-[30px] h-[30px] bg-[#CEE4FC] rounded-full absolute top-5 shadow-lg left-[20%] -translate-x-[40%]"></div>
      <div className="w-[150px] h-[150px] z-0 bg-transparent border-[#CEE4FC]  border-4 rounded-full absolute -top-[50px] -right-[50px]"></div>
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
    </section>
  );
};

export default Faqs;
