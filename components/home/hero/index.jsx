import Image from "next/image";
import Link from "next/link";
import chrome from "@/assets/common/chrome.svg";

const Hero = () => {
  return (
    <div className="md:p-20 sm:p-10 relative">
      <div className="w-[60px] h-[60px] bg-[#CEE4FC] rounded-full absolute top-10 left-[50%] shadow-lg -translate-x-[40%]"></div>
      <div className="w-[150px] h-[150px] z-0 bg-transparent border-[#CEE4FC] border-4 rounded-full absolute top-[30%] -translate-y-[50%] left-0 -translate-x-[50%]"></div>
      <div className="w-[120px] h-[120px] bg-[#CEE4FC] rounded-full absolute top-[70%] z-0 -translate-y-[30%] left-[35%] shadow-lg -translate-x-[50%]"></div>
      <div className="custom_container mx-auto">
        <div className="flex flex-col mb-20  gap-10 md:gap-0 md:flex-row md:mb-0">
          <div className="flex flex-col m-auto flex-1  p-2 md:p-8">
            <h1 className="text-3xl text-[#454647] z-40 font-normal mb-4 sm:text-5xl">
              Save, Share and{" "}
              <strong className="text-primary font-normal">
                {" "}
                Access Content
              </strong>{" "}
              Effortlessly
              <br />
              Anywhere, Anytime!
            </h1>
            <p className="text-[#454647] text-xl z-40 mb-12 sm:text-lg">
              Flexisaves lets you instantly save, share, and manage web content.
              Keep your research, articles, and inspiration organized and
              accessible, ready to share with others in just a few clicks
            </p>
            <Link
              href="https://chromewebstore.google.com/detail/flexisaves/mmaidogdkpmcnbjepbfhicpecemdeiij"
              target="_blank"
              className="z-40"
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
          <div className="flex-1 m-auto z-40">
            <img
              className="mx-auto md:mt-6"
              width={320}
              height={100}
              src={"/assests/home.png"}
              style={{
                boxShadow: "15px 15px 100px 0px #CEE4FC",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
