import { FiStar } from "react-icons/fi";

export const metadata = {
  title: "Activités académiques | Ronsard Bandjoko",
};

const activities = [
  {
    title: "Activité 2 Tonnes",
    description:
      "Sensibilisation aux enjeux environnementaux et à l'impact des choix individuels et collectifs sur le climat.",
    skills: [
      "Développement durable",
      "Responsabilité citoyenne",
      "Réflexion stratégique",
    ],
  },
  {
    title: "Semaine Internationale",
    description:
      "Participation à la création et à l'animation d'un escape game destiné à des élèves du secondaire.",
    skills: [
      "Travail d'équipe",
      "Gestion de projet",
      "Communication",
      "Créativité",
      "Organisation",
    ],
  },
];

export default function ActivitesAcademiquesPage() {
  return (
    <div className="page narrow-page">
      <div className="timeline">
        {activities.map((activity) => (
          <section key={activity.title} className="timeline-item">
            <div className="timeline-content">
              <div className="skill-title">
                <FiStar aria-hidden="true" />
                <h2>{activity.title}</h2>
              </div>
              <p className="support-text">{activity.description}</p>
              <p className="section-kicker" style={{ marginTop: "1rem" }}>
                Compétences développées
              </p>
              <ul className="inline-list">
                {activity.skills.map((skill) => (
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
