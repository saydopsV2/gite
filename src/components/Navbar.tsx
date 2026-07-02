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
        className={`fixed top-0 w-full z-50 backdrop-blur-md h-20 transition-all duration-300 ${scrolled
            ? "bg-ivory-white/95 shadow-sm"
            : "bg-ivory-white/80"
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

          {/* Navigation Bureau */}
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

          {/* Bouton Burger (Z-50 pour rester au-dessus du menu) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-50 w-9 h-9 flex flex-col items-center justify-center gap-[6px]"
            aria-label="Menu"
          >
            <span className={`block h-[2px] w-6 rounded-full bg-on-surface transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
            <span className={`block h-[2px] w-6 rounded-full bg-on-surface transition-all duration-300 ${menuOpen ? "opacity-0 scale-0" : ""}`} />
            <span className={`block h-[2px] w-6 rounded-full bg-on-surface transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Menu Mobile (Sorti de la <nav> pour une gestion propre du plein écran) */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 md:hidden ${menuOpen ? "visible" : "invisible"
          }`}
      >
        {/* Overlay sombre arrière-plan */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${menuOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Panneau de navigation */}
        <div
          className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-ivory-white shadow-2xl transition-transform duration-500 ease-out ${menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-8">
            <div className="flex-1 flex flex-col items-center justify-center gap-1">
              {navItems.map((item, i) => (
                <a
                  key={item.key}
                  href={`#${item.key}`}
                  onClick={() => setMenuOpen(false)}
                  className="relative group w-full text-center py-4 font-display-lg text-2xl text-on-surface-variant hover:text-primary transition-colors duration-300"
                  style={{
                    transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateY(0)" : "translateY(12px)",
                    transition: "opacity 0.4s ease-out, transform 0.4s ease-out, color 0.3s",
                  }}
                >
                  {item.label}
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-8" />
                </a>
              ))}
            </div>

            <div className="pt-8 border-t border-black/5">
              <button
                onClick={() => setMenuOpen(false)}
                className="w-full bg-primary text-on-primary py-4 font-label-md rounded-lg hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-lg shadow-primary/20"
              >
                Book Now
              </button>
              <p className="text-center font-label-sm text-on-surface-variant/50 mt-4 text-xs">
                Les Gîtes de Bourniquel
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}