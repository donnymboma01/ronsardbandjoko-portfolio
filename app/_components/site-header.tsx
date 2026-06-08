"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { navItems, type NavGroup } from "../_data/portfolio";

function isGroup(item: (typeof navItems)[number]): item is NavGroup {
  return "children" in item;
}

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const navRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  // Fermer le menu automatiquement quand on change de page
  useEffect(() => {
    setIsOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  // Fermer le dropdown si on clique en dehors (desktop uniquement, pas dans la mobile overlay)
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const inHeader = navRef.current && navRef.current.contains(e.target as Node);
      const inMobileNav = mobileNavRef.current && mobileNavRef.current.contains(e.target as Node);
      if (!inHeader && !inMobileNav) {
        setOpenGroup(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  function closeAll() {
    setIsOpen(false);
    setOpenGroup(null);
  }

  function toggleGroup(label: string) {
    setOpenGroup((prev) => (prev === label ? null : label));
  }

  // Navigation mobile : on navigue d'abord, puis on ferme le menu
  function handleMobileLink(e: React.MouseEvent, href: string) {
    e.preventDefault();
    router.push(href);
    closeAll();
  }

  return (
    <>
      <header className="site-header">
        <Link href="/" className="brand-link" onClick={closeAll}>
          <span className="brand-mark">RB</span>
          <span className="brand-name">Ronsard Bandjoko</span>
        </Link>

        <div className="header-right" ref={navRef}>
          {/* Desktop nav — inline dans le header */}
          <nav className="site-nav-desktop">
            {navItems.map((item) => {
              if (isGroup(item)) {
                const isExpanded = openGroup === item.label;
                return (
                  <div key={item.label} className="nav-group">
                    <button
                      type="button"
                      className="nav-group-trigger"
                      onClick={() => toggleGroup(item.label)}
                      aria-expanded={isExpanded}
                    >
                      {item.label}
                      <FiChevronDown
                        aria-hidden="true"
                        className={isExpanded ? "nav-chevron nav-chevron-open" : "nav-chevron"}
                      />
                    </button>
                    {isExpanded && (
                      <div className="nav-dropdown" role="menu">
                        {item.children.map((child) => {
                          const isActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              role="menuitem"
                              className={isActive ? "nav-link nav-link-active" : "nav-link"}
                              onClick={closeAll}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive ? "nav-link nav-link-active" : "nav-link"}
                  onClick={closeAll}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="/ronsard.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link nav-cv-link"
              onClick={closeAll}
            >
              Mon CV
            </a>
          </nav>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Changer de thème"
            type="button"
          >
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>

          <button
            className="menu-button"
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => { setIsOpen((v) => !v); setOpenGroup(null); }}
          >
            {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* Mobile nav overlay — toujours dans le DOM, caché via classe CSS */}
      <div ref={mobileNavRef} className={`mobile-nav-overlay${isOpen ? "" : " mobile-nav-overlay--hidden"}`}>
        {navItems.map((item) => {
          if (isGroup(item)) {
            const isExpanded = openGroup === item.label;
            return (
              <div key={item.label}>
                <button
                  type="button"
                  className="nav-group-trigger"
                  onClick={() => toggleGroup(item.label)}
                >
                  {item.label}
                  <FiChevronDown
                    aria-hidden="true"
                    className={isExpanded ? "nav-chevron nav-chevron-open" : "nav-chevron"}
                  />
                </button>
                {isExpanded && (
                  <div className="nav-dropdown">
                    {item.children.map((child) => {
                      const isActive = pathname === child.href;
                      return (
                        <a
                          key={child.href}
                          href={child.href}
                          className={isActive ? "nav-link nav-link-active" : "nav-link"}
                          onClick={(e) => handleMobileLink(e, child.href)}
                        >
                          {child.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }
          const isActive = pathname === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              className={isActive ? "nav-link nav-link-active" : "nav-link"}
              onClick={(e) => handleMobileLink(e, item.href)}
            >
              {item.label}
            </a>
          );
        })}
        <a
          href="/ronsard.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link nav-cv-link"
          onClick={closeAll}
        >
          Mon CV
        </a>
      </div>
    </>
  );
}
