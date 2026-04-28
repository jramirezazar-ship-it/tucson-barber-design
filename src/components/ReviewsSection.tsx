const reviews = [
  {
    name: "Martín L.",
    text: "Muy buen servicio, corte prolijo y atención personalizada. Sin dudas vuelvo.",
  },
  {
    name: "Lucas G.",
    text: "Tope de gama los cortes. Siempre salgo conforme, lo recomiendo al 100%.",
  },
  {
    name: "Tomás R.",
    text: "El mejor lugar para cortarse en Yerba Buena. Ambiente tranquilo y muy buen resultado.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-accent">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-[0.3em] text-accent uppercase">Opiniones</span>
          <h2 className="section-title mt-3">Reseñas de clientes</h2>
          <div className="mx-auto mt-4 gold-line" />
          <div className="mt-6 flex items-center justify-center gap-3">
            <Stars />
            <span className="font-display text-2xl font-bold text-accent">5.0</span>
            <span className="text-sm text-muted-foreground">en Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-sm bg-card border border-border/50 p-8 transition-all duration-300 hover:border-accent/30">
              <Stars />
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed italic">"{r.text}"</p>
              <p className="mt-4 font-display text-sm font-semibold uppercase tracking-wide">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
