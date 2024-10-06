import Link from "next/link";
import Image from "next/image";
import chrome from "@/assets/common/chrome.svg";
const Future = () => {
  return (
    <section className="bg-white overflow-hidden py-16 relative" id="download">
      <div className="w-[30px] h-[30px] bg-[#CEE4FC] rounded-full absolute top-5 shadow-lg left-[50%] -translate-x-[40%]"></div>
      <div className="w-[150px] h-[150px] z-0 bg-transparent border-[#CEE4FC]  border-4 rounded-full absolute -bottom-[50px] -right-[50px]"></div>
      <div className="w-[120px] h-[120px] bg-[#CEE4FC] rounded-full absolute top-[70%] z-0 -translate-y-[30%] left-[30%] -translate-x-[50%]"></div>
      <div className="custom_container mx-auto">
        <div className="flex flex-col bg-white text-center items-center md:p-8 z-50">
          <h2 className="text-[#454647] text-3xl font-normal mb-5 sm:text-4xl">
            Download to Save and Manage <br />
            Web Content Seamlessly
          </h2>
          <Link
            href="https://chromewebstore.google.com/detail/flexisaves/mmaidogdkpmcnbjepbfhicpecemdeiij?hl=en"
            target="_blank"
            className="z-50"
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
      </div>
    </section>
  );
};

export default Future;
