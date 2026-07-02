export default function ContactSection() {
  return (
    <section className="py-16 md:py-section-gap relative" id="contact">
      <div className="max-w-7xl mx-auto px-margin-mobile">
        <div className="bg-ivory-white border border-black/5 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-20">
            <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg mb-6">
              Préparez votre séjour
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-10">
              Florence et Benoit Bouyssou vous accueillent toute l'année pour
              une parenthèse enchantée en Dordogne.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary shrink-0">
                  phone_in_talk
                </span>
                <div>
                  <p className="font-label-sm text-on-surface-variant">
                    Téléphone
                  </p>
                  <a
                    className="font-label-md text-on-surface hover:text-primary transition-colors"
                    href="tel:0553291072"
                  >
                    05 53 29 10 72
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary shrink-0">
                  mail
                </span>
                <div>
                  <p className="font-label-sm text-on-surface-variant">
                    Email
                  </p>
                  <a
                    className="font-label-md text-on-surface hover:text-primary transition-colors"
                    href="mailto:contact@gitesdebourniquel.com"
                  >
                    contact@gitesdebourniquel.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-secondary-fixed/30 p-8 md:p-20 flex flex-col justify-center">
            <form className="space-y-6">
              <div className="border-b border-primary/30 pb-2">
                <label className="font-label-sm text-on-surface-variant uppercase tracking-tighter block mb-1">
                  Votre Nom
                </label>
                <input
                  className="w-full bg-transparent border-none focus:ring-0 font-body-md p-0 placeholder-black/20"
                  placeholder="Jean Dupont"
                  type="text"
                />
              </div>
              <div className="border-b border-primary/30 pb-2">
                <label className="font-label-sm text-on-surface-variant uppercase tracking-tighter block mb-1">
                  Email
                </label>
                <input
                  className="w-full bg-transparent border-none focus:ring-0 font-body-md p-0 placeholder-black/20"
                  placeholder="jean@exemple.com"
                  type="email"
                />
              </div>
              <div className="border-b border-primary/30 pb-2">
                <label className="font-label-sm text-on-surface-variant uppercase tracking-tighter block mb-1">
                  Votre Message
                </label>
                <textarea
                  className="w-full bg-transparent border-none focus:ring-0 font-body-md p-0 placeholder-black/20 resize-none"
                  placeholder="Je souhaite réserver pour l'été prochain..."
                  rows={3}
                />
              </div>
              <button className="bg-primary text-white w-full py-4 font-label-md rounded-lg hover:bg-deep-forest transition-colors mt-4">
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
