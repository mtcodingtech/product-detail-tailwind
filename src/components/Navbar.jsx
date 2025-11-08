import React from "react";
import logo from "/images/logo.svg";
import cart from "/images/icon-cart.svg";
import avatar from "/images/image-avatar.png";
import menu from "/images/icon-menu.svg";
import NavItems from "./NavItems";

function Navbar({ menuFunc }) {
  return (
    <>
      <div className="flex justify-between p-4 md:py-6 border-b-[0.5px] border-Grayish-blue">
        <div className="flex items-center gap-10">
          <img
            src={menu}
            onClick={() => menuFunc(true)}
            className="md:hidden"
            alt="menu"
          />
          <img src={logo} alt="logo" />
          <NavItems />
        </div>
        <div className="flex items-center gap-8">
          <img src={cart} alt="cart" />
          <img src={avatar} alt="avatar" className="w-10" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
