import Link from "next/link";
import Image from "next/image";
import chrome from "@/assets/common/chrome.svg";
const Future = () => {
  return (
    <section className="bg-white" id="download">
      <div className="custom_container mx-auto">
        <div className="flex flex-col bg-white text-center py-20 items-center md:p-8">
          <h2 className="text-[#454647] text-3xl font-normal mb-10 sm:text-4xl">
            Join the future of web browsing today
          </h2>
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
      </div>
    </section>
  );
};

export default Future;
