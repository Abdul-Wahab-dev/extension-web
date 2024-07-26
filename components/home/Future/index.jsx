import Link from "next/link";

const Future = () => {
  return (
    <div className="flex flex-col bg-[#2e2e2e] text-center py-16 items-center md:p-8">
      <h2 className="text-white text-5xl font-normal mb-10 sm:text-4xl">
        Join the future of web browsing today
      </h2>
      <Link target="_blank" href="https://chromewebstore.google.com/detail/sitepro-chat-with-website/fggdmholnflfmcihdaaifjenegkffmpf?hl=en">
      <button className="px-6 py-3 bg-primary font-medium text-white text-xl w-fit rounded-md sm:self-center">
        Download free extension
      </button></Link>
    </div>
  );
};

export default Future;
