import { assetUrl } from "../utils/asset";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-section-gap px-margin-mobile" id="heritage">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 order-2 md:order-1 relative">
            <div className="aspect-[0.67] overflow-hidden rounded-xl">
              <img
                alt="L'entrée authentique d'un gîte en pierre"
                className="w-full h-full object-cover"
                src={assetUrl("images/general/about.jpg")}
              />
            </div>
            <div className="hidden md:block absolute -bottom-8 -right-8 w-48 h-48 bg-secondary-container/30 -z-10 rounded-full blur-3xl" />
          </div>
          <div className="md:col-span-6 md:col-start-7 order-1 md:order-2">
            <span className="font-label-md text-primary tracking-widest block mb-4">
              NOTRE HISTOIRE
            </span>
            <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg mb-8 text-on-surface">
              Un Hameau d'Exception en Dordogne
            </h2>
            <div className="space-y-6 font-body-lg text-on-surface-variant">
              <p>
                Situés en Dordogne,{" "}
                <strong className="text-primary">
                  les Gîtes de Bourniquel
                </strong>{" "}
                forment un véritable hameau de 6 gîtes de caractère, habilement
                restaurés dans le respect de la tradition.
              </p>
              <p>
                Entourés de verdure et situés à quelques centaines de mètres du
                village pittoresque de Bourniquel, nos demeures offrent un
                refuge serein où le temps semble s'être arrêté.
              </p>
              <p>
                Venez en famille ou entre amis découvrir une région aux charmes
                authentiques dans une nature préservée, là où la pierre dorée
                rencontre l'azur du ciel périgourdin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
