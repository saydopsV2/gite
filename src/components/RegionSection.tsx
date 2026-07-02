import { assetUrl } from "../utils/asset";

const villages = [
  "Beaumont-du-Périgord",
  "Monpazier",
  "Beynac",
  "Les Eyzies",
  "Limeuil",
  "Issigeac",
];

export default function RegionSection() {
  return (
    <section className="py-16 md:py-section-gap overflow-hidden" id="region">
      <div className="max-w-7xl mx-auto px-margin-mobile">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
          <div>
            <span className="font-label-md text-primary tracking-widest block mb-4">
              EXPLORER
            </span>
            <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg mb-8">
              Entre Périgord Pourpre et Périgord Noir
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-10">
              À mi-chemin entre{" "}
              <strong className="text-on-surface">Bergerac et Sarlat</strong>,
              vous êtes à deux pas de la magnifique vallée de la Dordogne. Un
              territoire aux mille et un châteaux, bastides et cités médiévales.
            </p>
            <ul className="grid grid-cols-2 gap-4 mb-10">
              {villages.map((v) => (
                <li
                  key={v}
                  className="flex items-center gap-3 font-label-md text-on-surface-variant"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> {v}
                </li>
              ))}
            </ul>
            <div className="p-6 md:p-8 bg-primary-fixed rounded-xl flex items-start gap-6 border border-primary/10">
              <span className="material-symbols-outlined text-primary text-4xl shrink-0">
                location_on
              </span>
              <div>
                <h4 className="font-headline-md text-lg mb-2 text-on-primary-fixed">
                  Situation Idéale
                </h4>
                <p className="font-body-md text-on-primary-fixed-variant">
                  Le village de Bourniquel est le point de départ parfait pour
                  rayonner dans toute la région.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto md:mx-0">
            <div className="aspect-square w-64 md:w-full rounded-full overflow-hidden border-[12px] border-ivory-white shadow-xl relative z-10">
              <img
                className="w-full h-full object-cover"
                alt="Vue aérienne de la vallée de la Dordogne"
                src={assetUrl("images/general/region.jpg")}
              />
            </div>
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full -z-10 animate-pulse" />
            <div className="hidden md:block absolute -top-10 -right-10 w-40 h-40 bg-secondary-fixed/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
