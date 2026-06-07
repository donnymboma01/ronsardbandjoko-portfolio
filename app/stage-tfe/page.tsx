import { FiCheckCircle } from "react-icons/fi";
import { tfeMissions } from "../_data/portfolio";

export const metadata = {
  title: "Stage & TFE | Ronsard Bandjoko",
};

export default function StageTfePage() {
  return (
    <div className="page">

      <div className="split-content">
        <section className="text-flow">
          <p className="section-kicker">Stage chez Amoyah</p>
          <h2>Installations électriques</h2>
          <p>
            Dans le cadre de ma formation, j’ai effectué mon stage chez Amoyah,
            une entreprise spécialisée dans les installations électriques.
          </p>
          <p>
            Cette expérience m’a permis de participer à différentes tâches
            techniques, de découvrir le fonctionnement d’une entreprise du
            secteur et de mettre en pratique les connaissances acquises durant
            ma formation.
          </p>
        </section>

        <section className="text-flow">
          <p className="section-kicker">Travail de Fin d’Études</p>
          <h2>
            Étude et dimensionnement d’une installation électrique dans un
            bâtiment tertiaire
          </h2>
          <p className="support-text">Pôle culturel de Tamines</p>
          <p>Mes principales missions :</p>
          <ul className="check-list">
            {tfeMissions.map((mission) => (
              <li key={mission}>
                <FiCheckCircle aria-hidden="true" />
                <span>{mission}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
