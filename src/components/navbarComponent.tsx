"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeButton from "./themeButton";

const fullName = process.env.NEXT_PUBLIC_USER_NAME || "User";
const firstName = fullName.split(" ")[0];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function NavbarComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold text-gray-800 dark:text-gray-100">
          {firstName}&apos;s Portfolio
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
              {link.label}
            </a>
          ))}
          <ThemeButton />
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700 dark:text-gray-300">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-3 transition-all duration-300">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 dark:text-gray-300"
            >
              {link.label}
            </a>
          ))}
          <ThemeButton />
        </div>
      )}
    </nav>
  );
}
