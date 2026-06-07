import Image from "next/image";

export const metadata = {
  title: "Galerie | Ronsard Bandjoko",
};

const images = [
  { src: "/images/15993201-61AC-4999-A883-724654795601.PNG", alt: "Photo 1" },
  { src: "/images/4311FA34-F9B6-4987-B934-14E53C02F6E1.PNG", alt: "Photo 2" },
  { src: "/images/IMG_6856.PNG", alt: "Photo 3" },
];

export default function GaleriePage() {
  return (
    <div className="page">
      <div className="gallery-grid">
        {images.map((img) => (
          <div key={img.src} className="gallery-item">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1060px) 33vw, (min-width: 760px) 50vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
