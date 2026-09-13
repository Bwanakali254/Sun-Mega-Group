import { Link } from "react-router-dom";
import { site } from "../data/site";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-9 w-auto max-w-[180px]" }: LogoProps) {
  return (
    <Link
      to="/"
      className="inline-flex shrink-0 items-center rounded bg-paper px-2 py-1"
    >
      <img
        src={site.logoSrc}
        alt={site.logoAlt}
        width={180}
        height={40}
        className={`${className} object-contain object-left`}
      />
    </Link>
  );
}
