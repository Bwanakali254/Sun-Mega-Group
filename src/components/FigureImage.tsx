interface FigureImageProps {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
}

export default function FigureImage({
  src,
  alt,
  caption,
  priority = false,
  className = "",
}: FigureImageProps) {
  return (
    <figure className={className}>
      <img
        src={src}
        alt={alt}
        width={1600}
        height={900}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover"
      />
      {caption ? (
        <figcaption className="mt-2 text-xs text-slate">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
