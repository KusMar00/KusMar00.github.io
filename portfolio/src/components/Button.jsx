import React from "react";

const Button = ({ styles, text }) => {
  return (
    <button
      type="button"
      className={`rounded-[10px] py-3 px-4 bg-zinc-700 hover:bg-zinc-800 font-poppins font-medium text-[16px] text-white outline-none ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
