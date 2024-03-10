"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import style from "./header.module.css";
const Header = () => {
  const path = usePathname();
  return (
    <>
      <div className=" bg-mainColor flex flex-row justify-around w-full h-16">
        <div>
          <ul className="flex h-full flex-row items-center justify-center gap-4 p-0 text-white">
            <Link href="/men">
              <li
                key="men"
                className={`p-4 cursor-pointer font-bold text-base hover:bg-slate-500 ${
                  path === `/men` ? `bg-slate-500` : ``
                }`}
              >
                MEN
              </li>
            </Link>
            <Link href="/women">
              <li
                key="women"
                className={`p-4 cursor-pointer font-bold text-base hover:bg-slate-500 ${
                  path === `/women` ? `bg-slate-500` : ``
                }`}
              >
                WOMEN
              </li>
            </Link>
            <Link href="/gym">
              <li
                key="men"
                className={`p-4 cursor-pointer font-bold text-base hover:bg-slate-500 ${
                  path === `/gym` ? `bg-slate-500` : ``
                }`}
              >
                GYM WEAR
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <ul className="flex h-full justify-center items-center gap-3 text-white">
            <li
              key="track"
              className="font-medium text-xs cursor-pointer tracking-tighter"
            >
              TRACK ORDER
            </li>
            <li
              key="contact"
              className="font-medium text-xs cursor-pointer tracking-tighter"
            >
              CONTACT US
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
