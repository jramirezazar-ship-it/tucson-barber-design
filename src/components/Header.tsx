import { useEffect, useState } from "react";
import logo from "@/assets/logo-tucson.jpeg";
import { WHATSAPP_URL } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/50 py-2"
          : "bg-gradient-to-b from-background/80 to-transparent py-3"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Logo Tucson Barber Shop"
            width={48}
            height={48}
            className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover ring-2 ring-accent/60 group-hover:ring-accent transition"
          />
          <span className="font-display font-bold uppercase tracking-[0.2em] text-foreground text-sm md:text-base">
            Tucson <span className="text-accent">Barber</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-xs font-display uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#servicios" className="hover:text-accent transition">Servicios</a>
          <a href="#galeria" className="hover:text-accent transition">Galería</a>
          <a href="#locales" className="hover:text-accent transition">Locales</a>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-sm border border-accent/60 bg-accent/10 px-4 py-2 text-xs font-display uppercase tracking-[0.2em] text-accent hover:bg-accent hover:text-accent-foreground transition"
        >
          Reservar
        </a>
      </div>
    </header>
  );
}
