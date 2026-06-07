import { FiMapPin } from "react-icons/fi";

export const metadata = {
  title: "Visites d'entreprise | Ronsard Bandjoko",
};

const visits = [
  {
    company: "Schneider Electric",
    description:
      "Découverte d'une entreprise spécialisée dans la gestion de l'énergie et l'automatisation industrielle.",
    skills: [
      "Découverte du monde industriel",
      "Veille technologique",
      "Compréhension des systèmes électriques",
    ],
  },
  {
    company: "Apragaz",
    description:
      "Découverte d'un environnement professionnel technique et sensibilisation à la sécurité dans les activités industrielles.",
    skills: [
      "Sensibilisation à la sécurité",
      "Observation des pratiques industrielles",
      "Curiosité technique",
    ],
  },
];

export default function VisitesEntreprisePage() {
  return (
    <div className="page narrow-page">
      <div className="timeline">
        {visits.map((visit) => (
          <section key={visit.company} className="timeline-item">
            <div className="timeline-content">
              <div className="skill-title">
                <FiMapPin aria-hidden="true" />
                <h2>{visit.company}</h2>
              </div>
              <p className="support-text">{visit.description}</p>
              <p className="section-kicker" style={{ marginTop: "1rem" }}>
                Compétences développées
              </p>
              <ul className="inline-list">
                {visit.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
