import Link from "next/link";
import dynamic from "next/dynamic";
const CSRHeader = dynamic(() => import("@/components/csr/layout/header"));
const Header = () => {
  return (
    <div className="relative inline-block text-left w-full h-full" id="header">
      <div className="bg-winter-wizard h-[60px] text-[#454647] focus:outline-none z-50">
        <div className="flex items-center justify-between gap-5 mx-auto h-[60px] custom_container">
          <Link href="/">
            <amp-img
              src="/assests/icons/logo.svg"
              width={200}
              height={39}
              alt="logo"
            />
          </Link>

          <CSRHeader />
          {/* Render crs component here */}
          {/* Render crs component here */}
        </div>
      </div>
    </div>
  );
};

export default Header;
