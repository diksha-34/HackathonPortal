import React from 'react';

const Hackathonspage = () => {
  const hackathons = [
    {
      name: 'HackOff v4.0',
      theme: 'No Restrictions',
      participants: [
        { image: 'https://thesituationist.wordpress.com/wp-content/uploads/2011/01/participate-image.jpg' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBHRY301iPQIdRmXY_ojoA00tmUzPOWDMCw&s' },
      ],
      startDate: '10/11/24',
      platforms: [
        { name: 'link', link: '', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JLdHiZ5uuoTYyXZ3EYDU_-1bmsrY6iSS4g&s' },
        { name: 'delete', link: '', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png' },
      ],
    },
    {
      name: 'CodeWar 2024',
      theme: 'Artificial Intelligence',
      participants: [
        { image: 'https://thesituationist.wordpress.com/wp-content/uploads/2011/01/participate-image.jpg' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBHRY301iPQIdRmXY_ojoA00tmUzPOWDMCw&s' },
      ],
      startDate: '15/11/24',
      platforms: [
        { name: 'github', link: '', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JLdHiZ5uuoTYyXZ3EYDU_-1bmsrY6iSS4g&s' },
        { name: 'twitter', link: '', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png' },
      ],
    },
    {
      name: 'Hack the Planet',
      theme: 'Environmental Sustainability',
      participants: [
        { image: 'https://thesituationist.wordpress.com/wp-content/uploads/2011/01/participate-image.jpg' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBHRY301iPQIdRmXY_ojoA00tmUzPOWDMCw&s' },
      ],
      startDate: '20/11/24',
      platforms: [
        { name: 'linkedin', link: '', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JLdHiZ5uuoTYyXZ3EYDU_-1bmsrY6iSS4g&s' },
        { name: 'facebook', link: '', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png' },
      ],
    },
    {
      name: 'DevXtreme 2024',
      theme: 'Mobile App Development',
      participants: [
        { image: 'https://thesituationist.wordpress.com/wp-content/uploads/2011/01/participate-image.jpg' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBHRY301iPQIdRmXY_ojoA00tmUzPOWDMCw&s' },
      ],
      startDate: '01/12/24',
      platforms: [
        { name: 'youtube', link: '', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JLdHiZ5uuoTYyXZ3EYDU_-1bmsrY6iSS4g&s' },
        { name: 'instagram', link: '', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png' },
      ],
    },
    {
      name: 'FinTech Innovators',
      theme: 'Financial Technology',
      participants: [
        { image: 'https://thesituationist.wordpress.com/wp-content/uploads/2011/01/participate-image.jpg' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBHRY301iPQIdRmXY_ojoA00tmUzPOWDMCw&s' },
      ],
      startDate: '05/12/24',
      platforms: [
        { name: 'reddit', link: '', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JLdHiZ5uuoTYyXZ3EYDU_-1bmsrY6iSS4g&s' },
        { name: 'quora', link: '', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png' },
      ],
    },
    {
        name: 'FinTech Innovators',
        theme: 'Financial Technology',
        participants: [
          { image: 'https://thesituationist.wordpress.com/wp-content/uploads/2011/01/participate-image.jpg' },
          { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTBHRY301iPQIdRmXY_ojoA00tmUzPOWDMCw&s' },
        ],
        startDate: '05/12/24',
        platforms: [
          { name: 'reddit', link: '', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JLdHiZ5uuoTYyXZ3EYDU_-1bmsrY6iSS4g&s' },
          { name: 'quora', link: '', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png' },
        ],
      },
  ];

  const HackathonCard = ({ name, theme, participants, startDate, platforms }) => {
    return (
      <div className="bg-[#f0f2ff] shadow-md rounded-lg p-6 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">{name}</h3>
          <div className="flex gap-2">
            {platforms.map((platform, index) => (
              <a key={index} href={platform.link} target="_blank" rel="noreferrer">
                <img src={platform.icon} alt={platform.name} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mt-4">
          <p className="text-gray-500">{theme}</p>
          <div className="flex items-center mt-2 sm:mt-0">
            {participants && (
              <div className="flex -space-x-2">
                {participants.map((p, index) => (
                  <img
                    key={index}
                    src={p.image}
                    alt="Participant"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
            )}
            <span className="ml-2 text-green-500">+{participants.length} participating</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <span className="bg-gray-200 text-sm rounded-full px-3 py-1">Offline</span>
          <span className="bg-gray-200 text-sm rounded-full px-3 py-1">Open</span>
          <span className="text-sm">Starts {startDate}</span>
        </div>
        <button className="mt-8 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Apply now
        </button>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">More hackathons</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hackathons.map((hackathon, index) => (
          <HackathonCard key={index} {...hackathon} />
        ))}
      </div>
    </div>
  );
};

export default Hackathonspage;