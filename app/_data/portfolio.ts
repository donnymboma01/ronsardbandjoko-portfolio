import {
  FiCpu,
  FiGrid,
  FiHome,
  FiSettings,
  FiTool,
  FiUsers,
  FiZap,
} from "react-icons/fi";

export type NavLeaf = { href: string; label: string };
export type NavGroup = { label: string; children: NavLeaf[] };
export type NavItem = NavLeaf | NavGroup;

export const navItems: NavItem[] = [
  { href: "/", label: "Accueil" },
  {
    label: "À propos",
    children: [
      { href: "/a-propos", label: "À propos" },
      { href: "/a-propos/swot", label: "SWOT" },
      { href: "/a-propos/projet-professionnel", label: "Projet professionnel" },
      { href: "/a-propos/bilan-personnel", label: "Bilan personnel" },
    ],
  },
  {
    label: "Formation",
    children: [
      { href: "/formation", label: "Parcours académique" },
      { href: "/formation/visites-entreprise", label: "Visites d'entreprise" },
      { href: "/formation/ateliers-techniques", label: "Ateliers techniques" },
      { href: "/formation/activites-academiques", label: "Activités académiques" },
      { href: "/formation/job-day", label: "Job Day" },
      { href: "/formation/prevention-securite", label: "Prévention & Sécurité" },
      { href: "/formation/pix", label: "PIX" },
    ],
  },
  { href: "/developpement-personnel", label: "Développement" },
  { href: "/competences", label: "Compétences" },
  { href: "/stage-tfe", label: "Stage & TFE" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export const skillGroups = [
  {
    title: "Électricité",
    icon: FiZap,
    items: [
      "Installations électriques",
      "Réseaux électriques",
      "Machines électriques",
      "Transformateurs",
      "Schémas électriques",
    ],
  },
  {
    title: "Automatisation",
    icon: FiCpu,
    items: ["TIA Portal", "Unity Pro XL", "Grafcet", "Capteurs industriels"],
  },
  {
    title: "DAO & informatique",
    icon: FiGrid,
    items: ["AutoCAD", "Fusion 360", "Excel", "Microsoft Office", "Notions Python"],
  },
  {
    title: "Mécanique & maintenance",
    icon: FiSettings,
    items: ["Analyse des pannes", "Maintenance", "Montage et démontage"],
  },
  {
    title: "Domotique",
    icon: FiHome,
    items: ["KNX", "ETS5", "KNX Virtual"],
  },
  {
    title: "Atelier",
    icon: FiTool,
    items: ["Soudage MIG", "Soudage TIG", "Électrode enrobée", "CNC"],
  },
  {
    title: "Soft skills",
    icon: FiUsers,
    items: ["Curieux", "Persévérant", "Autonome", "Esprit d’équipe", "Adaptable"],
  },
];

export const tfeMissions = [
  "Analyse des plans électriques",
  "Schémas unifilaires",
  "Dimensionnement des circuits",
  "Choix des protections électriques",
  "Vérification de la conformité RGIE",
  "Étude des tableaux électriques",
];
