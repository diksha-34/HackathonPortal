import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [currentWord, setCurrentWord] = useState('hackathons');

  const words = ['hackathons', 'fellowship', 'grants'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f2ff] font-sans flex items-center justify-center">
      <main className="flex flex-col items-center justify-center px-8 py-12 relative overflow-hidden w-full max-w-7xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-gray-700 leading-tight">
          Redefining <span className="text-black-600 font-bold">economic</span> <br />
          <span className="text-black-600 font-bold">opportunities</span> for builders with <br />
          <span className="underline decoration-[#3f53d8] text-black-600 font-bold">{currentWord}</span>
        </h1>

        <form className="flex justify-center mt-20" onSubmit={(e) => e.preventDefault()}>
          <p className="text-lg mt-10 ">Join Us</p>
          <br />
          <div className="flex items-center mt-20">
            <input
              type="email"
              placeholder="Your email"
              className="border-2 border-gray-300 rounded-md h-[50px] py-2 px-6 h-20 focus:outline-none focus:border-blue-600"
              required
            />
            <button
              type="submit"
              className="bg-[#3f53d8] text-white rounded-r-full h-[50px] px-10 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </button>
          </div>
        </form>

        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTDbeOXT6urVgHVtfMgb7meUt1K0Hr3WCPEVmdCEqbUcOGLzW4Z"
            className="absolute top-10 left-10 w-16 h-16 animate-move"
            alt="shape"
          />
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKe8OHwZYvZPlNSRN1lBGv3RBRSi5K0w76BqTPMNBDtgRVGMaA"
            className="absolute top-10 right-20 w-20 h-20 animate-move"
            alt="shape"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1680/1680471.png"
            className="absolute bottom-40 left-20 w-24 h-24 animate-move"
            alt="shape"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAIXTa-5dx-O15PzoZefcS0hvLL0aYuL8FD2tuZgrYpY2XGGJY"
            className="absolute bottom-40 right-80 w-30 h-20 animate-spin-slow"
            alt="shape"
          />
        </div>
      </main>
    </div>
  );
};

export default Banner;
