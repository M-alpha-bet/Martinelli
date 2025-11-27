import { TbDownload } from "react-icons/tb";

export default function Header() {
  return (
    <div>
      <div className="pl-4 pr-5 py-5 flex justify-between items-center">
        <img src="/images/logo1.png" alt="logo" className="w-[110px]" />
        <div>
          <button className="bg-secondary px-3 flex items-center gap-1 py-1 rounded-full">
            <TbDownload /> Resume
          </button>
        </div>
      </div>
    </div>
  );
}
