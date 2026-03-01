import React from "react";
import Link from "next/link";
import { NavigationMenu } from "radix-ui";
import NavLink from "./NavLink";

const NavBar = () => {
  const navigation = [
    { name: "Products", href: "/" },
    { name: "Solutions", href: "#" },
    { name: "Customers", href: "#" },
    { name: "Insights", href: "#" },
    { name: "Pricing", href: "#" },
  ];

  return (
    <div className=" flex space-x-4  col-span-5 font-semibold">
      {navigation.map((navlink) => (
        <NavLink navLink={navlink} />
      ))}
    </div>
  );
};

export default NavBar;
