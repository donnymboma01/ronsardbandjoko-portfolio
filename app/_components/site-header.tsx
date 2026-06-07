"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { navItems, type NavGroup } from "../_data/portfolio";

function isGroup(item: (typeof navItems)[number]): item is NavGroup {
  return "children" in item;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  function closeAll() {
    setIsOpen(false);
    setOpenGroup(null);
  }

  return (
    <header className="site-header">
      <Link
        href="/"
        className="brand-link"
        transitionTypes={["nav-back"]}
        onClick={closeAll}
      >
        <span className="brand-mark">RB</span>
        <span className="brand-name">Ronsard Bandjoko</span>
      </Link>

      <button
        className="menu-button"
        type="button"
        aria-expanded={isOpen}
        aria-controls="site-navigation"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
      </button>

      <nav
        id="site-navigation"
        className={isOpen ? "site-nav site-nav-open" : "site-nav"}
      >
        {navItems.map((item) => {
          if (isGroup(item)) {
            const isGroupActive = item.children.some(
              (child) =>
                pathname === child.href ||
                pathname.startsWith(child.href + "/"),
            );
            const expanded = openGroup === item.label;

            return (
              <div key={item.label} className="nav-group">
                <button
                  type="button"
                  className={
                    isGroupActive
                      ? "nav-group-trigger nav-group-trigger-active"
                      : "nav-group-trigger"
                  }
                  aria-expanded={expanded}
                  onClick={() =>
                    setOpenGroup(expanded ? null : item.label)
                  }
                >
                  {item.label}
                  <FiChevronDown
                    aria-hidden="true"
                    className={expanded ? "nav-chevron nav-chevron-open" : "nav-chevron"}
                  />
                </button>

                <div
                  className={
                    expanded ? "nav-dropdown nav-dropdown-open" : "nav-dropdown"
                  }
                  role="menu"
                >
                  {item.children.map((child) => {
                    const isActive = pathname === child.href;
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        className={
                          isActive ? "nav-link nav-link-active" : "nav-link"
                        }
                        aria-current={isActive ? "page" : undefined}
                        transitionTypes={["nav-forward"]}
                        onClick={closeAll}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          }

          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={isActive ? "nav-link nav-link-active" : "nav-link"}
              aria-current={isActive ? "page" : undefined}
              transitionTypes={[item.href === "/" ? "nav-back" : "nav-forward"]}
              onClick={closeAll}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
