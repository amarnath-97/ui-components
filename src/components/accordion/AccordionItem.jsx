import React, { useState } from "react";

const AccordionItem = ({ item }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="accordion__item">
      <div
        className="heading p-3 border-b flex items-center justify-between bg-lime-600 rounded-lg"
        onClick={() => setShow(!show)}
      >
        <h1 className="text-white">{item.question}</h1>
        <span className="p-2  rounded-full shadow-md bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-4 h-4 transition-all ease-in-out delay-100 ${
              show ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
      {show && <div className={`content p-3 text-sm text-justify rounded-lg`}>{item.answer}</div>}
    </div>
  );
};

export default AccordionItem;
