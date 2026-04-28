export default function AboutSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="mx-auto max-w-3xl text-center">
        <span className="font-display text-xs tracking-[0.3em] text-accent uppercase">Quiénes somos</span>
        <h2 className="section-title mt-3">Sobre nosotros</h2>
        <div className="mx-auto mt-4 gold-line" />

        <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed">
          Somos una barbería 100% pensada para los pibes, donde el estilo y la actitud van de la mano.
          Nos especializamos en cortes modernos y clásicos, siempre al detalle y adaptados a tu flow.
          Acá no venís solo a cortarte el pelo, venís a vivir la experiencia: buena onda, precisión
          y un ambiente donde te sentís cómodo desde que entrás. Fade, degradados, diseños, barba…
          lo que busques, lo hacemos con nivel. Si querés verte fresh y marcar la diferencia, este
          es tu lugar.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-sm bg-card border border-border/50 p-6">
            <div className="text-accent mb-3">
              <svg className="w-7 h-7 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide mb-3">Yerba Buena</h3>
            <p className="text-xs text-muted-foreground">Lunes a Sábado</p>
            <p className="text-lg font-display font-bold text-foreground">16:30 – 20:30</p>
            <p className="text-[11px] text-muted-foreground mt-1">Domingo cerrado</p>
          </div>
          <div className="rounded-sm bg-card border border-border/50 p-6">
            <div className="text-accent mb-3">
              <svg className="w-7 h-7 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide mb-3">Capital</h3>
            <p className="text-xs text-muted-foreground">Lunes a Sábado</p>
            <p className="text-base font-display font-bold text-foreground">10:00 – 13:00</p>
            <p className="text-base font-display font-bold text-foreground">17:00 – 21:00</p>
            <p className="text-[11px] text-muted-foreground mt-1">Domingo cerrado</p>
          </div>
        </div>
      </div>
    </section>
  );
}
