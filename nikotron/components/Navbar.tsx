"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm py-4 px-6 flex items-center sticky top-0 z-50">
      {/* Logo or Brand */}
      <h1 className="text-2xl font-bold text-green-700 dark:text-green-400 tracking-wide">
        NIKOTRON
      </h1>

      {/* Nav Links aligned to the right */}
      <div className="ml-auto flex items-center gap-4">
        {links.map(({ href, label }) => (
          <Link key={href} href={href} passHref>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={clsx(
                "px-4 py-2 rounded-lg transition text-sm font-medium",
                pathname === href
                  ? "bg-green-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-green-700"
              )}
            >
              {label}
            </motion.div>
          </Link>
        ))}
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
