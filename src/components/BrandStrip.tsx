import Image from "next/image";

const BRANDS = [
  "/images/brand-1.png",
  "/images/brand-2.png",
  "/images/brand-3.png",
  "/images/brand-4.png",
  "/images/brand-5.png",
  "/images/brand-6.png",
];

export function BrandStrip() {
  return (
    <section className="overflow-hidden border-b border-black/5 bg-white py-8">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-center gap-x-12 gap-y-6 px-6">
        {BRANDS.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`Trusted roofing brand ${i + 1}`}
            width={160}
            height={64}
            className="h-12 w-auto object-contain sm:h-14"
          />
        ))}
      </div>
    </section>
  );
}
