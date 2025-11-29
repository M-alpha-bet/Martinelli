import { FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";

export default function Hero() {
  return (
    <>
      <div className="px-5 md:max-w-[1000px] mx-auto">
        <h2 className="py-4">
          Hi, I'm Martin:
          <br />
          Full Stack Web Developer
        </h2>
        <p className="text-[17px] font-medium pb-5">
          I build web experiences that feel smooth, smart, and a little magical.
          I live in Lagos, Nigeria and I love exploring the Web3 and AI space.
          If your business needs a digital glow-up, let’s make something between
          special and unforgettable.
        </p>
        <div className="flex gap-8 items-center">
          <FaXTwitter className="size-8" />
          <FaInstagram className="size-8" />
          <FaWhatsapp className="size-8" />
          <MdMailOutline className="size-[34px]" />
        </div>
      </div>
    </>
  );
}
