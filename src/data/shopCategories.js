import tileCat from '../assets/pets/home/tile-cat.jpg';
import tileDog from '../assets/pets/home/tile-dog.jpg';
import tileFish from '../assets/pets/home/tile-fish.jpg';
import product1 from '../assets/pets/product-1.jpg';
import product2 from '../assets/pets/product-2.jpg';
import pick1 from '../assets/pets/home/pick-1.jpg';

export const shopCategories = [
  {
    key: 'all',
    label: 'Shop All',
    eyebrow: 'Everything',
    description: 'Browse food, grooming, toys, accessories, and care essentials.',
    image: tileDog,
    productFilter: 'all',
    groups: [
      {
        title: 'Popular',
        items: ['New arrivals', 'Best sellers', 'Sale', 'Starter bundles'],
      },
      {
        title: 'Pet Type',
        items: ['Dog', 'Cat', 'Fish', 'Bird'],
      },
    ],
  },
  {
    key: 'cat',
    label: 'Cat',
    eyebrow: 'Shop All',
    description: 'Food, litter, toys, and health products for cats and kittens.',
    image: tileCat,
    productFilter: 'cat',
    groups: [
      {
        title: 'Food',
        items: [
          'Dry Food',
          'Wet Food',
          'Freeze Dried & Dehydrated Food',
          'Vet Diets',
          'Kitten Food',
          'Ageing & Senior Cat Food',
          'Science Health Nutrition',
          'High Meat Diets',
          'Toppers & Mixers',
          'Milk Replacement',
        ],
      },
      {
        title: 'Flea & Worm',
        items: [
          'Topical Treatments',
          'Oral Treatments',
          'Flea Treatment',
          'Mite Treatment',
          'Tick Treatment',
          'Worm Treatment',
        ],
      },
      {
        title: 'Accessories',
        items: [
          'Clean Up',
          'Doors & Carriers',
          'Beds & Scratch',
          'Bowls & Feeders',
          'Grooming',
          'Leads & Collars',
          'Litter',
          'Toys',
          'Tech',
          'Bundles',
        ],
      },
      {
        title: 'Health',
        items: [
          'Supplements',
          'Digestive Health',
          'Skin & Coat Health',
          'Bone & Joint Support',
          'Dental Care',
          'Anxiety & Calming Care',
          'Ear & Eye Care',
        ],
      },
      {
        title: 'Treats',
        items: ['Biscuits & Crunchy Treats', 'Dental Treats', 'Freeze Dried Treats'],
      },
    ],
  },
  {
    key: 'dog',
    label: 'Dog',
    eyebrow: 'Shop All',
    description: 'Daily dog food, walking gear, toys, and grooming supplies.',
    image: tileDog,
    productFilter: 'dog',
    groups: [
      {
        title: 'Food',
        items: ['Dry Food', 'Wet Food', 'Puppy Food', 'Senior Dog Food', 'Vet Diets', 'High Protein Food'],
      },
      {
        title: 'Accessories',
        items: ['Beds', 'Bowls & Feeders', 'Leads & Harnesses', 'Carriers', 'Travel', 'Training'],
      },
      {
        title: 'Health',
        items: ['Flea & Tick', 'Joint Support', 'Dental Care', 'Skin & Coat', 'Calming Care'],
      },
      {
        title: 'Treats & Toys',
        items: ['Training Treats', 'Chews', 'Plush Toys', 'Fetch Toys', 'Puzzle Toys'],
      },
    ],
  },
  {
    key: 'fish',
    label: 'Fish',
    eyebrow: 'Shop All',
    description: 'Aquarium care, food, filters, and water treatment essentials.',
    image: tileFish,
    productFilter: 'fish',
    groups: [
      {
        title: 'Food',
        items: ['Flakes', 'Pellets', 'Freeze Dried', 'Bottom Feeder Food'],
      },
      {
        title: 'Aquarium',
        items: ['Filters', 'Water Care', 'Decor', 'Lighting', 'Cleaning'],
      },
      {
        title: 'Health',
        items: ['Water Testing', 'Conditioners', 'Medication', 'Plant Care'],
      },
    ],
  },
  {
    key: 'bird',
    label: 'Bird',
    eyebrow: 'Shop All',
    description: 'Food, cages, toys, and care products for happy birds.',
    image: product1,
    productFilter: 'bird',
    groups: [
      {
        title: 'Food',
        items: ['Seed Mixes', 'Pellets', 'Treats', 'Supplements'],
      },
      {
        title: 'Accessories',
        items: ['Cages', 'Perches', 'Toys', 'Feeders', 'Cleaning'],
      },
      {
        title: 'Health',
        items: ['Vitamins', 'Beak Care', 'Feather Care', 'Calming'],
      },
    ],
  },
  {
    key: 'health',
    label: 'Health',
    eyebrow: 'Care',
    description: 'Preventive care, supplements, and recovery essentials.',
    image: product2,
    productFilter: 'all',
    groups: [
      {
        title: 'Everyday Health',
        items: ['Digestive Health', 'Skin & Coat', 'Dental Care', 'Ear & Eye Care', 'Joint Support'],
      },
      {
        title: 'Treatments',
        items: ['Flea & Tick', 'Worming', 'Calming Care', 'Recovery', 'Vet Diets'],
      },
    ],
  },
  {
    key: 'accessories',
    label: 'Accessories',
    eyebrow: 'Gear',
    description: 'Beds, bowls, collars, carriers, cleaning, and travel gear.',
    image: pick1,
    productFilter: 'all',
    groups: [
      {
        title: 'Home',
        items: ['Beds', 'Bowls & Feeders', 'Litter', 'Clean Up', 'Scratchers'],
      },
      {
        title: 'Travel & Play',
        items: ['Carriers', 'Leads & Collars', 'Toys', 'Tech', 'Bundles'],
      },
    ],
  },
];

export function getShopCategory(key) {
  return shopCategories.find((category) => category.key === key) || shopCategories[0];
}
