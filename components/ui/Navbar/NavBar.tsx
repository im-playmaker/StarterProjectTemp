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
    <div className="flex flex-row justify-items-start">
      {navigation.map((navlink, i: number) => (
        <NavLink key={i} navLink={navlink} />
      ))}
    </div>
  );
};

export default NavBar;
