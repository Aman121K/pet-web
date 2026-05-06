import pick1 from '../../assets/pets/home/pick-1.jpg';
import pick2 from '../../assets/pets/home/pick-2.jpg';
import pick3 from '../../assets/pets/home/pick-3.jpg';
import { SectionShell } from './SectionShell.jsx';

const picks = [
  {
    img: pick1,
    title: 'Platinum Open Victorian Top with Plastic Base Bird Cage',
    brand: 'Canagan',
    price: '$221.00',
    compareAt: '$222.74',
  },
  {
    img: pick2,
    title: 'Premium House Bed for Small Dogs',
    brand: 'Pet Square',
    price: '$94.99',
    compareAt: '$119.00',
  },
  {
    img: pick3,
    title: 'Healthy nutrition dry food',
    brand: 'Canagan',
    price: '$48.50',
    compareAt: '$59.00',
  },
];

function Card(p) {
  return (
    <article className="border border-line bg-white">
      <div className="aspect-[4/3] bg-surface">
        <img src={p.img} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-[14px] font-semibold leading-snug text-ink line-clamp-2">
          {p.title}
        </h3>
        <p className="mt-2 text-[12px] text-muted">{p.brand}</p>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-[14px] font-semibold text-ink">{p.price}</span>
          <span className="text-[12px] text-muted line-through">{p.compareAt}</span>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex h-9 items-center border border-line bg-white">
            <button className="h-9 w-9 text-ink/70 hover:bg-surface" type="button">
              −
            </button>
            <div className="w-10 text-center text-[13px] font-semibold text-ink">1</div>
            <button className="h-9 w-9 text-ink/70 hover:bg-surface" type="button">
              +
            </button>
          </div>
          <button
            type="button"
            className="h-9 flex-1 bg-ink px-4 text-[12px] font-semibold tracking-wider text-white"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </article>
  );
}

export function TopPicks() {
  return (
    <SectionShell className="bg-white py-10">
      <div className="flex items-center justify-between">
        <h2 className="text-[16px] font-semibold text-ink">Our top picks for your pets</h2>
        <button type="button" className="text-[12px] font-semibold text-ink/70">
          View all
        </button>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {picks.map((p) => (
          <Card key={p.title} {...p} />
        ))}
      </div>
    </SectionShell>
  );
}

