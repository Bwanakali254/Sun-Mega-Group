import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center rounded px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const variants = {
  primary: "bg-orange text-navy-deep hover:bg-gold",
  secondary:
    "border border-paper/25 text-paper hover:border-gold hover:text-gold",
  ghost: "text-current underline-offset-4 hover:underline",
} as const;

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}

export default function ButtonLink({
  to,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const isHash = to.startsWith("#");
  const isExternal = /^https?:\/\//.test(to);

  if (isExternal) {
    return (
      <a
        href={to}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  if (isHash) {
    return (
      <a href={to} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}
