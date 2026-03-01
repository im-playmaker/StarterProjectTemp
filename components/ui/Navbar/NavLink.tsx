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
      className={`flex ${isActive ? "text-purple-600" : "text-black"} justify-center p-4 rounded-md font-sans  hover:text-purple-600 `}
    >
      <p>{name}</p>
    </Link>
  );
};

export default NavLink;
