import serviceCortes from "@/assets/service-cortes.jpg";
import serviceBarba from "@/assets/service-barba.jpg";
import serviceMascarilla from "@/assets/service-mascarilla.jpg";

const services = [
  {
    img: serviceCortes,
    title: "Cortes masculinos",
    desc: "Fade, mid fade, clásicos y modernos. Cada corte adaptado a tu estilo.",
  },
  {
    img: serviceBarba,
    title: "Barba y perfilado",
    desc: "Contornos definidos, perfilado profesional y prolijidad garantizada.",
  },
  {
    img: serviceMascarilla,
    title: "Mascarilla Facial",
    desc: "Tratamiento facial para limpiar, hidratar y revitalizar la piel, ideal para complementar tu corte y mejorar tu apariencia.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="section-padding scroll-mt-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-[0.3em] text-accent uppercase">Lo que hacemos</span>
          <h2 className="section-title mt-3">Nuestros servicios</h2>
          <div className="mx-auto mt-4 gold-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-sm bg-card border border-border/50 transition-all duration-300 hover:border-accent/30"
            >
              <div className="gallery-item aspect-[4/3]">
                <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold uppercase tracking-wide mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground italic">
          Consultá precios por mensaje o directamente en el local.
        </p>
      </div>
    </section>
  );
}
