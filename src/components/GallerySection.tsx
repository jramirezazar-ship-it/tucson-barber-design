import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import local1 from "@/assets/local-1.jpg";
import local2 from "@/assets/local-2.jpg";

const images = [
  { src: gallery1, alt: "Corte con diseño y fade en Tucson Barber Shop" },
  { src: gallery2, alt: "Fade clásico con detalle en la nuca" },
  { src: gallery3, alt: "Mullet moderno con fade y diseño" },
  { src: gallery4, alt: "Corte clásico con fade bajo prolijo" },
  { src: gallery5, alt: "Taper fade definido por Tucson Barber Shop" },
  { src: gallery6, alt: "Cliente conforme tras su corte de pelo" },
  { src: local1, alt: "Interior de Tucson Barber Shop con sillones y espejos" },
  { src: local2, alt: "Vidriera y fachada de Tucson Barber Shop" },
];

export default function GallerySection() {
  return (
    <section id="galeria" className="section-padding bg-surface scroll-mt-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-[0.3em] text-accent uppercase">Nuestro trabajo</span>
          <h2 className="section-title mt-3">Galería</h2>
          <div className="mx-auto mt-4 gold-line" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div key={i} className="gallery-item aspect-square">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
