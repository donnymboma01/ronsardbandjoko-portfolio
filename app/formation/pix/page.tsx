export const metadata = {
  title: "PIX | Ronsard Bandjoko",
};

export default function PixPage() {
  return (
    <div className="page narrow-page">
      <section className="text-flow large-text">
        <p>
          La certification PIX évalue les compétences numériques selon le
          référentiel européen DigComp. Les résultats seront disponibles après
          validation officielle.
        </p>
      </section>

      <div
        style={{
          marginTop: "clamp(2rem, 5vw, 3.5rem)",
          padding: "clamp(1.5rem, 4vw, 2.5rem)",
          border: "1px solid var(--line)",
          borderRadius: "1rem",
          background: "color-mix(in srgb, var(--surface) 80%, transparent)",
        }}
      >
        <p className="section-kicker">À compléter après validation</p>
        <ul className="inline-list" style={{ marginTop: "0.75rem" }}>
          {["Score PIX", "Compétences numériques développées"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
