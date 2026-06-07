import { FiShield } from "react-icons/fi";

export const metadata = {
  title: "Prévention & Sécurité | Ronsard Bandjoko",
};

const activities = [
  {
    title: "Serious Game",
    description:
      "Participation à une activité de prévention sous forme de jeu interactif permettant d'identifier les risques et les comportements à adopter dans un environnement professionnel.",
  },
  {
    title: "Formation aux premiers secours",
    description:
      "Acquisition des connaissances de base nécessaires pour intervenir efficacement en cas d'accident ou de malaise.",
  },
];

const skills = [
  "Analyse des risques",
  "Réactivité",
  "Gestion des situations d'urgence",
  "Sens des responsabilités",
];

export default function PreventionSecuritePage() {
  return (
    <div className="page narrow-page">
      <div className="timeline">
        {activities.map((activity) => (
          <section key={activity.title} className="timeline-item">
            <div className="timeline-content">
              <div className="skill-title">
                <FiShield aria-hidden="true" />
                <h2>{activity.title}</h2>
              </div>
              <p className="support-text">{activity.description}</p>
            </div>
          </section>
        ))}
      </div>

      <div style={{ marginTop: "clamp(2rem, 5vw, 3rem)" }}>
        <p className="section-kicker">Compétences développées</p>
        <ul className="inline-list" style={{ marginTop: "0.75rem" }}>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
