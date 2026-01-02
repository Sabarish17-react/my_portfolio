import React, { useEffect, useState } from "react";

const navlistLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-3 left-0 right-0 z-50">
      <nav className="mx-auto max-w-6xl px-6">
        <div
          className={`
            flex items-center justify-between rounded-2xl
            border border-white/10
            backdrop-blur-xl
            transition-all duration-300
            ${scrolled ? "bg-background/90 shadow-xl" : "bg-white/10 shadow-lg"}
          `}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              history.pushState(null, "", window.location.pathname);
            }}
            className="group relative px-5 py-3 text-lg font-semibold hover:text-primary"
          >
            SS
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 px-6">
            {navlistLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();

                  const el = document.querySelector(link.href);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }

                  // Clean URL (important)
                  history.pushState(null, "", window.location.pathname);
                }}
                className="
    relative text-sm font-medium
    text-white/70 hover:text-white
    transition
    after:absolute after:-bottom-1 after:left-0
    after:h-[2px] after:w-0 after:bg-primary
    after:transition-all hover:after:w-full
  "
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden px-5 py-4 text-white text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-3 rounded-2xl border border-white/10 bg-background/90 backdrop-blur-xl shadow-xl md:hidden">
            <div className="flex flex-col divide-y divide-white/10">
              {navlistLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-6 py-4 text-white/80 hover:text-white hover:bg-white/10 transition"
                >
                  {link.label}
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
