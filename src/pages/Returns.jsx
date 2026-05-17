import { InfoPageLayout } from './InfoPageLayout.jsx';

export function Returns() {
  return (
    <InfoPageLayout
      title="Returns"
      active="Returns"
      intro="If something is not right with your order, we offer a clear return and refund flow to resolve it quickly."
      sections={[
        {
          heading: 'Return Window',
          body: 'You can request a return within 7 days of delivery for eligible products in original condition with packaging intact.',
        },
        {
          heading: 'Non-Returnable Items',
          body: 'Used items, perishable goods, and hygiene-sensitive products may not be eligible unless delivered damaged or incorrect.',
        },
        {
          heading: 'Refund Timeline',
          body: 'Once approved and inspected, refunds are processed to the original payment method within 5-10 business days.',
        },
      ]}
    />
  );
}
