export const metadata = {
  title: "Formation | Ronsard Bandjoko",
};

const ephecSubjects = [
  "Électricité industrielle et domestique",
  "Automatisation",
  "Maintenance",
  "Mécanique",
  "Domotique",
  "HVAC",
  "Régulation",
  "DAO",
];

export default function FormationPage() {
  return (
    <div className="page">
      <div className="timeline">
        <section className="timeline-item">
          <div className="timeline-date">2021 – Présent</div>
          <div className="timeline-content">
            <h2>EPHEC – Bachelier en Électromécanique</h2>
            <div className="text-flow">
              <p>
                Mon parcours en électromécanique à l’EPHEC m’a permis
                d’acquérir des compétences dans plusieurs domaines techniques
                complémentaires offrant une vision globale des systèmes
                industriels modernes.
              </p>
              <p>J’ai notamment étudié :</p>
            </div>
            <ul className="inline-list">
              {ephecSubjects.map((subject) => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
            <p className="support-text">
              Les nombreux travaux pratiques et projets m’ont permis de
              développer mon autonomie, mon esprit d’analyse et ma capacité à
              résoudre des problèmes techniques.
            </p>
          </div>
        </section>

        <section className="timeline-item">
          <div className="timeline-date">2019 – 2021</div>
          <div className="timeline-content">
            <h2>Institut Filles de Marie</h2>
            <p className="subtitle">Assistant en Pharmacie</p>
            <p className="support-text">
              Cette formation m’a permis d’acquérir de la rigueur, de
              l’organisation ainsi qu’une méthode de travail structurée qui me
              sont encore utiles aujourd’hui.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
