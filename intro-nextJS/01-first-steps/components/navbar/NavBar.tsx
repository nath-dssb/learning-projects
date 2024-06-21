import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../index";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export const NavBar = () => {
  return (
    <nav className=" flex bg-pink-600 bg-opacity-20 p-5 justify-between">
      <Link href={"/"} className=" flex justify-between items-center">
        <HomeIcon className=" mr-2" />
        <span>Home</span>
      </Link>

      <div>
        {navItems.map((navItem) => {
          return (
            <ActiveLink key={navItem.text} {...navItem} />
          );
        })}
      </div>
    </nav>
  );
};
