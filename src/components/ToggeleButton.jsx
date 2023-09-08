import React from "react";

const ToggleButton = ({
  checked,
  onChange,
  color = "bg-slate-100",
  bgColor = "bg-[#95d444]",
  disabled = false,
  variant = "sm",
}) => {
  let variantType;

  switch (variant) {
    case "sm":
      variantType = "w-10 h-[1.4rem]";
      break;
    case "lg":
      variantType = "w-20 h-11";
      break;
    default:
      variantType = "w-14 h-8";
      break;
  }

  return (
    <label
      className={` p-1 relative ${variantType}  rounded-full flex items-center transition-all ease-in-out delay-100 ${
        checked ? `${bgColor}` : "bg-gray-300"
      }`}
    >
      <input
        type="checkbox"
        className="absolute opacity-0 w-0 h-0"
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(!checked)}
      />
      <span
        className={`${color} shadow-lg absolute transition-all delay-75 ${
          checked
            ? "rounded-full h-[86%] w-[50%] left-[46%]"
            : "rounded-full h-[86%] w-[50%] left-1"
        } cursor-pointer inline-block rounded-full shadow-inner`}
      /> 
    </label>
  );
};

export default ToggleButton;
