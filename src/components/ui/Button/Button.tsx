import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "text";
type ButtonSize = "small" | "medium" | "large";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
  };

function getButtonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return [styles.button, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "medium",
  type = "button",
  ...props
}: ButtonProps) {
  const classes = getButtonClasses(variant, size, className);

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className,
  variant = "primary",
  size = "medium",
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={getButtonClasses(variant, size, className)} {...props}>
      {children}
    </Link>
  );
}
