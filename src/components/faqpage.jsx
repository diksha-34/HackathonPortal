import React from "react";
import { useState } from "react";

const Faqpage = () => {
  const [faqs] = useState([
    { question: "Team size", answer: "2 - 5" },
    { question: "Registration Cost?", answer: "Free for all" },
  ]);

  return (
    <div className="bg-[#f0f2ff] min-h-[350px] flex flex-col  max-w-4xl  my-8 max-w-[700px] md:max-w-[800px] justify-center items-center p-4">
   
      <h1 className="text-5xl font-bold text-gray-800 mb-8">FAQs</h1>

      <div className="mb-8 w-full max-w-md">
        <input
          type="text"
          placeholder="Search FAQs"
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqpage;
