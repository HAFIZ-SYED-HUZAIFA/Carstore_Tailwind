"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-green-600 flex items-center justify-between py-2 px-4">
      {/* Logo Section */}
      <div className="ml-4">
        <span className="text-white uppercase font-fantasy font-light text-2xl tracking-wider">
          Car store
        </span>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white text-3xl">
          {isMenuOpen ? '×' : '≡'}
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`mr-4 md:flex ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row gap-6 items-center justify-center list-none">
          <li>
            <Link href="/" className="text-white capitalize font-serif font-medium text-xl tracking-wide hover:text-gray-300">Toyota</Link>
          </li>
          <li>
            <Link href="/Tesla" className="text-white capitalize font-serif font-medium text-xl tracking-wide hover:text-gray-300">Tesla</Link>
          </li>
          <li>
            <Link href="/Honda" className="text-white capitalize font-serif font-medium text-xl tracking-wide hover:text-gray-300">Honda</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
