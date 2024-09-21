import React from "react";
import ScrollHacksInfo from "./ScrollHacksInfo";
import Prizespage from "./Prizespage";
import Faqpage from "./faqpage";
import HackathonsPage from "./Hackathonspage";

const Mainpage = () => {
  return (
    <div className="bg-white min-h-screen p-8">
      <nav className="flex flex-col md:flex-row justify-between items-center bg-white py-6 max-w-7xl mt-5">
        <div className="flex items-center space-x-4 bg-[#f0f2ff]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz39lCA7z-I7p_JqKF5v3gdzRoaQ7KRmzt1M48JYHX9U-OsUVT"
            alt="Scroll Hacks Logo"
            className="w-12 h-12"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 whitespace-nowrap">Scroll Hacks</h1>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-8 mt-5 md:mt-0">
          <button className="bg-blue-500 text-white px-6 py-2 md:py-3 rounded-md text-lg">Overview</button>
          <button className="bg-blue-500 text-white px-6 py-2 md:py-3 rounded-md text-lg">Prizes</button>
          <button className="bg-blue-500 text-white px-6 py-2 md:py-3 rounded-md text-lg">Schedule</button>
        </div>
      </nav>
      <div className=" flex flex-col md:flex-row items-start mt-5 gap-8 md:gap-20">
  <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-lg max-w-[700px] md:max-w-[800px]"> 
    <img
      src="https://frontendehubbucket.s3.ap-south-1.amazonaws.com/backend/community/events/scroll_hacks1725302427205.jpg"
      alt="Scroll Hacks Poster"
      className="w-full h-auto max-h-[400px] object-cover rounded-lg mx-0 my-1"
    />
  </div>

  <div className="bg-[#f0f2ff] p-6 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full md:w-[10%] lg:w-[30%] max-w-[1500px] md:mr-5 h-auto md:h-[400px]">
    <div className="flex items-center space-x-2 mb-4">
      <span className="text-blue-600">🔗</span>
      <span className="text-gray-600">Rising From</span>
    </div>
    <p className="text-gray-700 text-lg mb-4">Sep 27 - 29, 2024</p>
    <p className="text-gray-500 text-sm mb-6">Happening Online</p>
    <div className="bg-blue-100 p-4 rounded-lg mb-6">
      <p className="text-blue-600 font-semibold">Applications Close In</p>
      <p className="text-blue-900 text-2xl font-bold">1d:14h:11m</p>
    </div>
    <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold">
      Apply now
    </button>
</div>

</div>
      <ScrollHacksInfo />
      <Prizespage />
      <Faqpage />
      <HackathonsPage/>
    </div>
    
  );
};

export default Mainpage;
