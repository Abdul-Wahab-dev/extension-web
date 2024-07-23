import Image from "next/image";
import Link from "next/link";
import chrome from "@/assets/common/chrome.svg";

const Hero = () => {
  return (
    <div>
      <div className="container">
        <div className="flex mb-40 md:flex-col md:mb-20">
          <div className="flex flex-col m-auto flex-1 p-20 md:p-8">
            <h1 className="text-6xl text-white font-normal mb-4 sm:text-5xl">
              <strong className="text-primary font-normal">Chat</strong> with
              websites <br /> like a{" "}
              <strong className="text-primary font-normal">pro</strong>
            </h1>
            <p className="text-white text-xl mb-12 sm:text-lg">
              SitePro revolutionizes your web browsing experience by allowing
              you to integrate AI chatbot technology directly into any website.{" "}
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
