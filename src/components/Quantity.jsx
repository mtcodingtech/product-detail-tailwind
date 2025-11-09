import React from "react";
import minus from "/images/icon-minus.svg";
import plus from "/images/icon-plus.svg";

function Quantity() {
  return (
    <div className="flex justify-between items-center bg-Light-grayish-blue p-4 w-full lg:w-40 rounded-md">
      <img className="w-3" src={minus} alt="minus" />
      <p className="font-bold text-Very-dark-blue">0</p>
      <img className="w-3" src={plus} alt="plus" />
    </div>
  );
}

export default Quantity;
