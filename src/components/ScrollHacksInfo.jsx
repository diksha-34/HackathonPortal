import React from "react";

const ScrollHacksInfo = () => {
  return (
    <div className="bg-[#f0f2ff] p-6 rounded-lg shadow-lg max-w-4xl  my-8 max-w-[700px] md:max-w-[800px]">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Scroll Beyond Limits, Create the Future</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        ScrollHacks is a 3-day online hackathon open to all! Unleash your potential, compete in various categories, 
        and showcase your skills and creativity with like-minded peers. Challenge yourself, learn new skills, 
        and pitch your projects to an audience of peers and sponsors. Dive into ScrollHacks—where creativity knows no limits.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        Join our community ScrollJourney: <a href="#" className="text-blue-600 font-semibold">Join Now For Latest Updates</a>
      </p>
      <h3 className="text-xl font-bold text-gray-800 mb-2">Rules</h3>
      <ul className="list-disc list-inside text-gray-600">
        <li><a href="#" className="text-blue-600">Follow the Code of Conduct</a></li>
      </ul>
      <h3 className="text-xl font-bold text-gray-800 mt-6 mb-2">Find us on</h3>
      <div className="flex space-x-4">
        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JLdHiZ5uuoTYyXZ3EYDU_-1bmsrY6iSS4g&s" alt="Social Icon 1" className="w-8 h-8" /></a>
        <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" alt="Social Icon 2" className="w-8 h-8" /></a>
        <a href="#"><img src="https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ" alt="Social Icon 3" className="w-8 h-8" /></a>

      </div>
    </div>
  );
};

export default ScrollHacksInfo;
