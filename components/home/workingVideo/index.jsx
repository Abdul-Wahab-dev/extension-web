import React from "react";
import ReactPlayer from "react-player";

const WorkingVideo = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="custom_container mx-auto ">
        <section className="flex flex-col items-center justify-center py-14">
          <h2 className="text-3xl  text-[#454647] mb-6">How It Works</h2>
          <div className="w-full max-w-4xl overflow-hidden rounded-xl shadow-2xl">
            <ReactPlayer
              src="/assests/flexisaves.mp4"
              controls={true}
              playing={true}
              width="100%"
              height="100%"
              loop={true}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default WorkingVideo;
