"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { BsBugFill } from "react-icons/bs";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { Box } from "@radix-ui/themes";

const Navbar = () => {
  const { status, data: session } = useSession();
  const currentPath = usePathname();
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
          <li key={link.href}>
            <Link
              className={classNames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-900 transition-colors": true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Box>
        {status === "authenticated" && (
          <Link href="/api/auth/signout"> Log Out</Link>
        )}

        {status === "unauthenticated" && (
          <Link href="/api/auth/signin"> Login</Link>
        )}
      </Box>
    </nav>
  );
};

export default Navbar;
