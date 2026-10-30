import Image from "next/image";

type FlierProps = { src: string; alt: string; width: number; height: number };

export default function Flier({ src, alt, width, height }: FlierProps) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-sm overflow-hidden rounded-lg shadow-xl ring-1 ring-[var(--line)]"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 768px) 384px, 90vw"
        className="h-auto w-full"
      />
    </a>
  );
}
