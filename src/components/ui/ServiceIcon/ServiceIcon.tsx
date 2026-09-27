import type { ServiceIconName } from "@/data/services";

import styles from "./ServiceIcon.module.css";

type ServiceIconProps = {
  name: ServiceIconName;
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

  if (name === "roof") {
    return (
      <svg className={styles.icon} {...commonProps}>
        <path d="m5 25 19-16 19 16M10 22v20h28V22M16 30h16M15 36h18" />
      </svg>
    );
  }

  if (name === "facade") {
    return (
      <svg className={styles.icon} {...commonProps}>
        <path d="M8 42h32M11 42V10h26v32M17 16h5v6h-5v-6Zm9 0h5v6h-5v-6Zm-9 12h5v6h-5v-6Zm9 0h5v6h-5v-6Z" />
      </svg>
    );
  }

  if (name === "plumbing") {
    return (
      <svg className={styles.icon} {...commonProps}>
        <path d="M9 7v13a5 5 0 0 0 5 5h20a5 5 0 0 1 5 5v11M4 7h10M34 41h10M20 19v12M15 19h10M15 31h10" />
      </svg>
    );
  }

  if (name === "electrical") {
    return (
      <svg className={styles.icon} {...commonProps}>
        <path d="M27 5 13 27h10l-2 16 14-23H25l2-15Z" />
      </svg>
    );
  }

  if (name === "concrete") {
    return (
      <svg className={styles.icon} {...commonProps}>
        <path d="M7 38h34M10 28h28v10H10V28Zm4-9h20v9H14v-9Zm5-9h10v9H19v-9Z" />
      </svg>
    );
  }

  if (name === "demolition") {
    return (
      <svg className={styles.icon} {...commonProps}>
        <path d="m8 40 22-22m-5-9 14 14M22 12l5-5 14 14-5 5L22 12ZM9 34l5 5M7 42l7-3-5-5-2 8Z" />
      </svg>
    );
  }

  if (name === "metalwork") {
    return (
      <svg className={styles.icon} {...commonProps}>
        <path d="M10 39h28M14 39V14h20v25M14 20h20M20 14v25m8-25v25M9 9l4 4m0-6-2 5m6-2-5 2" />
      </svg>
    );
  }

  return (
    <svg className={styles.icon} {...commonProps}>
      <path d="M12 15h24l-2 27H14l-2-27ZM9 15h30M18 15V9h12v6M20 22v13M28 22v13" />
    </svg>
  );
}
