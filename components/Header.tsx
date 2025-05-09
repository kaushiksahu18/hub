"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Music } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  let isHome = true;

  const pathname = usePathname();
  console.log("Current path:", pathname);

  if (pathname === "/") {
    console.log("Home page");
    isHome = true;
  } else if (pathname === "/admin" || pathname === "/register") {
    console.log("Admin or Register page");
    isHome = false;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        `w-full top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm ${
          isHome && isScrolled
            ? "bg-white shadow-md py-3"
            : "bg-transparent py-5"
        } ${!isHome ? "bg-primary" : "fixed"}`
      )}
    >
      <div className="container mx-auto px-2 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Music className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold tracking-tight">
                <span
                  className={`transition-colors duration-300 ${isHome && isScrolled ? "text-primary" : "text-white"}`}
                >
                  Harmony
                </span>
                <span
                  className={`transition-colors duration-300 ${isHome && isScrolled ? "text-accent" : "text-accent"}`}
                >
                  Hub
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "Contact"].map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className={`font-medium transition-colors duration-300 hover:text-accent ${
                  isHome && isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                {item}
              </a>
            ))}
            <a
              href="/admin"
              className={`font-medium transition-colors duration-300 hover:text-accent ${
                isHome && isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Login
            </a>
            <Link
              href="/register"
              className="bg-accent hover:bg-accent/90 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Register
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X
                className={`h-6 w-6 ${isHome && isScrolled ? "text-gray-800" : "text-white"}`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${isHome && isScrolled ? "text-gray-800" : "text-white"}`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4">
            <div className="flex flex-col gap-4">
              {["Home", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="font-medium text-gray-800 hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="/admin"
                className="font-medium text-gray-800 hover:text-accent"
              >
                Login
              </a>
              <Link
                href="/register"
                className="bg-accent hover:bg-accent/90 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
