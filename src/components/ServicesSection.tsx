const services = [
  {
    icon: "pool",
    title: "Piscine Privée",
    desc: "Profitez de notre vaste piscine ensoleillée avec vue sur les collines du Périgord.",
  },
  {
    icon: "nature_people",
    title: "Parc Arboré",
    desc: "Des hectares de verdure pour vos promenades matinales ou vos moments de lecture.",
  },
  {
    icon: "wine_bar",
    title: "Art de Vivre",
    desc: "Conseils personnalisés pour découvrir les vignobles et les marchés locaux.",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="py-16 md:py-section-gap px-margin-mobile bg-deep-forest text-white"
      id="services"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg mb-12 md:mb-16">
          Expériences &amp; Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-8 md:p-10 border border-white/10 rounded-xl hover:bg-white/5 transition-colors"
            >
              <span className="material-symbols-outlined text-5xl mb-6 text-primary-fixed block">
                {s.icon}
              </span>
              <h3 className="font-headline-md mb-4">{s.title}</h3>
              <p className="font-body-md text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
