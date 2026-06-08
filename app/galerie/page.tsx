"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/image1.png", alt: "Photo 1" },
  { src: "/image2.png", alt: "Photo 2" },
  { src: "/image3.png", alt: "Photo 3" },
  { src: "/image4.png", alt: "Photo 4" },
  { src: "/image5.png", alt: "Photo 5" },
  { src: "/image6.png", alt: "Photo 6" },
  { src: "/image7.png", alt: "Photo 7" },
  { src: "/image8.png", alt: "Photo 8" },
  { src: "/image9.png", alt: "Photo 9" },
  { src: "/image10.PNG", alt: "Photo 10" },
  { src: "/image11.PNG", alt: "Photo 11" }
];

export default function GaleriePage() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");

  function openLightbox(src: string, alt: string) {
    setLightbox(src);
    setLightboxAlt(alt);
  }

  function closeLightbox() {
    setLightbox(null);
  }

  return (
    <div className="page">
      <div className="page-heading">
        <p className="eyebrow">Mes moments</p>
        <h1>Galerie</h1>
        <p className="support-text" style={{ marginTop: "0.75rem" }}>
          Une sélection de photos capturées au fil de mon parcours.
        </p>
      </div>

      <div className="masonry-grid">
        {images.map((img, i) => (
          <div
            key={img.src}
            className="masonry-item"
            onClick={() => openLightbox(img.src, img.alt)}
            role="button"
            tabIndex={0}
            aria-label={`Voir ${img.alt} en grand`}
            onKeyDown={(e) => e.key === "Enter" && openLightbox(img.src, img.alt)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="masonry-img"
              priority={i < 3}
            />
            <div className="masonry-overlay">
              <span className="masonry-zoom">↗</span>
            </div>
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          className="lightbox-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image agrandie"
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Fermer"
          >
            ✕
          </button>
          <div
            className="lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox}
              alt={lightboxAlt}
              width={1400}
              height={1000}
              className="lightbox-img"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
