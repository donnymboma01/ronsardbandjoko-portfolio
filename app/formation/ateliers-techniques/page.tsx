import { FiTool } from "react-icons/fi";

export const metadata = {
  title: "Ateliers techniques | Ronsard Bandjoko",
};

const workshops = [
  {
    place: "TechnoCampus",
    title: "Techniques de soudage",
    description:
      "Formation pratique consacrée aux différentes techniques de soudage.",
    skills: [
      "Soudage MIG",
      "Soudage TIG",
      "Soudage à l'électrode enrobée",
      "Travail de précision",
    ],
  },
  {
    place: "Technicity",
    title: "Fraisage",
    description:
      "Activité pratique consacrée au fraisage dans le cadre du cours de maintenance.",
    skills: [
      "Fraisage",
      "Fabrication mécanique",
      "Lecture de plans techniques",
      "Maintenance industrielle",
    ],
  },
];

export default function AteliersPage() {
  return (
    <div className="page narrow-page">
      <div className="timeline">
        {workshops.map((ws) => (
          <section key={ws.place} className="timeline-item">
            <div className="timeline-content">
              <div className="skill-title">
                <FiTool aria-hidden="true" />
                <h2>{ws.place}</h2>
              </div>
              <p className="subtitle">{ws.title}</p>
              <p className="support-text">{ws.description}</p>
              <p className="section-kicker" style={{ marginTop: "1rem" }}>
                Compétences développées
              </p>
              <ul className="inline-list">
                {ws.skills.map((skill) => (
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
