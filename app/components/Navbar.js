"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navbarStyle = {
    transition: "background-color 0.6s ease",
    backgroundColor: scrollPosition > 0 ? "#1fa6bd" : "transparent",
  };

  const textStyle = {
    color: scrollPosition > 0 ? "white" : "#99d4f0",
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full  bg-transparent  p-5  z-50"
      style={navbarStyle}
    >
      <div className="flex  justify-between lg:items-center text-white">
        <Link href="/">
          <Image
            src="/Letslogo.png"
            alt="Company Logo"
            width="100"
            height="200"
          />
        </Link>

        <div className="md:flex items-center hidden ">
          <ul className={`flex `} style={textStyle}>
            <li className="md:ml-4 text-sm uppercase hover:border-b">
              <Link href="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="md:ml-4 text-sm uppercase hover:border-b">
              <Link href="/about" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="md:ml-4 text-sm uppercase hover:border-b">
              <Link href="/services" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="md:ml-4 text-sm uppercase hover:border-b">
              <Link href="/team" onClick={closeMobileMenu}>
                Team
              </Link>
            </li>
          </ul>
        </div>

        <button onClick={handleToggleClick} className="md:hidden   h-max">
          ☰
        </button>
      </div>
      <div
        className={`items-center flex flex-col h-screen ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className={`flex flex-col h-1/2 justify-evenly`} style={textStyle}>
          <Link href="/" onClick={closeMobileMenu}>
            <li className="md:ml-4 text-sm uppercase hover:border-b">Home</li>
          </Link>
          <Link href="/about" onClick={closeMobileMenu}>
            <li className="md:ml-4 text-sm uppercase hover:border-b">About</li>
          </Link>
          <Link href="/services" onClick={closeMobileMenu}>
            <li className="md:ml-4 text-sm uppercase hover:border-b">
              Services
            </li>
          </Link>
          <Link href="/team" onClick={closeMobileMenu}>
            <li className="md:ml-4 text-sm uppercase hover:border-b">Team</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
