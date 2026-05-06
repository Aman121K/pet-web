import tileDog from '../../assets/pets/home/tile-dog.jpg';
import tileCat from '../../assets/pets/home/tile-cat.jpg';
import tileFish from '../../assets/pets/home/tile-fish.jpg';
import { SectionShell } from './SectionShell.jsx';

function Tile({ img, label }) {
  return (
    <div className="relative overflow-hidden border border-line bg-surface">
      <img src={img} alt="" className="h-full w-full object-cover" />
      <div className="absolute left-3 top-3 border border-line bg-white px-2 py-1 text-[10px] font-semibold tracking-wider text-ink">
        {label.toUpperCase()}
      </div>
    </div>
  );
}

export function PetTiles() {
  return (
    <SectionShell className="bg-white py-10">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="h-[260px] sm:h-[320px]">
              <Tile img={tileDog} label="Shop for dog" />
            </div>
            <div className="h-[260px] sm:h-[320px]">
              <Tile img={tileCat} label="Shop for cat" />
            </div>
          </div>
        </div>
        <div className="h-[546px] lg:h-auto">
          <Tile img={tileFish} label="Shop for fish" />
        </div>
      </div>
    </SectionShell>
  );
}

