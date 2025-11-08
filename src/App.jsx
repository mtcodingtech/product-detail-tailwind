import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import close from "/images/icon-close.svg";
import { navItems } from "./data/dummyData";
import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = (isOpen) => {
    setShowMenu(isOpen)
  }
  return (
    <>
      <div className="relative">
        <div className="max-w-6xl mx-auto">
          <Navbar menuFunc={handleMenu}  />
          <div className="grid grid-cols-2 my-20">
            <ProductImage />
            <ProductInfo />
          </div>
        </div>
        {showMenu && (
          <div className="w-[70%] h-screen bg-amber-200 absolute top-0 p-5">
            <img onClick={() => handleMenu(false)} src={close} alt="close" />
            <ul className="mt-15 grid gap-5 text-xl">
              {
                navItems.map((navItem, index) => {
                 return <li key={index} className="text-Black font-bold">{navItem.title}</li>
                })
              }
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
