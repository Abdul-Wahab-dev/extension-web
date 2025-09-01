import React from "react";
import Image from "next/image";
import Link from "next/link";
const UseCase = () => {
  return (
    <section
      className="bg-white md:p-20 p-8 overflow-hidden text-[#454647] relative"
      id="use-case"
    >
      <div className="custom_container mx-auto">
        <h3 className="text-4xl mb-8 sm:text-3xl">Use Cases</h3>

        <div className="flex items-center justify-center  gap-8">
          {[
            {
              title:
                "How to Save ChatGPT References and Organize AI Research with Flexisaves",
              image: "/assests/ai-reference.png",
            },
          ].map((blog, idx) => (
            <Link href={"/blogs/how-to-save-chatgpt-reference"} key={idx}>
              <div className=" cursor-pointer rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition w-[400px]">
                <div className="w-full h-[250px] relative">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className=" p-4 ">
                  <h4 className="text-lg font-semibold ">{blog.title}</h4>
                  <p className="mt-4">
                    When working with ChatGPT, you often generate valuable
                    answers, code snippets, or research references that you
                    don’t want to lose.Copy-pasting into a document or
                    bookmarking individual pages can quickly get messy...
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCase;
