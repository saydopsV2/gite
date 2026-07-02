import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { key: "gites", label: "Nos Gîtes" },
  { key: "region", label: "La Région" },
  { key: "services", label: "Services" },
  { key: "heritage", label: "Heritage" },
  { key: "contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHomePage = location.pathname === "/";

  const handleNavClick = (section: string) => {
    setMenuOpen(false);

    if (isHomePage) {
      const target = document.getElementById(section);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    navigate(`/?section=${section}`, { replace: false });
  };

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

          {/* Full nav only from lg (1024px) up — tablets get the burger menu */}
          <div className="hidden lg:flex gap-8 items-center">
            {navItems.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => handleNavClick(key)}
                className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-300"
              >
                {label}
              </button>
            ))}
          </div>

          <button className="hidden lg:block bg-primary text-on-primary px-8 py-3 font-label-md rounded-lg hover:scale-95 duration-200 ease-in-out">
            Book Now
          </button>

          {/* Burger — visible on mobile + tablet, hidden only at lg+ */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-50 w-9 h-9 flex flex-col items-center justify-center gap-[6px] group"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block h-[2px] w-6 rounded-full bg-on-surface origin-center transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none ${
                menuOpen ? "rotate-45 translate-y-[8px]" : "group-hover:w-5"
              }`}
            />
            <span
              className={`block h-[2px] w-6 rounded-full bg-on-surface origin-center transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none ${
                menuOpen ? "scale-x-0 opacity-0" : "group-hover:w-4"
              }`}
            />
            <span
              className={`block h-[2px] w-6 rounded-full bg-on-surface origin-center transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none ${
                menuOpen ? "-rotate-45 -translate-y-[8px]" : "group-hover:w-5"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile / tablet menu — stays mounted so open AND close both animate instead of popping instantly */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-[400ms] ease-out motion-reduce:transition-none ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-ivory-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
            menuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <div className="flex flex-col h-full pt-24">
            <div className="flex-1 flex flex-col justify-center px-margin-mobile max-w-sm md:max-w-lg mx-auto w-full">
              <div className="space-y-1">
                {navItems.map((item, i) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => handleNavClick(item.key)}
                    style={{ transitionDelay: menuOpen ? `${120 + i * 60}ms` : "0ms" }}
                    className={`block w-full text-left px-6 py-5 font-display-lg text-2xl md:text-3xl text-on-surface rounded-xl hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-500 ease-out motion-reduce:transition-none active:scale-[0.98] ${
                      menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div
              style={{ transitionDelay: menuOpen ? `${120 + navItems.length * 60}ms` : "0ms" }}
              className={`px-margin-mobile pb-8 max-w-sm md:max-w-lg mx-auto w-full transition-all duration-500 ease-out motion-reduce:transition-none ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
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
    </>
  );
}
