import { FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <div className="px-5 pt-10">
        <p className="text-center text-[15px] font-semibold">
          Let's build something special together
        </p>
        <div className="flex justify-center py-5 gap-8 items-center">
          <FaXTwitter className="size-6" />
          <FaInstagram className="size-6" />
          <FaWhatsapp className="size-6" />
          <MdMailOutline className="size-6" />
        </div>
      </div>
    </>
  );
}
