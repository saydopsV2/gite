import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { key: "gites", label: "Nos Gîtes" },
  { key: "region", label: "La Région" },
  { key: "services", label: "Services" },
  { key: "heritage", label: "Heritage" },
  { key: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur-md h-20 transition-all duration-300 ${
          scrolled ? "bg-ivory-white/95 shadow-sm" : "bg-ivory-white/80"
        }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop h-full">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="font-display-lg text-lg md:text-headline-md tracking-widest text-primary"
          >
            Les Gîtes de Bourniquel
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            {navItems.map(({ key, label }) => (
              <a
                key={key}
                href={`#${key}`}
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </div>

          <button className="hidden md:block bg-primary text-on-primary px-8 py-3 font-label-md rounded-lg hover:scale-95 duration-200 ease-in-out">
            Book Now
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-50 w-9 h-9 flex flex-col items-center justify-center gap-[6px]"
            aria-label="Menu"
          >
            <span className={`block h-[2px] w-6 rounded-full bg-on-surface transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
            <span className={`block h-[2px] w-6 rounded-full bg-on-surface transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-6 rounded-full bg-on-surface transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-ivory-white">
            <div className="flex flex-col h-full pt-24">
              <div className="flex-1 flex flex-col justify-center px-margin-mobile max-w-sm mx-auto w-full">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <a
                      key={item.key}
                      href={`#${item.key}`}
                      onClick={() => setMenuOpen(false)}
                      className="block w-full text-left px-6 py-5 font-display-lg text-2xl text-on-surface rounded-xl hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-200 active:scale-[0.98]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="px-margin-mobile pb-8 max-w-sm mx-auto w-full">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-full bg-primary text-on-primary py-4 font-label-md rounded-xl hover:bg-deep-forest active:scale-[0.98] transition-all duration-200"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
