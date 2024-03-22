import React from "react";
import "../App.css";

function PAGE2() {
  return (
    <div className="min-h-[100vh] w-full">
      <div className="py-[4vw] bg-[#004D43] rounded-2xl" data-scroll data-scroll-speed="0.1">
        <div className="border-y-2 border-zinc-400 overflow-hidden inline-block text-nowrap text-white w-full">
          <div className="infinite-banner inline-block">
            <h1>WE ARE OCHI</h1>
            <h1>WE ARE OCHI</h1>
            <h1>WE ARE OCHI</h1>
            <h1>WE ARE OCHI</h1>
          </div>
          <div className="infinite-banner inline-block">
            <h1>WE ARE OCHI</h1>
            <h1>WE ARE OCHI</h1>
            <h1>WE ARE OCHI</h1>
            <h1>WE ARE OCHI</h1>
          </div>
          <div className="infinite-banner inline-block">
            <h1>WE ARE OCHI</h1>
            <h1>WE ARE OCHI</h1>
            <h1>WE ARE OCHI</h1>
            <h1>WE ARE OCHI</h1>
          </div>
          <div className="infinite-banner inline-block">
            <h1>WE ARE OCHI</h1>
            <h1>WE ARE OCHI</h1>
            <h1>WE ARE OCHI</h1>
            <h1>WE ARE OCHI</h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#CDEA68] rounded-xl min-h-[100vh]" data-scroll data-scroll-speed="-0.2">
        <div className="w-full p-[3vw] pb-[5vw]">
          <p className="mt-4 text-6xl font-md tracking-tighter">
            Ochi is a strategic partner for fast-grow­ing tech businesses that
            need to <span className="border-b-4 border-black">raise funds</span>
            , <span className="border-b-4 border-black">sell prod­ucts</span>,{" "}
            <span className="border-b-4 border-black">
              ex­plain com­plex ideas
            </span>
            , and{" "}
            <span className="border-b-4 border-black">hire great peo­ple</span>.
          </p>
        </div>
        <div className="border-2 border-slate-500/40 flex px-[3vw] pt-[1vw] pb-[8vw] text-[18px]">
          <div className="flex-1">
            <p>What you can expect:</p>
          </div>
          <div className="flex-1 flex">
            <div className="flex-1 pr-[10vw]">
              <p>
                We create tailored presentations to help you persuade your
                colleagues, clients, or investors. Whether it’s live or digital,
                delivered for one or a hundred people.
              </p>
              <p className="mt-2">
                We believe the mix of strategy and design (with a bit of coffee)
                is what makes your message clear, convincing, and captivating.
              </p>
            </div>
            <div className="w-[30%] flex flex-col justify-center">
              <span className="">S:</span>
              <a href="">Instagram</a>
              <a href="">Behance</a>
              <a href="">Facebook</a>
              <a href="">Linkdin</a>
            </div>
          </div>
        </div>
        <div className="w-full px-[3vw] pt-5 flex pb-10">
          <div className="w-1/2 h-[70vh]">
            <h2 className="text-[3.5vw]">Our approach:</h2>
            <div className="w-[12vw] mt-2 px-6 bg-black rounded-full h-[8.5vh] flex justify-between items-center text-white">
              <span>READ MORE</span>
              <span className="bg-white w-2 h-2 rounded-full"></span>
            </div>
          </div>
          <div className="w-1/2 h-[70vh] bg-purple-400 rounded-xl overflow-hidden">
            <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" className="w-full h-full object-cover" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PAGE2;
