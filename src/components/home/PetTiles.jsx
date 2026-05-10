import tileDog from '../../assets/pets/home/tile-dog.jpg';
import tileCat from '../../assets/pets/home/tile-cat.jpg';
import tileCat2 from '../../assets/pets/home/tile-cat-2.jpg';
import tileFish from '../../assets/pets/home/tile-fish.jpg';

function ShopBadge({ children }) {
  return (
    <div className="absolute left-5 top-5 inline-flex h-[38px] items-center border border-ink bg-white px-4 text-[13px] font-semibold uppercase leading-none tracking-[0.06em] text-ink">
      {children}
    </div>
  );
}

function Tile({ img, alt = '', label, className = '' }) {
  return (
    <div className={`relative overflow-hidden bg-[rgba(28,28,28,0.5)] ${className}`}>
      <img src={img} alt={alt} className="h-full w-full object-cover" />
      <ShopBadge>{label}</ShopBadge>
    </div>
  );
}

export function PetTiles() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 pb-16 md:px-[22px] md:pb-24">
        <div className="grid gap-4 md:flex md:gap-5">
          {/* Left — Dog */}
          <Tile
            img={tileDog}
            alt="Dog"
            label="Shop Dog Food"
            className="h-[380px] w-full md:h-[610px] md:w-[452px] md:flex-none"
          />

          {/* Middle — Cat (top) + Bird (bottom) */}
          <div className="flex w-full flex-col gap-4 md:w-[452px] md:flex-none md:gap-[18px]">
            <Tile
              img={tileCat}
              alt="Cat"
              label="Shop Cat Toy"
              className="h-[248px] md:h-[294px]"
            />
            <Tile
              img={tileCat2}
              alt="Bird"
              label="Shop Bird"
              className="h-[248px] md:h-[294px]"
            />
          </div>

          {/* Right — Fish */}
          <Tile
            img={tileFish}
            alt="Fish"
            label="Shop Fish Toy"
            className="h-[380px] w-full md:h-[610px] md:w-[452px] md:flex-none"
          />
        </div>
      </div>
    </section>
  );
}
