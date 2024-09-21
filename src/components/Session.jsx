const CardEvent = (props) => {
  return (
    <>
      <div className="cardHolder bg-[#f0f2ff] shadow-lg p-3 pb-6 rounded-md border w-full sm:w-[80%] md:w-[45%] lg:w-[30%] xl:w-[25%] flex flex-col justify-center items-center">
        <div className="imageHolder bg-white p-1 w-full h-[25vh] md:h-[30vh] lg:h-[35vh] xl:h-[30vh] border-2 border-lightGrey mt-1 rounded-md flex justify-center items-center">
          <img src={props.image} className="max-w-full max-h-full object-contain" alt="event" />
        </div>
        <div className="mt-2 space-y-2 text-center">
          <p className="text-lg md:text-xl font-medium">
            <b>{props.event}</b>
          </p>
          <p className="text-sm md:text-base text-Grey">Topic: {props.topic}</p>
          <p className="text-sm md:text-base text-Grey">Category: {props.category}</p>
        </div>
      </div>
    </>
  );
};

const Session = () => {
  return (
    <>
      <div className="pb-5 2xl:h-full 2xl:pb-10 flex flex-col items-center">
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 md:mb-10 text-[#3f53d8] mt-10 sm:mt-20">
            Upcoming <span className="text-black">Sessions</span>
          </h2>
        </div>

        <div className="cardArea flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-20 mt-12 w-full px-4 md:px-10">
          <CardEvent
            image="https://clinicside.com/wp-content/uploads/2023/12/medical-quizzes-by-clinic-side-e1703090735112.png"
            event="Online Quiz"
            topic="Web Development"
            category="Open to All"
          />
          <CardEvent
            image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSNktPyK5S7dSZVN-3WOACPXjNMkDTbftXaLolC5bh6HeF4kzUs"
            event="Technical Session"
            topic="How to Start Coding?"
            category="Open to All"
          />
          <CardEvent
            image="https://cdn-icons-png.flaticon.com/512/2621/2621230.png"
            event="Hackathon"
            topic="Open Innovation"
            category="Intermediate Coders"
          />
        </div>

        <div className="btnHolder w-full flex justify-center items-center mt-8">
          <button className="bg-[#3f53d8] text-white px-6 py-3 rounded-md text-lg hover:bg-[#2c3ba7] transition-all">
            More Session
          </button>
        </div>
      </div>
    </>
  );
};

export default Session;
