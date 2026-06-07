import { skillGroups } from "../_data/portfolio";

export const metadata = {
  title: "Compétences | Ronsard Bandjoko",
};

export default function SkillsPage() {
  return (
    <div className="page">
      <div className="skills-layout">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <section className="skill-section" key={group.title}>
              <div className="skill-title">
                <Icon aria-hidden="true" />
                <h2>{group.title}</h2>
              </div>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
