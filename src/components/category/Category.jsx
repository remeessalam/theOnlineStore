import Image from "next/image";
const Category = ({category}) => {
  return (
    <>
      <div className="w-[95vw] flex justify-center items-center flex-wrap gap-3">
        {category?.map((category) => {
          return (
            <div
              key={category.categoryType}
              className="w-[425px] h-[425px] relative overflow-hidden"
            >
              <Image
                className={`${
                  category.stock === `comming-soon`
                    ? `object-fill w-full h-full hover:scale-110 transition duration-[500ms] brightness-[.20] `
                    : `object-fill w-full h-full hover:scale-110 transition duration-[500ms]`
                }`}
                src={category.image}
                alt={category.categoryType}
                fill
                sizes="100vw"
              />
              {category.stock === `comming-soon` && (
                <h1 className="absolute top-[50%] left-[30%] text-2xl font-bold text-white">
                  comming soon...
                </h1>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Category;
