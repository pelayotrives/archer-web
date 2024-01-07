import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary_btn hover:bg-primary_btn_hov text-white w-fit font-medium py-2 px-6 rounded"
    >
      {children}
    </button>
  );
};

export default Button;
