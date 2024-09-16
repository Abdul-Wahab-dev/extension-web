const Features = () => {
  return (
    <section className="md:p-20 p-8  bg-[#f9f9f9] " id="features">
      <div className="custom_container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-between flex-1  border-subTitle md:border-r-2 border-r-0">
            <div className="w-3/4 md:w-full">
              <h3 className="text-4xl text-primary font-normal mb-4 sm:text-3xl">
                Save and Manage Your Content - Temporarily or Permanently
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
                Organize Content by Website for Easy Access
              </h3>
              <p className="text-subTitle text-xl sm:text-lg text-[#454647]">
                Quickly Find Saved Content Based on the Website You’re Browsing
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-between flex-1  border-subTitle md:border-r-2 border-r-0">
            <div className="w-3/4 md:w-full">
              <h3 className="text-4xl text-primary font-normal mb-4 sm:text-3xl">
                Group Your Saved Content for Any Domain and topic
              </h3>
              <p className="text-subTitle text-xl sm:text-lg text-[#454647]">
                Organize your saved content into personalized collections by
                website or topic. For example, create a collection for
                upwork.com, and when you visit the site, simply use a shortcut
                to instantly access all saved content for that domain under the
                Collections section.
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
