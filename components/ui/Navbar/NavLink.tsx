"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ navLink }: { navLink: { name: string; href: string } }) => {
  // to use this hook, we shoold add use client at the top
  const pathName = usePathname();

  // to avoid using Navlink.name
  const { name, href } = navLink;
  const isActive = pathName === href;
  return (
    <Link
      href={href}
      className={` ${isActive ? "text-orange-600" : "text-black"} p-4 hover:duration-400  hover:text-gray-500 `}
    >
      <span>{name}</span>
    </Link>
  );
};

export default NavLink;
