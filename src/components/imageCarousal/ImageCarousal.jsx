import Image from "next/image";
import React, { useEffect, useState } from "react";
import leftArrow from "../../../public/icons/leftArrow.svg";
import rightArrow from "../../../public/icons/rightArrow.svg";
const ImageCarousal = ({ carousalImages }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeoutId = carousalControler();
    return () => clearTimeout(timeoutId);
  }, [count]);

  const carousalControler = () => {
    console.log(count, "thisiscount");
    return setTimeout(() => {
      console.log(count, "thisiscount");
      setCount((prev) => {
        if (prev === -1 || count >= carousalImages.length - 1) {
          return 0;
        }
        return (prev += 1);
      });
      // nextImage();
    }, 5000);
  };
  const preImage = () => {
    setCount((prev) => {
      if (count === 0) {
        return carousalImages.length - 1;
      }
      return (prev -= 1);
    });
  };
  const nextImage = () => {
    setCount((prev) => {
      if (prev === -1 || prev >= carousalImages.length - 1) {
        return 0;
      }
      return (prev += 1);
    });
  };
  return (
    <div className="w-full flex items-center justify-center pl-3 pr-3">
      <div
        onClick={preImage}
        className="flex justify-center items-center p-3  bg-gray-500 rounded-full backdrop-blur-xl bg-black/10"
      >
        <Image
          src={leftArrow}
          alt="left"
          width={37}
          height={62}
          className="mr-1"
        />
      </div>
      <div className="w-full">
        <div className="max-w-[1500px] h-[56vh] m-auto relative ">
          {carousalImages.map((img, i) => {
            console.log(count, i);
            return (
              <Image
                key={img.image}
                // src={carousalImages[count]?.image}
                src={img?.image}
                alt="carousal image"
                fill
                sizes="100vw"
                className={` flex w-[1500px] h-[56vh] object-contain ${
                  count === i ? `block` : `hidden`
                }`}
              />
            );
          })}
        </div>
      </div>
      <div
        onClick={nextImage}
        className="flex justify-center items-center p-3  bg-gray-500 rounded-full backdrop-blur-xl bg-black/10"
      >
        <Image
          src={rightArrow}
          alt="left"
          width={37}
          height={62}
          className="ml-1"
        />
      </div>
    </div>
  );
};

export default ImageCarousal;
