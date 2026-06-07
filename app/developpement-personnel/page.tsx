import { FiBookOpen, FiCode, FiGlobe } from "react-icons/fi";

export const metadata = {
  title: "Développement personnel | Ronsard Bandjoko",
};

export default function DevelopmentPage() {
  return (
    <div className="page narrow-page">

      <section className="text-flow large-text">
        <p>
          En parallèle de ma formation, je consacre du temps à développer de
          nouvelles compétences.
        </p>
        <p>
          Je m’intéresse à la programmation afin d’acquérir des bases solides
          dans les technologies numériques et de préparer progressivement mon
          orientation vers les métiers liés à la Data.
        </p>
        <p>
          Je travaille également à l’amélioration de mon anglais afin de pouvoir
          évoluer dans un environnement professionnel international et accéder
          plus facilement à la documentation technique.
        </p>
        <p>
          Cette démarche reflète ma volonté d’apprendre continuellement et de
          m’adapter aux évolutions technologiques.
        </p>
      </section>

      <section className="focus-row" aria-label="Axes de développement">
        <div>
          <FiCode aria-hidden="true" />
          <span>Programmation</span>
        </div>
        <div>
          <FiGlobe aria-hidden="true" />
          <span>Anglais</span>
        </div>
        <div>
          <FiBookOpen aria-hidden="true" />
          <span>Veille technique</span>
        </div>
      </section>
    </div>
  );
}
