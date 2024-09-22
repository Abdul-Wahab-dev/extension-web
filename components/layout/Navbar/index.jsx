"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { billingPortal } from "@/lib/services/subscription";
import { useAuthentication } from "@/store/auth";
import { toast } from "react-toastify";
// import { NavLinks } from "@/contants";

const Header = () => {
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSubMenuOpenMob, setIsSubMenuOpenMob] = useState(false);
  const auth = useAuthentication((state) => state);
  const [isOpen, setIsOpen] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false); // To handle transition effect properly
  const [loading, setLoading] = useState(false);

  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    tokens: 50,
  };

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleSidebar = () => setSideBarOpen(!sideBarOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  const handleClickOutsideSideBar = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSideBarOpen(false);
    }
  };

  useEffect(() => {
    if (sideBarOpen) {
      setIsMounted(true);
      document.addEventListener("mousedown", handleClickOutsideSideBar);
    } else {
      setTimeout(() => setIsMounted(false), 300); // Delaying the unmounting to allow transition out
      document.removeEventListener("mousedown", handleClickOutsideSideBar);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSideBar);
    };
  }, [sideBarOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLogout = async () => {
    try {
      const res = await auth.signOut();
    } catch (error) {
      toast.error(error.message);
    }
  };

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
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <div className="relative inline-block text-left w-full h-full" id="header">
      <div className="bg-winter-wizard h-[60px] text-[#454647] focus:outline-none z-50">
        <div className="flex items-center justify-between gap-5 mx-auto h-[60px] custom_container">
          <Link href="/">
            <img src="/assests/icons/logo.svg" width={200} alt="logo" />
          </Link>

          {/* MOBILE MENU */}
          <div className="h-full md:hidden flex gap-8">
            {/* Sidebar Toggle Button */}
            <button
              type="button"
              onClick={toggleSidebar}
              className="inline-flex items-center justify-center shadow-sm py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            >
              <Image
                src="/assests/icons/menu.png"
                width={25}
                height={25}
                alt="menu"
              />
            </button>

            {/* Sidebar */}
            {sideBarOpen && (
              <div
                className="fixed inset-0 bg-black opacity-50 z-40 transition-opacity duration-300 ease-in-out"
                onClick={toggleSidebar}
              ></div>
            )}
            {isMounted && (
              <div
                className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                  sideBarOpen ? "translate-x-0" : "translate-x-full"
                }`}
                ref={sidebarRef}
              >
                <div className=" relative">
                  {/* Close Button */}
                  <button
                    onClick={toggleSidebar}
                    className="text-gray-700 absolute top-5 right-5 hover:text-gray-900 focus:outline-none"
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {/* User Info */}
                  {auth.isAuthenticated ? (
                    <div className=" flex items-center justify-center flex-col gap-2 py-5 border-b bg-gray-100">
                      <Image
                        src="/assests/icons/profile-placeholder.png"
                        width={35}
                        height={35}
                        alt="profile-placeholder"
                      />
                      <p className="text-sm text-gray-700">{auth.user.name}</p>
                      <p className="text-sm text-gray-700">{auth.user.email}</p>
                      {/* <div className=" flex items-center justify-around w-full">
                        <p className="text-sm text-gray-700">Tokens</p>
                        <p className="text-sm text-gray-700">1200</p>
                      </div>
                      <div className=" flex items-center justify-around w-full">
                        <p className="text-sm text-gray-700">collections</p>
                        <p className="text-sm text-gray-700">1200</p>
                      </div> */}
                    </div>
                  ) : null}

                  <div className="mt-3">
                    {pathname === "/" ? (
                      <a
                        href="#features"
                        className="w-full border-b  justify-start gap-3 flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Features
                      </a>
                    ) : null}
                    {pathname === "/" ? (
                      <a
                        href="#pricing"
                        className="w-full border-b  justify-start gap-3 flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Pricing
                      </a>
                    ) : null}
                    {pathname === "/" ? (
                      <a
                        href="#download"
                        className="w-full border-b  justify-start gap-3 flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Download
                      </a>
                    ) : null}
                    {pathname === "/" ? (
                      <a
                        href="#faqs"
                        className="w-full border-b  justify-start gap-3 flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Faqs
                      </a>
                    ) : null}
                    {auth.isAuthenticated ? (
                      <>
                        <button
                          onClick={handleBillingPortal}
                          className="w-full border-b  justify-start gap-3 flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {/* Manage Subscription Icon */}
                          <span>Manage Subscription</span>
                        </button>

                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mt-2"
                        >
                          {/* Sign Out Icon */}
                          Sign Out
                        </button>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* MOBILE MENU */}
          <div className="h-full md:flex hidden gap-8 ">
            {pathname === "/" ? (
              <a
                href="#features"
                className="cursor-pointer text-[#454647] hover:text-primary transition-all h-full text-lg  flex items-center justify-center inner-scroll"
              >
                Features
              </a>
            ) : null}
            {pathname === "/" ? (
              <a
                href="#pricing"
                className="cursor-pointer text-[#454647] hover:text-primary transition-all h-full text-lg  flex items-center justify-center inner-scroll"
              >
                Pricing
              </a>
            ) : null}
            {pathname === "/" ? (
              <a
                href="#download"
                className="cursor-pointer text-[#454647] hover:text-primary transition-all h-full text-lg  flex items-center justify-center inner-scroll"
              >
                Download
              </a>
            ) : null}
            {pathname === "/" ? (
              <a
                href="#faqs"
                className="cursor-pointer text-[#454647] hover:text-primary transition-all h-full text-lg  flex items-center justify-center inner-scroll"
              >
                Faqs
              </a>
            ) : null}
            {auth.isAuthenticated ? (
              <div
                className="cursor-pointer relative h-full text-lg flex items-center justify-center"
                ref={dropdownRef}
              >
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="flex items-center gap-2 relative justify-center w-full rounded-md  px-2 py-2 bg-white text-lg  text-gray-700 hover:bg-gray-50 focus:outline-none"
                >
                  <span>{auth.user.name}</span>
                  <svg
                    className=" h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="top-[45px] z-50 absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div
                      className="pb-1"
                      role="menu"
                      aria-orientation="vertical"
                    >
                      <div className="px-4 flex items-center justify-center flex-col gap-2 py-5 border-b bg-gray-100">
                        <Image
                          src="/assests/icons/profile-placeholder.png"
                          width={35}
                          height={35}
                          alt="profile-placeholder"
                        />
                        <p className="text-sm text-gray-700">
                          {auth.user.email}
                        </p>
                        {/* <div className=" flex items-center justify-around w-full">
                          <p className="text-sm text-gray-700">Tokens</p>
                          <p className="text-sm text-gray-700">1200</p>
                        </div>
                        <div className=" flex items-center justify-around w-full">
                          <p className="text-sm text-gray-700">collections</p>
                          <p className="text-sm text-gray-700">1200</p>
                        </div> */}
                      </div>

                      <button
                        className="w-full flex items-center justify-start gap-3 text-left px-4 py-3 border-b text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={handleBillingPortal}
                      >
                        <span>Manage Subscription</span>
                        {loading ? (
                          <div className="spinner !border-t-black"></div>
                        ) : null}
                      </button>
                      <button
                        className="w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                        onClick={handleLogout}
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="cursor-pointer  h-full text-lg  flex items-center justify-center inner-scroll">
                <Link
                  href={"/login"}
                  className="text-[#454647] hover:text-primary transition-all"
                >
                  Login
                </Link>
                <p>&nbsp; /&nbsp; </p>
                <Link
                  href={"/signup"}
                  className="text-[#454647] hover:text-primary transition-all"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
