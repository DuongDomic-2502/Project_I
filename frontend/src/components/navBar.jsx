import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          ShoeStore
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li className="cursor-pointer hover:text-blue-500">
            Home
          </li>
          <li className="cursor-pointer hover:text-blue-500">
            Products
          </li>
          <li className="cursor-pointer hover:text-blue-500">
            Brands
          </li>
          <li className="cursor-pointer hover:text-blue-500">
            Contact
          </li>
        </ul>

        {/* Search + Cart */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search shoes..."
            className="border rounded-lg px-3 py-1 outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
}