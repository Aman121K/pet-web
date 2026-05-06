const brands = [
  { src: '/Science-Selective 1.png', alt: 'Science Selective' },
  { src: '/picolo.png', alt: 'Picolo' },
  { src: '/Science-Selective 1.png', alt: 'Science Selective' },
  { src: '/picolo.png', alt: 'Picolo' },
  { src: '/Science-Selective 1.png', alt: 'Science Selective' },
  { src: '/Science-Selective 1.png', alt: 'Science Selective' },
];

export function BrandLineup() {
  return (
    <section className="h-auto bg-white md:h-[200px] md:rounded-[5px]">
      <div className="mx-auto flex h-full max-w-[1440px] flex-wrap items-center justify-center gap-x-12 gap-y-8 px-6 py-10 md:flex-nowrap md:justify-between md:px-[147px] md:py-[82px]">
        {brands.map((brand, index) => (
          <img
            key={`${brand.alt}-${index}`}
            src={brand.src}
            alt={brand.alt}
            className="h-9 w-auto shrink-0 object-contain"
          />
        ))}
      </div>
    </section>
  );
}
