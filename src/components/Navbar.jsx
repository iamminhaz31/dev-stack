import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">

        {/* ================= DESKTOP NAVBAR ================= */}
        <div className="hidden h-16 items-center justify-between md:flex">
          <a href="#home" className="flex items-center gap-2">
            <div className="bg-brand-gradient flex h-8 w-8 items-center justify-center rounded-lg text-[11px] font-bold text-white">
              DS
            </div>

            <span className="text-lg font-bold text-slate-950">
              Dev<span className="text-brand-gradient">Stack</span>
            </span>
          </a>

          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-700 transition hover:text-pink-500"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="text-xs font-medium text-slate-700">
              Sign In
            </button>

            <button className="bg-brand-gradient rounded-full px-5 py-2.5 text-xs font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>

        {/* ================= MOBILE NAVBAR ================= */}
        <div className="relative flex h-12 items-center justify-between md:hidden">

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-8 w-8 items-center justify-center text-slate-700"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <HiX size={21} /> : <HiMenu size={21} />}
          </button>

          {/* Center Brand */}
          <a
            href="#home"
            className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1"
          >
            <div className="bg-brand-gradient flex h-6 w-6 items-center justify-center rounded-md text-[8px] font-bold text-white">
              DS
            </div>

            <span className="text-[9px] font-bold text-slate-950">
              Dev<span className="text-brand-gradient">Stack</span>
            </span>
          </a>

          {/* Right */}
          <div className="ml-auto flex items-center gap-2">
            <button className="text-[8px] font-medium text-slate-700">
              Sign In
            </button>

            <button className="bg-brand-gradient whitespace-nowrap rounded-full px-3 py-1.5 text-[8px] font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="border-t border-slate-100 py-3 md:hidden">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md px-3 py-2 text-xs font-medium text-slate-700 hover:bg-pink-50 hover:text-pink-500"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;