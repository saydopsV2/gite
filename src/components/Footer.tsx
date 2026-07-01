export default function Footer() {
  return (
    <footer className="bg-stone-light border-t border-black/5">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-gutter">
          <div className="md:col-span-1">
            <div className="font-display-lg text-headline-md text-primary mb-6">
              Les Gîtes de Bourniquel
            </div>
            <p className="font-body-md text-on-surface-variant mb-6">
              Un héritage préservé, une hospitalité authentique au coeur de la
              Dordogne.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <span className="material-symbols-outlined">share</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-label-md text-primary mb-6 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["Accueil", "Nos Gîtes", "La Région", "Réservation"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-label-sm text-on-surface-variant hover:text-primary hover:underline decoration-primary/30 underline-offset-4 transition-all"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-label-md text-primary mb-6 uppercase tracking-widest">
              Informations
            </h4>
            <ul className="space-y-4">
              {[
                "Mentions Légales",
                "Politique de Confidentialité",
                "Conditions Générales",
                "Guide Local",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-label-sm text-on-surface-variant hover:text-primary hover:underline decoration-primary/30 underline-offset-4 transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-label-md text-primary mb-6 uppercase tracking-widest">
              Localisation
            </h4>
            <p className="font-body-md text-on-surface-variant mb-4">
              Les Granges
              <br />
              24170 Belvès
              <br />
              France
            </p>
            <div className="h-32 w-full rounded-lg overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <img
                className="w-full h-full object-cover"
                alt="Carte de localisation de Belvès, Dordogne"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk5mhl3Ee028UQPeQd6jYu81nyBehYzNji4G1P2zPY5nKaLSiU2K5O1Fz17sgj7qIMgYi4iyk95Fv6WFkxJFKFRa17nxAVTqLDzwqUufKKuGP-HvJ45-YgL8m39yMrzJdTU-4n69o3dmU5Q-Bu3AfXwSj0cG4-vcZihDFqwK36oecQY_3coMNamO0NujrW4Ygf_uV16MJyXaIRiLjePQEzuuYmK-cSXQLPgIv1JvwqpC0JUMbK0Jo9hJJ-EI76qTUw7bz0BcQcd-FY"
              />
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-20 pt-8 border-t border-black/5 text-center">
          <p className="font-label-sm text-on-surface-variant/60">
            © 2024 Les Gîtes de Bourniquel. All rights reserved. Heritage of
            Dordogne.
          </p>
        </div>
      </div>
    </footer>
  );
}
