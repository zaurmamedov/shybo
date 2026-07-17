"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Logo } from "@/components/ui/Logo/Logo";

import { Container } from "../Container/Container";
import styles from "./Header.module.css";

const navigation = [
  { href: "/", label: "Головна" },
  { href: "/services", label: "Послуги" },
  { href: "/projects", label: "Проєкти" },
  { href: "/about", label: "Про компанію" },
  { href: "/contacts", label: "Контакти" },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia("(min-width: 58rem)");
    const closeMenuOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };

    desktopMediaQuery.addEventListener("change", closeMenuOnDesktop);
    return () => desktopMediaQuery.removeEventListener("change", closeMenuOnDesktop);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const isActiveRoute = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Logo className={styles.logo} onClick={closeMenu} preload showName />

        <button
          ref={menuButtonRef}
          className={styles.menuButton}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? "Закрити меню" : "Відкрити меню"}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span
            className={`${styles.menuIcon} ${isMenuOpen ? styles.menuIconOpen : ""}`}
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav
          className={`${styles.navigation} ${isMenuOpen ? styles.navigationOpen : ""}`}
          id="primary-navigation"
          aria-label="Основна навігація"
        >
          <ul className={styles.navigationList}>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  className={styles.navigationLink}
                  href={item.href}
                  aria-current={isActiveRoute(item.href) ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className={styles.ctaItem}>
              <Link className={styles.cta} href="/contacts" onClick={closeMenu}>
                Зв’язатися з нами
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
