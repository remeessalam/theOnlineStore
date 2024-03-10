"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
const Page = () => {
  const router = useRouter();
  router.push("/men", { scroll: false });
  // useEffect(() => {
  // }, []);
  return <></>;
};

export default Page;
