const Features = () => {
  return (
    <div className="py-16 px-20 lg:p-10 md:p-8">
      <div className="flex md:flex-col">
        <div className="flex justify-between flex-1 border-r-2 border-subTitle md:border-none">
          <div className="w-3/4 md:w-full">
            <h3 className="text-4xl text-white font-normal mb-4 sm:text-3xl">
              Instant chat
            </h3>
            <p className="text-subTitle text-xl sm:text-lg">
              Say goodbye to endless searching and make your online experience smoother with SitePro. Train your custom chatbot on any website with just a
              few clicks. Simply download the extension, create a chatbot, and start
              interacting with the website effortlessly..
            </p>
          </div>
          <div className="flex h-fit items-center relative mt-4 md:hidden">
            <div className="h-0.5 w-20 bg-white"></div>
            <div className="w-4 h-4 rounded-full absolute -right-[8px] bg-white"></div>
          </div>
        </div>
        <div className="flex-1 flex items-center pb-20 md:py-10">
          <div className="flex h-fit items-center relative mt-4 md:hidden">
            <div className="w-4 h-4 rounded-full absolute -left-[8px] bg-primary"></div>
            <div className="h-0.5 w-20 bg-primary"></div>
          </div>
          <div className="mx-auto">
            <video className="" width={250} muted autoPlay loop>
              <source src="https://sitepro-marketting.s3.amazonaws.com/sitepro-demo.mov" />
            </video>
          </div>
        </div>
      </div>
      <div className="flex md:flex-col-reverse">
        <div className="flex-1 flex items-center border-r-2 pb-20 border-subTitle md:border-none md:pb-0">
          <div className="mx-auto md:py-10">
            <video className="" width={250} muted autoPlay loop>
              <source src="https://sitepro-marketting.s3.amazonaws.com/sitepro-demo-links.mov" />
            </video>
          </div>
          <div className="flex h-fit items-center relative mt-4 md:hidden">
            <div className="h-0.5 w-20 bg-primary"></div>
            <div className="w-4 h-4 rounded-full absolute -right-[8px] bg-primary"></div>
          </div>
        </div>
        <div className="flex flex-1 items-start justify-between relative">
          <div className="relative mt-4 flex items-center md:hidden">
            <div className="w-4 h-4 rounded-full absolute -left-[8px] bg-white"></div>
            <div className="h-0.5 w-20 bg-white"></div>
          </div>
          <div className="w-3/4 md:w-full">
            <h3 className="text-4xl text-white font-normal mb-4 sm:text-3xl">
              Gather links
            </h3>
            <p className="text-subTitle text-xl sm:text-lg">
              Tired of browsing endlessly for that one piece of information? With SitePro, you can now collect links from the website you visit. Search and select the links relevant to your needs and start chatting..
            </p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-col">
        <div className="flex justify-between flex-1 border-r-2 border-subTitle md:border-none">
          <div className="w-3/4 md:w-full">
            <h3 className="text-4xl text-white font-normal mb-4 sm:text-3xl">
              Recent chats
            </h3>
            <p className="text-subTitle text-xl sm:text-lg">
              Recent chats are saved in your dashboard. Come back to your chatbots whenever you want.  
            </p>
          </div>
          <div className="flex h-fit items-center relative mt-4 md:hidden">
            <div className="h-0.5 w-20 bg-white"></div>
            <div className="w-4 h-4 rounded-full absolute -right-[8px] bg-white"></div>
          </div>
        </div>
        <div className="flex-1 flex items-center pb-10 md:py-10">
          <div className="flex h-fit items-center relative mt-4 md:hidden">
            <div className="w-4 h-4 rounded-full absolute -left-[8px] bg-primary"></div>
            <div className="h-0.5 w-20 bg-primary"></div>
          </div>
          <div className="mx-auto">
            <video className="" width={250} muted autoPlay loop>
              <source src="https://sitepro-marketting.s3.amazonaws.com/sitepro-demo-recent.mov" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
