"use client";
import React, { useState } from "react";
import Accordian from "../accordian";
import Image from "next/image";

const Help = () => {
  return (
    <section
      className="bg-white md:p-20 p-8 overflow-hidden text-[#454647] relative"
      id="help"
    >
      <div className="custom_container mx-auto">
        <div className="w-full flex-col flex justify-center items-center mb-5">
          <p className="text-primary">NEED HELP?</p>
          <h2 className="text-black text-3xl font-normal mb-5 sm:text-4xl text-center">
            Get our services
          </h2>
        </div>

        <div className="mb-10">
          <div className="flex justify-center gap-16 items-center w-full flex-col md:flex-row">
            <div className="flex gap-3 items-center ">
              <div className="w-[70px] h-[70px] flex items-center justify-center ">
                <Image
                  src={"/assests/icons/telephone.png"}
                  width={30}
                  height={60}
                  alt="ai-icon"
                />
              </div>
              <div className="text-slate-800 leading-tight">
                <p className="font-semibold text-lg">Phone</p>
                <p className="text-lg">+92300669320</p>
              </div>
            </div>
            <div className="flex gap-3 items-center ">
              <div className="w-[70px] h-[70px]  flex items-center justify-center">
                <Image
                  src={"/assests/icons/location-black.png"}
                  width={30}
                  height={60}
                  alt="ai-icon"
                />
              </div>
              <div className="text-slate-800 leading-tight">
                <p className="font-semibold text-lg">Visit our office</p>
                <p className="text-lg">Talib Abad, Jhang Road</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center">
          Jalandher sizing is operating in the most of textile market, as the it
          is manufacture and trader. <br />
          As years go by the range produced textiles products has increased.
        </p>
      </div>
    </section>
  );
};

export default Help;
