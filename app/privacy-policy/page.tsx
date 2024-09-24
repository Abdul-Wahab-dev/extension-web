import React from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
const Privacy = () => {
  return (
    <>
      <Navbar />
      <div className="md:py-20 sm:py-10 relative">
        <div className="custom_container mx-auto">
          <div className="pt-4">
            <div>
              <h2 className="text-3xl text-[#454647] z-40 font-normal pb-4">
                Privacy Policy for FLEXISAVES Extension
              </h2>
              <p className="py-4">
                At Flexisaves, we are committed to protecting your privacy. This
                Privacy Policy explains how we collect, use, and safeguard your
                information when you use our Chrome extension.
              </p>
            </div>

            <div className="py-2">
              <h2 className="text-3xl text-[#454647] z-40 font-normal pb-4">
                1. Information We Collect
              </h2>
              <p>
                We may collect, use, and process the following categories of
                data for the purposes outlined below:
              </p>
              <div className="px-6 pt-3 space-y-3">
                <p>
                  <span className="font-bold">- Personal Information:</span>{" "}
                  When you sign up for an account on Flexisaves, we collect your
                  username, email address, and password. This information is
                  necessary to allow you to log in and access your saved content
                  from any device.
                </p>
                <p>
                  <span className="font-bold">- Saved Content:</span> The
                  extension enables you to save content (selected text, URLs,
                  etc.) for later use. We store this content in a secure manner
                  so that it can be accessed anytime, anywhere by you.
                </p>
                <p>
                  <span className="font-bold">- Payment Information:</span> We
                  do not store any payment details. For subscription plans, we
                  use Stripe, a trusted third-party payment processor. Your
                  payment information is handled by Stripe in accordance with
                  their privacy policy.
                </p>

                <p>
                  <span className="font-bold">- Technical Data:</span> such as
                  browser type, and device identifiers.
                </p>
                <p>
                  <span className="font-bold">- Other Data: </span> Any other
                  information you voluntarily provide to us.
                </p>
              </div>
            </div>

            <div className="py-4">
              <p>
                We collect and use personal information for the following
                purposes:
              </p>
              <div className="px-6 pt-3 space-y-3">
                <p>- To allow you to log in and manage your account.</p>
                <p>- To provide access to your saved content across devices.</p>
                <p>
                  - To manage your subscription and process payments securely
                  through Stripe.
                </p>
                <p>- To comply with legal obligations.</p>
              </div>
            </div>

            <div className="py-4">
              <h2 className="text-3xl text-[#454647] z-40 font-normal pb-4">
                Data Retention and Security:
              </h2>
              <p>
                We retain personal information for as long as necessary to
                fulfill the purposes outlined in this policy unless a longer
                retention period is required or permitted by law. We implement
                security measures to protect your personal information from
                unauthorized access, disclosure, alteration, or destruction.
              </p>
            </div>
            <div className="py-4">
              <h2 className="text-3xl text-[#454647] z-40 font-normal pb-4">
                Data Sharing:
              </h2>
              <p>
                We do not share, sell, rent, or trade any of your personal
                information or saved content with third parties. Your data is
                used strictly for providing you with the service offered by
                Flexisaves.
              </p>
            </div>

            <div className="pb-6">
              <h2 className="text-3xl text-[#454647] z-40 font-normal pb-4">
                Your Rights:
              </h2>
              <p>
                You have the right to access, update, or delete your account at
                any time. You can also manage your saved content directly
                through the extension. If you need any assistance, please
                contact us at https://www.flexisaves.com/contact
              </p>
            </div>

            <div className="py-4">
              <p>
                To exercise your rights or learn more about our data practices,
                please contact us at https://www.flexisaves.com/contact
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
