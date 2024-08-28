import React, { useState } from "react";

export default function Gallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex items-start gap-5 ">
      <div className="flex flex-col gap-3">
        {images?.map((image, index) => {
          return (
            <img
              key={image}
              src={image}
              alt=""
              className={`w-[66px] h-[100px] ${
                activeIndex === index
                  ? "border border-gray-800 "
                  : "border-none"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          );
        })}
      </div>
      <div className="w-[540px] h-[810px] relative overflow-hidden ">
        {images.map((image, index) => {
          return (
            <img
              src={image}
              key={index}
              alt=""
              className="w-full h-full absolute top-0 left-0 transition-transform duration-500"
              style={{
                transform: `translateY(${
                  activeIndex === index ? "0" : `${100 * (activeIndex + index)}`
                }%)`,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
