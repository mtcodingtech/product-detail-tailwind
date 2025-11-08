import React from "react";
import { navItems } from "../data/dummyData";

function NavItems() {
  return (
    <ul className="md:flex gap-8 hidden">
      {navItems.map((navItem, index) => {
        return <li key={index} className="text-Dark-grayish-blue">{navItem.title}</li>;
      })}
    </ul>
  );
}

export default NavItems;
