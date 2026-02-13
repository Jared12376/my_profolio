import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-[#215684] text-white px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg">J.M</div>

        {/* Navigation Links */}
        <ul className="flex gap-3">
          <li className="hover:underline cursor-pointer">About Me</li>
          <li className="hover:underline cursor-pointer">|</li>
          <li className="hover:underline cursor-pointer">Projects</li>
          <li className="hover:underline cursor-pointer">|</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}