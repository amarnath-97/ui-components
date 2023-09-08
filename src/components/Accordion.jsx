import React, { useState } from "react";

const Accordion = ({item}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion w-full h-auto border shadow-sm">
      <div className="accordion__item">
        <div className="heading p-3 border-b flex items-center justify-between" onClick={() => setIsOpen(!isOpen)}>
          <h1>{item.question}</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 transition-all ease-in-out delay-100 ${isOpen? "rotate-180": ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        {isOpen && <div className={`content p-3`}>
         {item.answer}
        </div>}
      </div>
    </div>
  );
};

export default Accordion;
