import React, { useState } from "react";
import { productImages } from "../data/dummyData";

function ProductImage() {
  const [selectedImg, setSelectedImg] = useState(productImages[0].url);
  return (
    <div className=" w-sm mx-auto">
      <img src={selectedImg} alt="img" className="w-full rounded-xl" />
      <div className="flex gap-6 mt-6">
        {productImages.map((item, index) => {
          return (
            <div
              key={index}
              className="relative custom before:w-full before:h-full before:absolute before:bg-[#ffffff8c] "
            >
              <img
                src={item.thumbnail}
                className="rounded-lg w-20 h-20 object-cover border-Orange border-2"
                alt="img"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductImage;
