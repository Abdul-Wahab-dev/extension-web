import Logo from "@/assets/common/sitepro.ai.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="py-6 px-8">
      <div className=" container">
        <Image src={Logo} />
      </div>
    </div>
  );
};

export default Navbar;
