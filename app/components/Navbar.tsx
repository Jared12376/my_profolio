import React from "react";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#215684] text-white px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg">J.M</div>

        {/* Navigation Links */}
        <ul className="flex gap-3">
          <li>
            <Link href="/about" className="hover:underline cursor-pointer">About Me</Link>
          </li>
          <li className="hover:underline cursor-pointer">|</li>
          <li>
            <Link href="/projects" className="hover:underline cursor-pointer">Projects</Link>
          </li>
          <li className="hover:underline cursor-pointer">|</li>
          <li>
            <Link href="/contact" className="hover:underline cursor-pointer">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}