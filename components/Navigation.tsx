"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            DevRecruit LLC
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`${isActive("/") ? "text-blue-600" : "text-gray-700"} hover:text-blue-600 transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/works"
              className={`${isActive("/works") ? "text-blue-600" : "text-gray-700"} hover:text-blue-600 transition-colors`}
            >
              Our Works
            </Link>
            <Link
              href="/contact"
              className={`${isActive("/contact") ? "text-blue-600" : "text-gray-700"} hover:text-blue-600 transition-colors`}
            >
              Contact
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
            >
              Home
            </Link>
            <Link
              href="/works"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
            >
              Our Works
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
