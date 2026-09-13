import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow ? (
        <p className={`font-display text-sm ${light ? "text-gold" : "text-orange-deep"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl font-semibold sm:text-4xl ${eyebrow ? "mt-3" : ""} ${light ? "text-paper" : ""}`}
      >
        {title}
      </h2>
      {children ? (
        <div className={`mt-4 max-w-xl text-base ${light ? "text-paper/70" : "text-slate"} ${align === "center" ? "mx-auto" : ""}`}>
          {children}
        </div>
      ) : null}
    </div>
  );
}
