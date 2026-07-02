import { Link } from "react-router-dom";
import { gites } from "../data/gites";

export default function GitesSection() {
  return (
    <section className="py-16 md:py-section-gap bg-stone-light" id="gites">
      <div className="max-w-7xl mx-auto px-margin-mobile">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg mb-4">
            Nos Demeures de Charme
          </h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">
            De l'intimité d'un séjour à deux au confort d'une réunion de
            famille, nos 6 gîtes accueillent de 2 à 9 personnes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {gites.map((gite) => (
            <Link
              key={gite.id}
              to={`/${gite.slug}`}
              className={`group relative overflow-hidden rounded-xl bg-ivory-white shadow-sm border border-black/5 cursor-pointer transition-shadow hover:shadow-md ${gite.id === "la-forge" ? "md:col-span-2 md:row-span-2" : ""}`}
            >
              <div
                className={`overflow-hidden ${gite.id === "la-forge" ? "aspect-[4/3]" : "aspect-square"}`}
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={gite.mainImage}
                  alt={gite.title}
                />
              </div>
              <div className={gite.id === "la-forge" ? "p-6 md:p-8" : "p-4 md:p-6"}>
                <div
                  className={
                    gite.id === "la-forge"
                      ? "flex justify-between items-center mb-2"
                      : undefined
                  }
                >
                  <h3
                    className={
                      gite.id === "la-forge"
                        ? "font-display-lg text-headline-md"
                        : "font-headline-md text-lg md:text-xl mb-1"
                    }
                  >
                    {gite.title}
                  </h3>
                  {gite.id === "la-forge" && (
                    <span className="font-label-sm bg-primary-container text-on-primary-container px-3 py-1 rounded-full shrink-0">
                      {gite.capacity}
                    </span>
                  )}
                </div>
                {gite.id === "la-forge" ? (
                  <p className="font-body-md text-on-surface-variant">
                    {gite.description}
                  </p>
                ) : (
                  <p className="font-label-sm text-on-surface-variant">
                    {gite.capacity} •{" "}
                    {gite.id === "les-duos"
                      ? "Intimité"
                      : gite.id === "la-treille"
                        ? "Tradition"
                        : gite.id === "hauts-vieille-grange"
                          ? "Charme"
                          : gite.id === "maison-de-denise"
                            ? "Vue Panoramique"
                            : "Espace"}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
