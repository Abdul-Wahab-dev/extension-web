const Intro = () => {
  return (
    <div className="flex flex-col bg-[#2e2e2e] text-center py-16 items-center md:p-8">
      <h2 className="text-[#454647] text-5xl font-normal mb-4 sm:text-4xl">
        Browse like a pro
      </h2>
      <p className="text-subTitle text-xl text-center sm:text-lg mb-10">
        Free up time and improve productivity by letting AI search the web for
        you
      </p>
      <div className="w-full max-w-[720px]">
        <div className="videowrapper">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1xjVKqNOCYU?si=XgCeIYg_nYct5pNs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Intro;
