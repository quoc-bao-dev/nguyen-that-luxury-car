import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Trang chủ", href: "/" },
    { name: "Giới thiệu", href: "/#about" },
    { name: "Xe cao cấp", href: "/products" },
    { name: "Dịch vụ", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Liên hệ", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm text-gray-600 border-b border-gray-100">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+84 901 234 567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>contact@thatnguyen.vn</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <span>Việt</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-400">Eng</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-end">
            <h1 className="font-playfair text-2xl md:text-3xl font-bold text-black">
              Thật Nguyễn
            </h1>
            <div className="hidden md:block ml-2 text-xs text-gray-500">
              Luxury Cars Expert
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) =>
              item.href.startsWith("/#") ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-black transition-colors duration-300 font-inter font-medium"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-black transition-colors duration-300 font-inter font-medium"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/contact">
              <Button variant="outline" className="hidden md:flex font-inter">
                Đặt lịch tư vấn
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) =>
                item.href.startsWith("/#") ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-black transition-colors duration-300 font-inter font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-700 hover:text-black transition-colors duration-300 font-inter font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Link to="/contact">
                <Button className="mt-4 font-inter w-full">
                  Đặt lịch tư vấn
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
