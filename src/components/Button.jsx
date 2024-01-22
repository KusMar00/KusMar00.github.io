import React from "react";

const Button = ({ styles, text, link }) => {
  return (
    <button
      type="button"
      className={`rounded-[10px] py-3 px-4 bg-zinc-800 border-2 border-solid border-zinc-800 hover:border-secondary font-poppins font-medium text-[16px] text-white outline-none ${styles}`}
    >
      <a href={link}>{text}</a>
    </button>
  );
};

export default Button;
