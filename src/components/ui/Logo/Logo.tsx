import Image from "next/image";
import Link from "next/link";
import type { MouseEventHandler } from "react";

import styles from "./Logo.module.css";

type LogoProps = {
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  preload?: boolean;
  showName?: boolean;
};

export function Logo({
  className,
  onClick,
  preload = false,
  showName = false,
}: LogoProps) {
  const classes = className ? `${styles.logo} ${className}` : styles.logo;

  return (
    <Link
      className={classes}
      href="/"
      aria-label="ШИБО — на головну сторінку"
      onClick={onClick}
    >
      <Image
        className={styles.image}
        src="/images/logo/shybo-logo.png"
        alt=""
        width={1276}
        height={1233}
        sizes="(min-width: 58rem) 64px, 56px"
        preload={preload}
      />
      {showName && <span className={styles.name}>ШИБО</span>}
    </Link>
  );
}
