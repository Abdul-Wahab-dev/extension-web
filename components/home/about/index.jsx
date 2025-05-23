const AboutUs = () => {
  return (
    <section className="md:p-20 px-1 py-8  bg-[#f9f9f9] " id="about">
      <div className="custom_container mx-auto">
        <div className="w-full flex-col flex justify-center items-center mb-5">
          <p className="text-primary">BEST SOLUTION</p>
          <h2 className="text-black text-3xl font-normal mb-5 sm:text-4xl">
            What we deliver
          </h2>
        </div>
        <div className="w-full flex items-stretch justify-around md:flex-row flex-col-reverse md:gap-0 gap-8">
          <div className="md:p-10">
            <img src="/assests/images/man-operating.jpg" alt="man-operating" />
          </div>
          <div className="md:p-10 flex items-center justify-center md:border-l">
            <div className="flex flex-col justify-center my-auto gap-5">
              <h1 className="text-3xl md:text-5xl font-bold text-black">
                The Best Solution For All Textile Industries.
              </h1>
              <p className="text-gray-500">
                We are delivering next-generation textile production processes
                that will be radically efficient & sustainable manufacturer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
