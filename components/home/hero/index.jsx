import Image from "next/image";
import Link from "next/link";
import chrome from "@/assets/common/chrome.svg";

const Hero = () => {
  return (
    <div className="md:p-20 p-10 shadow-lg">
      <div className="custom_container mx-auto">
        <div className="flex flex-col mb-20 md:flex-row md:mb-0">
          <div className="flex flex-col m-auto flex-1 p-20 md:p-8">
            <h1 className="text-6xl text-[#454647] font-normal mb-4 sm:text-5xl">
              Save Content
              <strong className="text-primary font-normal">
                {" "}
                Effortlessly
              </strong>{" "}
              <br />
              and <strong className="text-primary font-normal">
                Access
              </strong>{" "}
              it Anytime, Anywhere!
            </h1>
            <p className="text-[#454647] text-xl mb-12 sm:text-lg">
              Flexisaves lets you instantly save and manage web content. Keep
              your research, articles, and inspiration at your fingertips with
              just few clicks.
            </p>
            <Link
              href="https://chromewebstore.google.com/detail/sitepro-chat-with-website/fggdmholnflfmcihdaaifjenegkffmpf?hl=en"
              target="_blank"
            >
              <button className="flex px-6 py-3 bg-primary font-medium text-white w-fit rounded-md sm:self-center hover:backdrop-brightness-50">
                <Image
                  src={chrome}
                  width={24}
                  height={24}
                  className="mr-2 shadow-md rounded-full"
                />
                Download free extension
              </button>
            </Link>
          </div>
          <div className="flex-1 m-auto">
            <video
              className="mx-auto md:mt-6"
              width={320}
              muted
              autoPlay
              loop
              style={{
                boxShadow: "15px 15px 100px 0px rgba(171, 104, 255, 0.25)",
              }}
            >
              <source src="https://sitepro-marketting.s3.amazonaws.com/sitepro-demo.mov" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
