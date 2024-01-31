import Link from "next/link";
import React from "react";

import { BsBugFill } from "react-icons/bs";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <BsBugFill />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
            href={link.href}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
