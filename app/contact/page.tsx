import { FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export const metadata = {
  title: "Contact | Ronsard Bandjoko",
};

const contacts = [
  {
    icon: FiMail,
    label: "ronsard96@gmail.com",
    href: "mailto:ronsard96@gmail.com",
  },
  {
    icon: FiPhone,
    label: "+32 488 19 28 49",
    href: "tel:+32488192849",
  },
  {
    icon: FiMapPin,
    label: "Bruxelles, Belgique",
    href: null,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn – Ronsard Bandjoko",
    href: "https://www.linkedin.com/in/ronsard-bandjoko-444257236/",
  },
];

export default function ContactPage() {
  return (
    <div className="page narrow-page">
      <ul className="contact-list">
        {contacts.map((item) => {
          const Icon = item.icon;
          const inner = (
            <>
              <span className="contact-icon">
                <Icon aria-hidden="true" />
              </span>
              <span>{item.label}</span>
            </>
          );

          const isLinkedIn = Icon === FiLinkedin;

          return (
            <li key={item.label}>
              {item.href && isLinkedIn ? (
                <a
                  className="contact-item"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {inner}
                </a>
              ) : (
                <div className="contact-item">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
