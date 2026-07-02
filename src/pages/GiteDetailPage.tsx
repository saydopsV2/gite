import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { gites, otherGites } from "../data/gites";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function GiteDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const gite = gites.find((g) => g.slug === slug);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!gite) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display-lg text-headline-lg mb-4">Gîte non trouvé</h1>
          <Link to="/" className="font-label-md text-primary hover:underline">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const others = otherGites(gite.slug);
  const galleryImages = [gite.mainImage, ...gite.images.filter((src) => src !== gite.mainImage)];
  const activeImage = galleryImages[activeIndex] ?? gite.mainImage;

  const showPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="relative h-[50vh] md:h-[60vh] flex items-end pt-20">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={gite.mainImage}
              alt={gite.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-20 text-white px-margin-mobile md:px-margin-desktop pb-12 max-w-7xl mx-auto w-full">
            <Link
              to="/"
              className="font-label-sm text-white/70 hover:text-white mb-4 inline-flex items-center gap-2 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Retour aux gîtes
            </Link>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-2">
              {gite.title}
            </h1>
            <p className="font-body-lg text-white/80">{gite.subtitle}</p>
          </div>
        </section>

        <section className="py-16 md:py-section-gap px-margin-mobile">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <p className="font-body-lg text-on-surface-variant leading-relaxed">
                  {gite.longDescription}
                </p>
              </div>

              <div className="mt-12">
                <h2 className="font-display-lg text-headline-md mb-6 text-on-surface">
                  Équipements
                </h2>
                <ul className="space-y-4">
                  {gite.equipment.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 font-body-md text-on-surface-variant"
                    >
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                        check_circle
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="font-body-md text-on-surface-variant mt-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    pets
                  </span>
                  Animaux non admis
                </p>
                <p className="font-body-md text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    electric_car
                  </span>
                  Pas de possibilité de branchement pour véhicules électriques
                </p>
              </div>

              <div className="mt-12">
                <h2 className="font-display-lg text-headline-md mb-6 text-on-surface">
                  Tarifs 2026
                </h2>
                <div className="overflow-x-auto rounded-xl border border-black/5">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="px-6 py-4 font-label-md">Période</th>
                        <th className="px-6 py-4 font-label-md">Prix / semaine</th>
                      </tr>
                    </thead>
                    <tbody>
                      {gite.prices.map((p, i) => (
                        <tr
                          key={i}
                          className={
                            i % 2 === 0
                              ? "bg-ivory-white"
                              : "bg-surface-container-low"
                          }
                        >
                          <td className="px-6 py-3 font-body-md">{p.period}</td>
                          <td className="px-6 py-3 font-label-md text-primary whitespace-nowrap">
                            {p.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 space-y-2">
                  {gite.options.map((o, i) => (
                    <div
                      key={i}
                      className="flex justify-between gap-2 font-body-md text-on-surface-variant border-b border-black/5 pb-2"
                    >
                      <span>{o.label}</span>
                      <span className="font-label-md">{o.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h2 className="font-display-lg text-headline-md mb-6 text-on-surface">
                  Galerie Photos
                </h2>

                <div className="rounded-2xl overflow-hidden border border-black/5 bg-stone-light/70 shadow-sm">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={activeImage}
                      alt={`${gite.title} - Photo ${activeIndex + 1}`}
                      className="w-full h-full object-cover"
                    />

                    {galleryImages.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={showPrevious}
                          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
                          aria-label="Image précédente"
                        >
                          <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button
                          type="button"
                          onClick={showNext}
                          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
                          aria-label="Image suivante"
                        >
                          <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                      </>
                    )}

                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
                      <span>{activeIndex + 1}</span>
                      <span>/</span>
                      <span>{galleryImages.length}</span>
                    </div>
                  </div>

                  {galleryImages.length > 1 && (
                    <div className="grid grid-cols-4 gap-2 p-3 sm:grid-cols-6">
                      {galleryImages.map((src, index) => (
                        <button
                          key={src}
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          className={`overflow-hidden rounded-lg border-2 transition ${
                            index === activeIndex ? "border-primary" : "border-transparent"
                          }`}
                          aria-label={`Afficher la photo ${index + 1}`}
                        >
                          <img
                            src={src}
                            alt={`${gite.title} - Miniature ${index + 1}`}
                            className="h-16 w-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <aside className="md:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="p-8 rounded-xl bg-primary-fixed border border-primary/10">
                  <h3 className="font-display-lg text-headline-md mb-4 text-on-primary-fixed">
                    {gite.title}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 font-body-md text-on-primary-fixed-variant">
                      <span className="material-symbols-outlined text-primary">
                        group
                      </span>
                      {gite.capacity}
                    </div>
                    <div className="flex items-center gap-3 font-body-md text-on-primary-fixed-variant">
                      <span className="material-symbols-outlined text-primary">
                        square_foot
                      </span>
                      {gite.size}
                    </div>
                    <div className="flex items-center gap-3 font-body-md text-on-primary-fixed-variant">
                      <span className="material-symbols-outlined text-primary">
                        euro
                      </span>
                      À partir de {gite.prices[0]?.price}
                    </div>
                  </div>
                  <Link
                    to="/#contact"
                    className="mt-6 block bg-primary text-white text-center py-4 font-label-md rounded-lg hover:bg-deep-forest transition-colors"
                  >
                    Réserver
                  </Link>
                </div>

                <div className="p-8 rounded-xl bg-stone-light border border-black/5">
                  <h4 className="font-label-md text-primary mb-4 uppercase tracking-widest">
                    Nos autres gîtes
                  </h4>
                  <ul className="space-y-3">
                    {others.map((o) => (
                      <li key={o.id}>
                        <Link
                          to={`/gite/${o.slug}`}
                          className="flex items-center gap-3 group"
                        >
                          <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                            <img
                              src={o.mainImage}
                              alt={o.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-label-md text-on-surface group-hover:text-primary transition-colors">
                              {o.title}
                            </p>
                            <p className="font-label-sm text-on-surface-variant">
                              {o.capacity}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
