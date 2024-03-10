"use client";
import ImageCarousal from "@/components/imageCarousal/ImageCarousal";
import Category from "@/components/category/Category";
import data from "../../data.json";

const MenPage = () => {
  return (
    <>
      <div className="w-full ">
        <div className="flex justify-center w-full flex-col items-center  mb-6">
          <ImageCarousal carousalImages={data?.mencarousalImage} />
          <h1 className="font-extrabold text-3xl m-3">CATEGORIES</h1>
          <Category category={data?.mencategories} />
        </div>
      </div>
    </>
  );
};

export default MenPage;
