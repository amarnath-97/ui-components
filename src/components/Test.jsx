import React, { useState, useRef, useEffect } from "react";
// import { useSpring, animated } from 'react-spring';

const Accordion = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const accordionRef = useRef(null);

  const handleClick = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const selectedItem = accordionRef.current.children[selectedIndex];
    selectedItem.scrollIntoView({ behavior: "smooth" });
  }, [selectedIndex]);

  return (
    <div className="accordion" ref={accordionRef}>
      {items.map((item, index) => (
        <div key={item.id}>
          <button
            className="accordion-title"
            onClick={() => handleClick(index)}
          >
            {item.question}
          </button>
          {/* <animated.div
            className="accordion-content"
            style={useSpring({
              height: selectedIndex === index ? 'auto' : 0,
            })}
          > */}
          <div>{item.answer}</div>
          {/* </animated.div> */}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
