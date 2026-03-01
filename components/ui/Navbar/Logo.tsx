import { Anton } from "next/font/google";
import Link from "next/link";
import React from "react";

const anton = Anton({ weight: "400", subsets: ["latin"] });
const Logo = () => {
  return (
    <Link
      href={"/"}
      className={`${anton.className} col-span-2 p-4 text-purple-600`}
    >
      <h1>Starter Theme</h1>
    </Link>
  );
};

export default Logo;
