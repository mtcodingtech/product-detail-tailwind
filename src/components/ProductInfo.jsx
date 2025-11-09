import React from "react";
import Quantity from "./Quantity";
import Button from "./Button";
import cart from "/images/icon-cart.svg";

function ProductInfo() {
  return (
    <div className="place-self-center w-full">
      <h5 className="uppercase text-[11px] font-semibold tracking-widest text-Dark-grayish-blue">
        Sneaker Company
      </h5>
      <h1 className="text-3xl font-bold mt-3 mb-6">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-sm leading-5 mb-3 text-Dark-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex gap-3 items-center mt-6">
        <h2 className="text-2xl font-bold">$125.00</h2>
        <span className="bg-Black text-white rounded-md px-2 text-xs py-0.5">
          50%
        </span>
      </div>
      <h6 className="line-through mt-2 text-sm text-Dark-grayish-blue font-bold">
        $250.00
      </h6>
      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        <Quantity />
        <Button title={"Add to cart"} imgUrl={cart} />
      </div>
    </div>
  );
}

export default ProductInfo;
