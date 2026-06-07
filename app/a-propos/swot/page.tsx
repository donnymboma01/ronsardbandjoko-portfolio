export const metadata = {
  title: "SWOT | Ronsard Bandjoko",
};

export default function SwotPage() {
  return (
    <div className="page narrow-page">
      <div className="swot-board">
        {/* Forces – blue */}
        <section className="swot-quadrant swot-forces">
          <h2 className="swot-q-title">Forces</h2>
          <ul className="swot-q-list">
            {["Curieux", "Persévérant", "Autonome", "Esprit d'équipe", "Adaptable", "Rigoureux"].map(
              (item) => <li key={item}>{item}</li>,
            )}
          </ul>
        </section>

        {/* Faiblesses – green */}
        <section className="swot-quadrant swot-faiblesses">
          <h2 className="swot-q-title">Faiblesses</h2>
          <ul className="swot-q-list">
            {[
              "Expérience professionnelle limitée",
              "Réseau professionnel à développer",
              "Besoin d'approfondir certaines spécialisations",
            ].map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        {/* Opportunités – yellow/amber */}
        <section className="swot-quadrant swot-opportunites">
          <h2 className="swot-q-title">Opportunités</h2>
          <ul className="swot-q-list">
            {[
              "Industrie 4.0",
              "Data",
              "Automatisation",
              "Évolution technologique",
              "Expérience acquise durant le stage",
            ].map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        {/* Menaces – red */}
        <section className="swot-quadrant swot-menaces">
          <h2 className="swot-q-title">Menaces</h2>
          <ul className="swot-q-list">
            {[
              "Concurrence sur le marché de l'emploi",
              "Évolution rapide des technologies",
              "Nécessité de formation continue",
            ].map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        {/* Centre badge */}
        <div className="swot-badge" aria-hidden="true">
          <span className="sw">S</span>
          <span className="wo">W</span>
          <span className="ow">O</span>
          <span className="wt">T</span>
        </div>
      </div>
    </div>
  );
}
