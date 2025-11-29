import { FaLocationArrow } from "react-icons/fa6";

export default function Projects() {
  return (
    <>
      <div className="px-5 pt-8">
        <h2>Selected Projects</h2>
        <div>
          <h3 className="pt-2">. Rox Tech Mart</h3>
          <div className="h-[400px] w-full bg-blue-500 rounded-2xl mb-2"></div>

          <p className="text-[14px] px-1">
            RoxMart is an online shopping platform offering fast, reliable, and
            affordable tech products. I built the frontend with a clean,
            responsive UI and smooth user flows, and I handled the backend setup
            that powers product management, payments, and order tracking. The
            result is a simple, modern e-commerce experience optimized for both
            mobile and desktop users.
          </p>
          <div className="flex items-center gap-1 underline px-1 pt-3">
            <p className="text-[14px] font-semibold">view project </p>
            <FaLocationArrow className="size-[13px]" />
          </div>
        </div>
        <div>
          <h3 className="pt-8">. Teemo Ai</h3>
          <div className="h-[400px] w-full bg-purple-500 rounded-2xl mb-2"></div>

          <p className="text-[14px] px-1">
            Teemo AI is a smart digital assistant platform designed to help
            users get faster, more accurate answers powered by AI. I built the
            site using Wix, crafting a clean, intuitive interface that makes
            interacting with the assistant effortless. I focused on smooth
            navigation, clear content structure, and a responsive design that
            works seamlessly across devices. The result is a simple,
            user-friendly experience accessible to anyone, anywhere.
          </p>
          <div className="flex items-center gap-1 underline px-1 pt-3">
            <p className="text-[14px] font-semibold">view project </p>
            <FaLocationArrow className="size-[13px]" />
          </div>
        </div>
        <div>
          <h3 className="pt-8">. Auctix</h3>
          <div className="h-[400px] w-full bg-yellow-500 rounded-2xl mb-2"></div>

          <p className="text-[14px] px-1">
            Auctix is an auction web app built with Next.js and powered by
            Sanity’s CMS. It allows users to list items, manage bids, and
            explore active auctions in real time. Even as a demo, it pushes
            backend functionality to its limits, from dynamic content management
            to secure data handling and smooth server-side interactions. The
            result is a clean, modern auction experience that showcases the full
            range of what Next.js and a headless CMS can do together.
          </p>
          <div className="flex items-center gap-1 underline px-1 pt-3">
            <p className="text-[14px] font-semibold ">view project </p>
            <FaLocationArrow className="size-[13px]" />
          </div>
        </div>
      </div>
    </>
  );
}
