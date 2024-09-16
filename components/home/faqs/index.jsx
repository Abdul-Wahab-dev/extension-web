"use client";
import React, { useState } from "react";
import Accordian from "../accordian";

const Faqs = () => {
  const [focused, setFocused] = useState(null);

  const faqs = [
    {
      question: "What is Flexisaves?",
      answer:
        "Flexisaves is a Chrome extension designed to help you save and manage web content. With flexisaves, you can select and save content from any website, choose between temporary or permanent storage, and organize it into categories or custom collections. The extension also allows you to update, delete, copy, or open the source page of the saved content, making it a powerful tool for managing and accessing your web resources efficiently.",
    },
    {
      question: "How does the ALL CONTENT work?",
      answer:
        "The ALL CONTENT feature in Flexisaves provides a comprehensive view of all your saved content, categorized by temporary, permanent, or all. You can choose to save content temporarily (which expires after 36 hours) or permanently. This section allows you to easily browse and manage your saved items based on their storage duration",
    },
    {
      question: "How does the CUSTOM COLLECTION work?",
      answer:
        "Custom Collections in Flexisaves allow you to group saved content by specific websites or topics. For example, you can create a collection for upwork.com and add relevant content to it. When you revisit upwork.com and use a special shortcut, the extension will display all content saved under that domain. This feature helps you organize and access content tailored to particular projects or subjects easily.",
    },
    {
      question: "How does the SITE-SPECIFIC feature work?",
      answer:
        " The site-specific feature in Flexisaves organizes your saved content by individual domains. When you use this feature, it displays all content saved from a specific website, making it easy to find relevant information from the active site you're currently browsing",
    },
    {
      question: "Can I use it for free?",
      answer:
        "Flexisaves offers a free version with essential features for saving and managing web content. In the free version, content saved as temporary will be automatically removed after 36 hours. For advanced functionalities, such as extended storage options or premium support, you may need to upgrade to one of our paid plans. Check our Plan and Pricing section for more details on the available options.",
    },
    {
      question: "How can I open the content model?",
      answer:
        "To open the content model in Flexisaves, simply press the shortcut key ALT+SHIFT+Y. The model will be injected into the web page and display the sections. If you are focused on an input field when you press the shortcut key, the model will appear near the input field. If no input field is focused, the model will be displayed at the top left corner of the web page.",
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
