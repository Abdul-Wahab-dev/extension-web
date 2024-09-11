const Features = () => {
  return (
    <section className="md:p-20 p-8  bg-[#f9f9f9] " id="features">
      <div className="custom_container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-between flex-1  border-subTitle md:border-r-2 border-r-0">
            <div className="w-3/4 md:w-full">
              <h3 className="text-4xl text-primary font-normal mb-4 sm:text-3xl">
                Instant chat
              </h3>
              <p className="text-subTitle text-xl sm:text-lg text-[#454647]">
                Say goodbye to endless searching and make your online experience
                smoother with SitePro. Train your custom chatbot on any website
                with just a few clicks. Simply download the extension, create a
                chatbot, and start interacting with the website effortlessly..
              </p>
            </div>
            <div className="hidden h-fit items-center relative mt-4 md:flex">
              <div className="h-0.5 w-20 bg-primary"></div>
              <div className="w-4 h-4 rounded-full absolute -right-[8px] bg-primary"></div>
            </div>
          </div>
          <div className="flex-1 flex items-center pb-20 md:py-10">
            <div className="hidden h-fit items-center relative mt-4 md:flex">
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
        <div className="flex flex-col-reverse md:flex-row">
          <div className="flex-1 flex items-center  pb-20 border-subTitle md:border-r-2 border-r-0 md:pb-0">
            <div className="mx-auto md:py-10">
              <video className="" width={250} muted autoPlay loop>
                <source src="https://sitepro-marketting.s3.amazonaws.com/sitepro-demo-links.mov" />
              </video>
            </div>
            <div className="hidden h-fit items-center relative mt-4 md:flex">
              <div className="h-0.5 w-20 bg-primary"></div>
              <div className="w-4 h-4 rounded-full absolute -right-[8px] bg-primary"></div>
            </div>
          </div>
          <div className="flex flex-1 items-start justify-between relative">
            <div className="relative mt-4 hidden items-center md:flex">
              <div className="w-4 h-4 rounded-full absolute -left-[8px] bg-primary"></div>
              <div className="h-0.5 w-20 bg-primary"></div>
            </div>
            <div className="w-3/4 md:w-full">
              <h3 className="text-4xl text-primary font-normal mb-4 sm:text-3xl">
                Gather links
              </h3>
              <p className="text-subTitle text-xl sm:text-lg text-[#454647]">
                Tired of browsing endlessly for that one piece of information?
                With SitePro, you can now collect links from the website you
                visit. Search and select the links relevant to your needs and
                start chatting..
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-between flex-1  border-subTitle md:border-r-2 border-r-0">
            <div className="w-3/4 md:w-full">
              <h3 className="text-4xl text-primary font-normal mb-4 sm:text-3xl">
                Recent chats
              </h3>
              <p className="text-subTitle text-xl sm:text-lg text-[#454647]">
                Recent chats are saved in your dashboard. Come back to your
                chatbots whenever you want.
              </p>
            </div>
            <div className="hidden h-fit items-center relative mt-4 md:flex">
              <div className="h-0.5 w-20 bg-primary"></div>
              <div className="w-4 h-4 rounded-full absolute -right-[8px] bg-primary"></div>
            </div>
          </div>
          <div className="flex-1 flex items-center pb-10 md:py-10">
            <div className="hidden h-fit items-center relative mt-4 md:flex">
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
    </section>
  );
};

export default Features;
