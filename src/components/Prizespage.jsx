import React from "react";

const Prizespage = () => {
  return (
    <div className="bg-[#f0f2ff] min-h-[350px] flex flex-col  max-w-4xl  my-8 max-w-[700px] md:max-w-[800px] justify-center items-center p-4">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">$12,550</h1>
        <p className="text-black text-xl md:text-2xl font-bold">Available in Prizes</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz39lCA7z-I7p_JqKF5v3gdzRoaQ7KRmzt1M48JYHX9U-OsUVT"
            alt="Scroll Hacks"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800">Scroll Hacks</h2>
          <p className="text-gray-500 mt-2">$12,000</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUFm0wR0vkkY1YmWO7DR7smo81waHJe15QIw&s"
            alt="Polygon"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800">Polygon</h2>
          <p className="text-gray-500 mt-2">$200</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <img
            src="https://cdn.prod.website-files.com/665ae12004a0ecb37f2449b7/665ae12004a0ecb37f244a3c_Frame%20512918836.svg"
            alt="ETHIndia"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800">ETHIndia</h2>
          <p className="text-gray-500 mt-2">$100</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <img
            src="https://cryptologos.cc/logos/aptos-apt-logo.png"
            alt="Aptos"
            className="w-16 h-16 mb-4"
          />
          <h2 className="text-xl font-bold text-gray-800">Aptos</h2>
          <p className="text-gray-500 mt-2">$250</p>
        </div>

     
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg flex justify-center items-center">
          <button className="text-white text-lg font-semibold">All Prizes →</button>
        </div>
      </div>
    </div>
  );
};

export default Prizespage;
