export default function SkillStack() {
  return (
    <>
      <div className="px-5 pt-8">
        <h2>Frontend Stack</h2>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <div className="border border-secondary flex items-center gap-2 px-3 rounded-full py-1">
            <span className="text-[13px] font-semibold">ReactJS</span>
            <img
              src="/images/react-icon.png"
              alt="react-icon"
              className="w-[16px] h-[16px]"
            />
          </div>
          <div className="border border-secondary flex items-center gap-2 px-3 rounded-full py-1">
            <span className="text-[13px] font-semibold">GSAP</span>
            <img
              src="/images/gsap.png"
              alt="react-icon"
              className="w-[20px] h-[16px]"
            />
          </div>
          <div className="border border-secondary flex items-center gap-2 px-3 rounded-full py-1">
            <span className="text-[13px] font-semibold">Motion</span>
            <img
              src="/images/framer-motion.png"
              alt="react-icon"
              className="w-[20px] h-[16px]"
            />
          </div>
          <div className="border border-secondary flex items-center gap-2 px-3 rounded-full py-1">
            <span className="text-[13px] font-semibold">Web3 Wallets</span>
            <img
              src="/images/wallet-connect.png"
              alt="react-icon"
              className="w-[16px] h-[14px]"
            />
          </div>
        </div>
      </div>
      <div className="px-5 pt-8">
        <h2>Backend Stack</h2>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <div className="border border-secondary flex items-center gap-2 px-3 rounded-full py-1">
            <span className="text-[13px] font-semibold">NextJS</span>
            <img
              src="/images/nextjs.png"
              alt="react-icon"
              className="w-[16px] h-[16px]"
            />
          </div>
          <div className="border border-secondary flex items-center gap-2 px-3 rounded-full py-1">
            <span className="text-[13px] font-semibold">Databases</span>
            <div className="flex items-center">
              <img
                src="/images/postgres.png"
                alt="react-icon"
                className="w-[20px] h-[16px]"
              />
              <img
                src="/images/mongodb.png"
                alt="react-icon"
                className="w-[20px] h-[16px] -ml-1"
              />
            </div>
          </div>
          <div className="border border-secondary flex items-center gap-2 px-3 rounded-full py-1">
            <span className="text-[13px] font-semibold">Authentication</span>
            <img
              src="/images/authjs.png"
              alt="react-icon"
              className="w-[15px] h-[16px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
