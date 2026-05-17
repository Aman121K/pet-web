import { InfoPageLayout } from './InfoPageLayout.jsx';

export function PrivacyPolicy() {
  return (
    <InfoPageLayout
      title="Privacy Policy"
      active="Privacy Policy"
      intro="We value your privacy and handle your data responsibly, only for order fulfillment, support, and service improvements."
      sections={[
        {
          heading: 'Data We Collect',
          body: 'We collect basic account details, delivery information, and order history needed to process purchases and support requests.',
        },
        {
          heading: 'How We Use Data',
          body: 'Your data is used for order processing, delivery updates, customer support, and limited service analytics to improve experience.',
        },
        {
          heading: 'Security and Control',
          body: 'We apply reasonable safeguards to protect your information. You can request account updates or removal by contacting support.',
        },
      ]}
    />
  );
}
