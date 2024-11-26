import dynamic from "next/dynamic";
const CSRPricing = dynamic(() => import("@/components/csr/landing/pricing"), {
  loading: () =>
    [1, 2, 3, 4].map((el) => (
      <div
        key={el}
        className="w-[280px] h-[340px] hover:scale-105 transition-transform p-6 flex flex-col items-start gap-6 bg-white rounded shadow-lg"
      ></div>
    )),
});

const Pricing = () => {
  return (
    <section className="bg-[#f9f9f9] md:p-20 p-10" id="pricing">
      <div className="custom_container mx-auto">
        <div className=" items-start flex flex-col">
          <h3 className="text-4xl mb-4 sm:text-3xl text-[#454647]">
            Plans & pricing
          </h3>
          <p className="text-subTitle mb-12 text-xl sm:text-lg text-[#454647]">
            Choose the plan that suits your needs, cancel anytime.
          </p>
          <div className="flex gap-6 flex-wrap self-center justify-center">
            {/* Render here the csr component */}
            <CSRPricing />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
