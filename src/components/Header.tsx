import { TbDownload } from "react-icons/tb";

export default function Header() {
  return (
    <div>
      <div className="px-5 pt-5 pb-3 md:px-40 flex justify-between items-center">
        <img src="/images/logoCaps.png" alt="logo" className="w-[110px]" />
        <div>
          <button className="bg-secondary px-3 flex items-center gap-1 py-1 rounded-full">
            <TbDownload /> Resume
          </button>
        </div>
      </div>
    </div>
  );
}
