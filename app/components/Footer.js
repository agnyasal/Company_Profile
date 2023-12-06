import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6">
      <div className="flex flex-wrap justify-between items-start">
        <div className="mb-6 flex flex-col items-start">
          <div className="mb-4">
            <span className="text-xl font-bold">Lets Travel Tour</span>
          </div>
          <p>Your Gateway to Unforgettable Journeys</p>
        </div>
        <div className="mb-6">
          <h1 className="uppercase font-bold mb-3">Useful Links</h1>
          <ul className="space-y-2">
            <li>
              <Link href="/home" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-gray-300">
                Team
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h1 className="uppercase font-bold mb-3">Info</h1>
          <ul className="space-y-2">
            <li>T: +62 889 7601 3347 </li>
            <li>E: contact@letstraveltour.com</li>
            <li>W: www.letstraveltour.com</li>
          </ul>
        </div>

        <div className="mb-6">
          <h1 className="uppercase font-bold mb-3">Links</h1>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-gray-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-gray-300">
            Facebook
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Instagram
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Twitter
          </Link>
        </div>
      </div>

      <div className="text-center text-white text-sm mt-8">
        © 2023 All Rights Reserved. Credits to Lets Travel Tour
      </div>
    </footer>
  );
};

export default Footer;
