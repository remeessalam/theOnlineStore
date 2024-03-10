import Image from "next/image";
import Search from "../../../public/icons/search.svg";
import Heart from "../../../public/icons/heart.svg";
import User from "../../../public/icons/user.svg";
import Cart from "../../../public/icons/cart.svg";
// import style from "./SecHeader.module.css";
const SecHeader = () => {
  return (
    <>
      <div className="bg-white flex justify-around flex-row h-20 shadow-md sticky top-0 z-10">
        <div>
          <ul className="flex-row flex justify-center items-center h-20  text-base gap-4">
            <li className="cursor-pointer font-bold p-4 border-b-4 border-transparent   hover:border-b-4 hover:border-[#023246] text-slate-500  hover:text-mainColor">
              TOPWEAR
            </li>
            <li className="cursor-pointer font-bold p-4 border-b-4 border-transparent  hover:border-b-4 hover:border-[#023246]  text-slate-500 hover:text-mainColor">
              BOTTOMWEAR
            </li>
            {/* <li className="cursor-pointer font-bold">SNEAKERS</li> */}
            <li className="cursor-pointer font-bold p-4 border-b-4 border-transparent  hover:border-b-4 hover:border-[#023246]  text-slate-500 hover:text-mainColor">
              COLLECTIONS
            </li>
            <li className="cursor-pointer font-bold p-4 border-b-4 border-transparent  hover:border-b-4 hover:border-[#023246]  text-slate-500 hover:text-mainColor">
              THEME
            </li>
            <li className="cursor-pointer font-bold p-4 border-b-4 border-transparent  hover:border-b-4 hover:border-[#023246]  text-slate-500 hover:text-mainColor">
              MEMBERSHIP
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-3">
          <Image
            src={Search}
            alt="search"
            width={37}
            height={62}
            className=" p-1 cursor-pointer"
          />
          <Image
            src={User}
            alt="search"
            width={37}
            height={62}
            className=" p-1 cursor-pointer"
          />
          <Image
            src={Heart}
            alt="search"
            width={37}
            height={62}
            className=" p-1 cursor-pointer"
          />
          <Image
            src={Cart}
            alt="search"
            width={37}
            height={62}
            className=" p-1 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default SecHeader;
