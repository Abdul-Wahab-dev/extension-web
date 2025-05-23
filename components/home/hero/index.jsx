const Hero = () => {
  return (
    <div className=" relative h-[60vh] md:h-[100vh] w-full bg-[url(/assests/images/factory.jpg)] bg-cover bg-fixed">
      <div className=" bg-black bg-opacity-70 w-full h-full">
        <div className="custom_container mx-auto h-full flex items-center justify-center">
          <div className="flex flex-col  items-center justify-center gap-5 m-auto  px-5  py-8 md:p-20 lg:px-16 lg:py-28 ">
            <p className="text-white">Textile Brand in Market since 19s</p>
            <h2 className="text-3xl font-bold text-center text-white z-40 mb-4 md:text-5xl">
              Our Reputation Is <br /> Built On Solid Ground
            </h2>
            <p className="text-white text-center">
              Jalandher sizing is operating in the most of textile market,{" "}
              <br />
              as the it is manufacture and trader.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
