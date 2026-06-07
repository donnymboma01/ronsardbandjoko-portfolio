import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <div className="page">
      <section className="home-hero">
        <div className="hero-copy">
          <div className="hero-intro">
            {/* <div className="hero-avatar">
              <Image
                src="/images/ronsard.PNG"
                alt="Ronsard Bandjoko"
                fill
                sizes="80px"
                style={{ objectFit: "cover", objectPosition: "top" }}
                priority
              />
            </div> */}
            <div>
              <p className="hero-name">Ronsard Bandjoko</p>
              <p className="lead" style={{ margin: 0 }}>
                Étudiant en Bachelier Électromécanique
              </p>
            </div>
          </div>

          <div className="text-flow">
            <p>
              Passionné par les technologies et les systèmes techniques, je me
              suis orienté vers l'électromécanique afin d'acquérir une
              compréhension globale des systèmes industriels, de l'électricité,
              de l'automatisation et de la maintenance.
            </p>
            <p>
              À travers ce portfolio, je présente mon parcours académique, mes
              compétences ainsi que les expériences qui ont contribué à mon
              développement professionnel.
            </p>
            <p>
              Mon objectif est de continuer à développer mes compétences
              techniques tout en m'orientant progressivement vers les métiers
              liés à la Data et à l'analyse des données.
            </p>
          </div>

          <div className="hero-actions">
            <Link
              href="/a-propos"
              className="primary-link"
              transitionTypes={["nav-forward"]}
            >
              Voir le parcours
              <FiArrowRight aria-hidden="true" />
            </Link>
            <Link
              href="/competences"
              className="quiet-link"
              transitionTypes={["nav-forward"]}
            >
              Compétences
            </Link>
          </div>
        </div>

        <div className="hero-photo-panel">
          <Image
            src="/images/ronsard.PNG"
            alt="Ronsard Bandjoko"
            fill
            sizes="(min-width: 760px) 40vw, 100vw"
            style={{ objectFit: "cover", objectPosition: "top" }}
            priority
          />
        </div>
      </section>
    </div>
  );
}

