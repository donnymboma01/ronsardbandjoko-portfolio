import Image from "next/image";

export const metadata = {
  title: "PIX | Ronsard Bandjoko",
};

export default function PixPage() {
  return (
    <div className="page narrow-page">
      <section className="text-flow large-text">
        <div
          style={{
            marginBottom: "2rem",
            borderRadius: "1rem",
            overflow: "hidden",
            border: "1px solid var(--line)",
          }}
        >
          <Image
            src="/images/pix.png"
            alt="Parcours PIX"
            width={800}
            height={400}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <p>
          J’ai participé au parcours PIX afin d’évaluer et de renforcer mes
          compétences numériques. Les résultats obtenus mettent en évidence des
          acquis dans plusieurs domaines, notamment la gestion de l’information
          et des données, la communication et la collaboration numériques. Cette
          démarche s’inscrit dans la préparation à la certification PIX, que je
          présenterai le 22 juin 2026, afin de faire reconnaître officiellement
          ces compétences numériques.
        </p>
      </section>
    </div>
  );
}
