import Link from "next/link"

const Footer = () => {
  return <div className="p-8 flex flex-col items-center">
    <Link href="/privacy-policy"><p className="text-white mb-4">Privacy policy</p></Link>
    <p className="text-white text-md flex justify-center m-auto">© SitePro 2024. All Rights Reserved</p>
  </div>
}

export default Footer