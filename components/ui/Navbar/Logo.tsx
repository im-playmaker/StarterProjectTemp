import { Anton } from "next/font/google";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="flex justify-center  p-4 text-amber-600 font-bold"
    >
      <h1>Starter Theme</h1>
    </Link>
  );
};

export default Logo;
