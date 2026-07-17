import type { Service } from "@/data/services";

import styles from "./ServiceIcon.module.css";

type ServiceIconProps = {
  name: Service["icon"];
};

const commonProps = {
  "aria-hidden": true,
  fill: "none",
  focusable: false,
  viewBox: "0 0 48 48",
} as const;

export function ServiceIcon({ name }: ServiceIconProps) {
  if (name === "building") {
    return (
      <svg className={styles.icon} {...commonProps}>
        <path d="M7 42h34M11 42V18h18v24M29 26h8v16M16 24h3m5 0h1m-9 7h3m5 0h1m-9 7h3m5 0h1M8 18h24M12 13h25m0 0-5-4m5 4-5 4M19 13V7" />
      </svg>
    );
  }

  if (name === "repair") {
    return (
      <svg className={styles.icon} {...commonProps}>
        <rect x="8" y="9" width="28" height="11" rx="2" />
        <path d="M36 14h4v10H24v6m0 0v13m0-13h-5v13h10V30h-5Z" />
      </svg>
    );
  }

  if (name === "finishing") {
    return (
      <svg className={styles.icon} {...commonProps}>
        <path d="m9 36 24-24 6 6-24 24H9v-6Z" />
        <path d="m29 16 6 6M9 42h14M7 29c5-4 9-4 14 0M8 24c3-2 6-2 9 0" />
      </svg>
    );
  }

  return (
    <svg className={styles.icon} {...commonProps}>
      <path d="M8 42 17 7h14l9 35M15 31h18M12 42h24" />
      <path d="M24 9v7m0 7v7m0 7v5" strokeDasharray="4 4" />
    </svg>
  );
}
