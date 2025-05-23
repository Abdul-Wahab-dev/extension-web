const Services = () => {
  return (
    <section className="md:p-20 px-1 py-8  bg-[#f9f9f9] " id="services">
      <div className="custom_container mx-auto">
        <div className="w-full flex-col flex justify-center items-center mb-5">
          <p className="text-primary">OUR SERVICES</p>
          <h2 className="text-black text-3xl font-normal mb-5 sm:text-4xl">
            How to get Textile?
          </h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-between flex-1  border-subTitle md:border-r-2 border-r-0">
            <div className="w-full md:w-full">
              <h3 className="text-4xl text-primary font-normal mb-4 sm:text-3xl">
                Yarn Procurement
              </h3>
              <p className="text-subTitle text-xl sm:text-lg text-[#454647]">
                The yarn is procured from top Spinning Mills producing high
                quality yarn made from superior cotton.
              </p>
            </div>
            <div className="hidden h-fit items-center relative mt-4 md:flex">
              <div className="h-0.5 w-20 bg-primary"></div>
              <div className="w-4 h-4 rounded-full absolute -right-[8px] bg-primary"></div>
            </div>
          </div>
          <div className="flex-1 flex items-center mt-10 md:mt-0 pb-20 md:py-10">
            <div className="hidden h-fit items-center relative mt-4 md:flex">
              <div className="w-4 h-4 rounded-full absolute -left-[8px] bg-primary"></div>
              <div className="h-0.5 w-20 bg-primary"></div>
            </div>
            <div className="mx-auto">
              <div className="w-[250px] sm:w-[400px] h-[250px] bg-[url(/assests/images/procurement.webp)] bg-cover"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="flex-1 flex items-center mt-10 md:mt-0  pb-20 border-subTitle md:border-r-2 border-r-0 md:pb-0">
            <div className="mx-auto md:py-10">
              <div className="w-[250px] sm:w-[400px] h-[250px] bg-[url(/assests/images/wet.jpeg)] bg-cover"></div>
            </div>
            <div className="hidden h-fit items-center relative mt-4 md:flex">
              <div className="h-0.5 w-20 bg-primary"></div>
              <div className="w-4 h-4 rounded-full absolute -right-[8px] bg-primary"></div>
            </div>
          </div>
          <div className="flex flex-1 items-start justify-between relative">
            <div className="relative mt-4 hidden items-center md:flex">
              <div className="w-4 h-4 rounded-full absolute -left-[8px] bg-primary"></div>
              <div className="h-0.5 w-20 bg-primary"></div>
            </div>
            <div className="w-full md:w-full">
              <h3 className="text-4xl text-primary font-normal mb-4 sm:text-3xl">
                Wet Processing
              </h3>
              <p className="text-subTitle text-xl sm:text-lg text-[#454647]">
                The greige towels fabric is processed chemically to obtain
                aesthetic properties in terms of softness, water absorbency,
                whiteness, etc. If needed, the fabric is then dyed by adding the
                colors/dyes.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-between flex-1  border-subTitle md:border-r-2 border-r-0">
            <div className="w-full md:w-full">
              <h3 className="text-4xl text-primary font-normal mb-4 sm:text-3xl">
                Weaving
              </h3>
              <p className="text-subTitle text-xl sm:text-lg text-[#454647]">
                Our latest Airjet looms use a jet of air to propel the weft yarn
                through the warp shed to form top quality greige towels fabric.
              </p>
            </div>
            <div className="hidden h-fit items-center relative mt-4 md:flex">
              <div className="h-0.5 w-20 bg-primary"></div>
              <div className="w-4 h-4 rounded-full absolute -right-[8px] bg-primary"></div>
            </div>
          </div>
          <div className="flex-1 flex items-center mt-10 md:mt-0 pb-10 md:py-10">
            <div className="hidden h-fit items-center relative mt-4 md:flex">
              <div className="w-4 h-4 rounded-full absolute -left-[8px] bg-primary"></div>
              <div className="h-0.5 w-20 bg-primary"></div>
            </div>
            <div className="mx-auto">
              <div className="w-[250px] sm:w-[400px] h-[250px] bg-[url(/assests/images/weaving.jpg)] bg-cover"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="flex-1 flex items-center mt-10 md:mt-0  pb-20 border-subTitle md:border-r-2 border-r-0 md:pb-0">
            <div className="mx-auto md:py-10">
              <div className="w-[250px] sm:w-[400px] h-[250px] bg-[url(/assests/images/sizing.jpg)] bg-cover"></div>
            </div>
            <div className="hidden h-fit items-center relative mt-4 md:flex">
              <div className="h-0.5 w-20 bg-primary"></div>
              <div className="w-4 h-4 rounded-full absolute -right-[8px] bg-primary"></div>
            </div>
          </div>
          <div className="flex flex-1 items-start justify-between relative">
            <div className="relative mt-4 hidden items-center md:flex">
              <div className="w-4 h-4 rounded-full absolute -left-[8px] bg-primary"></div>
              <div className="h-0.5 w-20 bg-primary"></div>
            </div>
            <div className="w-full md:w-full">
              <h3 className="text-4xl text-primary font-normal mb-4 sm:text-3xl">
                Warping & Sizing
              </h3>
              <p className="text-subTitle text-xl sm:text-lg text-[#454647]">
                The Yarn is combined from the creel of different cones to a
                beam. It is then impregnated with particular substances that
                form a film on the yarn’s surface to improve the yarn’s
                smoothness and tenacity during the subsequent weaving stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
