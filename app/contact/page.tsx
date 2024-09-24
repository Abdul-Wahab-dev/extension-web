"use client";
import React, { useState } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { handleContact } from "@/lib/services/product";
import { toast } from "react-toastify";
const Contact = () => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [detail, setDetail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (!email || !detail || !subject) {
        toast.error("Fields require");
        return;
      }
      const res = await handleContact(email, subject, detail);
      toast.success("Your request is submitted!");
      setEmail("");
      setDetail("");
      setSubject("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Failed to process your request");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="md:py-20 sm:py-10 relative">
        <div className="custom_container mx-auto">
          <section className="bg-white  ">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
              <h2 className="text-3xl text-[#454647] z-40 font-normal mb-4 sm:text-5xl text-center">
                Contact Us
              </h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
                Got a technical issue? Want to send feedback about a beta
                feature? Need details about our Business plan? Let us know.
              </p>
              <form action="#" className="space-y-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-primary font-medium text-white w-fit rounded-md flex items-center justify-center gap-2"
                >
                  <span>Send message</span>
                  {loading ? (
                    <div className="spinner" id="spinner"></div>
                  ) : null}
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
