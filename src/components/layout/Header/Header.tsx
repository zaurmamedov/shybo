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
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!isMenuOpen) return;

    const scrollPosition = window.scrollY;
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyRight = document.body.style.right;
    const previousBodyLeft = document.body.style.left;
    const previousBodyWidth = document.body.style.width;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousHtmlScrollBehavior =
      document.documentElement.style.scrollBehavior;
    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    navigationRef.current
      ?.querySelector<HTMLElement>(focusableSelector)
      ?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = Array.from(
        headerRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? [],
      ).filter((element) => element.getClientRects().length > 0);

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.right = "0";
    document.body.style.left = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.right = previousBodyRight;
      document.body.style.left = previousBodyLeft;
      document.body.style.width = previousBodyWidth;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollPosition);
      document.documentElement.style.scrollBehavior = previousHtmlScrollBehavior;
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
    <header
      className={`${styles.header} ${isMenuOpen ? styles.headerOpen : ""}`}
      ref={headerRef}
    >
      <Container className={styles.inner}>
        <Logo className={styles.logo} onClick={closeMenu} showName />

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
          ref={navigationRef}
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
