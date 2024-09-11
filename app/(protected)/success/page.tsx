"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { billingPortal } from "@/lib/services/subscription";
import { toast } from "react-toastify";
const Success = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleBillingPortal = async () => {
    try {
      setLoading(true);
      const res = await billingPortal();
      if (res) {
        const { billingPortal } = res;
        const a = document.createElement("a");
        a.href = billingPortal.url;
        a.target = "_self";
        a.click();
        setLoading(false);
      }
    } catch (error: any) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-cultured">
      <div className="bg-white w-[320px] sm:w-[420px] p-10 !pb-0 flex flex-col justify-center items-center rounded-lg shadow-xl gap-10">
        <Image
          src="/assests/icons/success.png"
          width={100}
          height={100}
          alt="payment-success"
        />
        <div>
          <h1 className="text-2xl font-semibold text-[#40af56]">
            Payment Success!
          </h1>
          <h3 className="text-gray-500"> Thank you for choosing us</h3>
        </div>
        <div className="flex w-full gap-3">
          <Link
            href="/"
            // onClick={handleLogin}
            className="w-full p-3 bg-primary rounded text-white flex items-center justify-center"
          >
            Home
          </Link>

          <button
            onClick={handleBillingPortal}
            type="button"
            className="  border flex   border-gray-500 m-auto gap-3  rounded  py-2.5 text-center justify-center items-center w-full"
          >
            <span>Manage Plan</span>
            {loading ? <div className="spinner !border-t-black"></div> : null}
          </button>
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

export default Success;
