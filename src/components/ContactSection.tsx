import { WHATSAPP_URL, MAPS_YERBA_BUENA, MAPS_CAPITAL } from "@/lib/constants";

const locations = [
  {
    name: "Yerba Buena",
    address: "Chubut 2550",
    city: "Yerba Buena, Tucumán",
    hours: ["Lunes a Sábado", "16:30 – 20:30"],
    maps: MAPS_YERBA_BUENA,
  },
  {
    name: "Capital",
    address: "Sucursal Capital",
    city: "San Miguel de Tucumán",
    hours: ["Lunes a Sábado", "10:00 – 13:00 · 17:00 – 21:00"],
    maps: MAPS_CAPITAL,
  },
];

export default function ContactSection() {
  return (
    <section id="locales" className="section-padding scroll-mt-16">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-[0.3em] text-accent uppercase">Encontranos</span>
          <h2 className="section-title mt-3">Nuestros locales</h2>
          <div className="mx-auto mt-4 gold-line" />
          <p className="mt-6 text-sm text-muted-foreground">Dos sucursales para atenderte mejor</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {locations.map((loc) => (
            <div key={loc.name} className="rounded-sm bg-card border border-border/50 p-8 text-center flex flex-col">
              <div className="text-accent mb-4">
                <svg className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <span className="font-display text-xs tracking-[0.3em] text-accent uppercase mb-2">Sucursal</span>
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide mb-3">{loc.name}</h3>
              <p className="text-foreground text-sm">{loc.address}</p>
              <p className="text-muted-foreground text-sm mb-5">{loc.city}</p>

              <div className="border-t border-border/50 pt-4 mb-6">
                <span className="font-display text-[10px] tracking-[0.3em] text-accent uppercase">Horarios</span>
                <p className="text-muted-foreground text-xs mt-2">{loc.hours[0]}</p>
                <p className="text-foreground font-display font-bold text-base mt-1">{loc.hours[1]}</p>
                <p className="text-muted-foreground text-[11px] mt-1">Domingo cerrado</p>
              </div>

              <a
                href={loc.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold mt-auto self-center"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Cómo llegar
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Reservar turno por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
