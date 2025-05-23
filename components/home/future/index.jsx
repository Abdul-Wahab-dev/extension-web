import Image from "next/image";

const Future = () => {
  return (
    <section
      className="overflow-hidden relative bg-[url(/assests/images/factory.jpg)] bg-fixed"
      id="testimonial"
    >
      <div className="w-full  bg-black bg-opacity-50">
        <div className="custom_container mx-auto h-full py-10 md:py-16">
          <div className="flex flex-col text-center justify-center h-full items-center    z-50 gap-14">
            <div>
              <p className="text-primary">OUR TESTIMONIAL</p>
              <h2 className="text-white text-3xl font-normal mb-5 sm:text-4xl">
                Quality is our first priority
              </h2>
            </div>
            <div className="grid md:grid-cols-3 items-center justify-center gap-20 w-full">
              <div className="flex flex-col justify-center items-center gap-5">
                <div className="p-5 border border-white rounded-lg">
                  <Image
                    src={"/assests/icons/client.png"}
                    width={40}
                    height={100}
                    alt="trusted-client"
                  />
                </div>
                <h3 className="text-2xl text-center text-white">
                  <span className="text-4xl font-bold">100+</span>
                  <br />
                  Trusted Client
                </h3>
              </div>
              <div className="flex flex-col justify-center items-center gap-5">
                <div className="p-5 border border-white rounded-lg">
                  <Image
                    src={"/assests/icons/project.png"}
                    width={40}
                    height={100}
                    alt="trusted-client"
                  />
                </div>
                <h3 className="text-2xl text-center text-white">
                  <span className="text-4xl font-bold">200+</span>
                  <br />
                  Projects completed
                </h3>
              </div>
              <div className="flex flex-col justify-center items-center gap-5">
                <div className="p-5 border border-white rounded-lg">
                  <Image
                    src={"/assests/icons/location.png"}
                    width={40}
                    height={100}
                    alt="trusted-client"
                  />
                </div>
                <h3 className="text-2xl text-center text-white">
                  <span className="text-4xl font-bold">50+</span>
                  <br />
                  Visited Conference
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
