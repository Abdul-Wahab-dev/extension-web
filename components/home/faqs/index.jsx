import dynamic from "next/dynamic";
const CSRFaqs = dynamic(() => import("@/components/csr/landing/faqs"));

const Faqs = () => {
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
            {/* Render here the csr */}
            <CSRFaqs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
