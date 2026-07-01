export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxf4IXQ4lTQNuWQyThRAEApFJTi6DRdxhrKmRCHd_NRUg7r8_EH88IcAWWEr5gjVocEb_mMyFuepIXGj_a4J_dCKtMz02PQ5xUvv84_TAmgACfQp-Fm0f82JJ4MWuZQnp5Vmiwdx7QsSO01lLoiJNuDnZVLoPht5wmNWHlXVSxGOtHRez8Rb4GKHupgMjzkFkkuKz-h26wQHYrzr3nfKKSrLntBFqw8c4MbITTUn23zJCEJi6mqDLZQbOaz1gaKcH053m_DTVobCS6')",
          }}
        />
      </div>
      <div className="relative z-20 text-center text-white px-margin-mobile max-w-4xl">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">
          Les Gîtes de Bourniquel
        </h1>
        <p className="font-body-lg text-body-lg mb-10 opacity-90">
          Pour des vacances de rêve au cœur du Périgord
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="#gites"
            className="bg-ivory-white text-primary px-10 py-4 font-label-md rounded-lg transition-transform hover:scale-105"
          >
            Découvrir nos Gîtes
          </a>
          <a
            href="#contact"
            className="border border-ivory-white text-ivory-white px-10 py-4 font-label-md rounded-lg backdrop-blur-sm hover:bg-ivory-white/10 transition-colors"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
}
