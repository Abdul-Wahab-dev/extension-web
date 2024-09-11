import React from "react";
import Image from "next/image";
import Link from "next/link";
const Failed = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cultured">
      <div className="bg-white w-[320px] sm:w-[420px] p-10 !pb-0 flex flex-col justify-center items-center rounded-lg shadow-xl gap-10">
        <Image
          src="/assests/icons/failed.png"
          width={100}
          height={100}
          alt="payment-failed"
        />
        <div>
          <h1 className="text-2xl font-semibold text-[#f33557] text-center">
            Payment Success!
          </h1>
          <h3 className="text-gray-500">
            {" "}
            Sorry for the inconvenient, Please try again
          </h3>
        </div>
        <div className="flex w-full gap-3">
          <Link
            href="/"
            className="w-full p-3 bg-primary rounded text-white flex items-center justify-center"
          >
            Home
          </Link>
        </div>
        <div className="w-full border-t text-center flex items-center justify-center">
          <Link href="/" className="py-5">
            FLEXISAVES
          </Link>
        </div>
      </div>
      <div className="container mx-auto flex items-center absolute bottom-2 justify-center text-gray-800">
        <p>FLEXISAVES © 2023. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Failed;
