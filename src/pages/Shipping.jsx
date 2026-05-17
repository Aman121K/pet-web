import { InfoPageLayout } from './InfoPageLayout.jsx';

export function Shipping() {
  return (
    <InfoPageLayout
      title="Shipping"
      active="Shipping"
      intro="We process and dispatch orders quickly with careful packaging so your pet essentials arrive safely and on time."
      sections={[
        {
          heading: 'Processing Time',
          body: 'Orders are processed within 1-2 business days after payment confirmation. During peak sales, processing may take a little longer.',
        },
        {
          heading: 'Delivery Time',
          body: 'Standard delivery typically takes 3-7 business days depending on location. Remote regions may require additional transit time.',
        },
        {
          heading: 'Shipping Charges',
          body: 'Shipping charges are calculated at checkout. Free shipping promotions may apply to selected products or minimum order values.',
        },
      ]}
    />
  );
}
