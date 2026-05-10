import scienceSelectiveLogo from '../../assets/pets/home/Science-Selective 1.png';
import picoloLogo from '../../assets/pets/home/picolo.png';

const brands = [
  { src: scienceSelectiveLogo, alt: 'Science Selective' },
  { src: picoloLogo, alt: 'Picolo' },
  { src: scienceSelectiveLogo, alt: 'Science Selective' },
  { src: picoloLogo, alt: 'Picolo' },
  { src: scienceSelectiveLogo, alt: 'Science Selective' },
  { src: scienceSelectiveLogo, alt: 'Science Selective' },
];

export function BrandLineup() {
  return (
    <section className="h-[142px] overflow-hidden bg-white md:h-[200px] md:rounded-[5px]">
      <div className="mx-auto flex h-full max-w-[1440px] flex-nowrap items-center justify-start gap-x-[58px] px-7 py-0 md:justify-between md:gap-x-12 md:px-[147px] md:py-[82px]">
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
