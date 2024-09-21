import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="h-80 border bg-[#f0f2ff] border-gray-200 rounded-lg shadow-lg relative flex flex-col justify-between transition-transform duration-200 hover:scale-105 focus:outline-none">
      <div className={`h-1 w-full ${event.color} rounded-t-md`}></div>
      <div className="p-6 flex flex-col justify-center items-center h-full">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">{event.title}</h3>
        <p className="text-gray-600 mt-4 sm:mt-7 text-center">{event.date}</p>
        <p className="text-gray-500 mt-8">{event.location}</p>
        <button className="mt-8 sm:mt-12 bg-blue-100 text-[#3f53d8] font-bold py-3 sm:py-4 px-10 sm:px-24 rounded-lg">
          Participate
        </button>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  const events = [
    {
      title: 'Invisible Garden #0',
      date: 'September 30, 2024',
      location: 'Thailand',
      color: 'bg-orange-500',
    },
    {
      title: 'MATRIX 2.0',
      date: 'September 20, 2024',
      location: 'New Delhi, India',
      color: 'bg-black',
    },
    {
      title: 'TechTrek',
      date: 'September 16, 2024',
      location: 'Happening Online',
      color: 'bg-blue-500',
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 text-[#3f53d8]">
        Upcoming <span className="text-black">Events</span>
      </h2>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mt-16 lg:mt-28">

        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
      <div className="btnHolder w-full flex justify-center items-center mt-16">
          <button className="bg-[#3f53d8] text-white px-6 py-3 rounded-md text-lg hover:bg-[#2c3ba7] transition-all">
            More Events
          </button>
        </div>
    </div>
  );
};

export default UpcomingEvents;
