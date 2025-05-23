import Image from "next/image";
import Link from "next/link";
import FramerDiv from "@/components/framermotion/divblock";
const Footer = () => {
  return (
    <div>
      <div className="w-full bg-[#f9f9f9] relative py-10 overflow-hidden">
        <div>
          <div className="custom_container mx-auto overflow-hidden">
            <div className="flex justify-between text-slate-800 flex-col items-center gap-10">
              <div className="w-[100%] flex flex-col items-center justify-center gap-5">
                <Link href="/">
                  <h2 className="text-3xl font-bold">
                    <span className="text-primary">Jalandher</span>
                    Sizing
                  </h2>
                </Link>
                <p className="text-center mt-3 text-lg">
                  Our Reputation Is Built On Solid Ground
                </p>
              </div>

              <ul className="flex flex-col sm:flex-row gap-4 sm:p-4">
                <li>
                  <a
                    href="mailto:abdulwahabdev0@gmail.com"
                    className="flex gap-3 items-center "
                  >
                    <div className="w-[40px] h-[40px] bg-white flex items-center justify-center shadow-lg rounded-md">
                      <Image
                        src={"/assests/icons/email.png"}
                        width={23}
                        height={60}
                        alt="ai-icon"
                      />
                    </div>
                    <div className="text-slate-800 leading-tight">
                      <p className="font-semibold text-sm">Email</p>
                      <p className="text-sm">support@Jalandharsizing.com</p>
                    </div>
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-[40px] h-[40px] bg-white flex items-center justify-center shadow-lg rounded-md border-gray-400">
                    <Image
                      src={"/assests/icons/location-black.png"}
                      width={23}
                      height={60}
                      alt="ai-icon"
                    />
                  </div>
                  <div className="text-slate-800 leading-tight">
                    <p className="font-semibold text-sm">Address</p>
                    <p className="text-sm">Faisalabad,Pakistan</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f9f9f9] p-5">
        <div className="custom_container mx-auto flex items-center justify-center text-gray-800">
          <p>JalandherSizing © 2020. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
