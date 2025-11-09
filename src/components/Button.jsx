import React from "react";

function Button({ title, imgUrl }) {
  return (
    <button className="flex items-center py-4 lg:py-0 gap-3 w-full lg:w-md justify-center bg-Orange font-bold text-Very-dark-blue rounded-lg">
      {imgUrl && <img src={imgUrl} alt="img" />}
      {title}
    </button>
  );
}

export default Button;
