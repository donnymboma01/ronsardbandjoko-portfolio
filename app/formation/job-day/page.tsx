import { FiBriefcase } from "react-icons/fi";

export const metadata = {
  title: "Job Day | Ronsard Bandjoko",
};

const skills = [
  "Réseautage",
  "Communication professionnelle",
  "Préparation à l'emploi",
  "Présentation de soi",
];

export default function JobDayPage() {
  return (
    <div className="page narrow-page">
      <section className="text-flow large-text">
        <p>
          Dans le cadre d'un Job Day organisé par l'EPHEC, j'ai eu
          l'opportunité de rencontrer de nombreuses entreprises et d'assister à
          plusieurs conférences professionnelles.
        </p>
        <p>
          J'ai également participé à des séances de questions-réponses avec des
          recruteurs et eu la possibilité de déposer mon CV auprès de
          différentes entreprises.
        </p>
      </section>

      <section className="focus-row" aria-label="Compétences développées">
        {skills.map((skill) => (
          <div key={skill}>
            <FiBriefcase aria-hidden="true" />
            <span>{skill}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
