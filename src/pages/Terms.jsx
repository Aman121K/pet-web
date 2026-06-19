import { InfoPageLayout } from './InfoPageLayout.jsx';

export function Terms() {
  return (
    <InfoPageLayout
      title="Terms & Conditions"
      pageKey="terms"
      active="Terms & Conditions"
      intro="By using Pet Square, you agree to these terms covering orders, account usage, and general platform policies."
      sections={[
        {
          heading: 'Use of Service',
          body: 'You agree to use this website lawfully and provide accurate account, shipping, and payment information for each order.',
        },
        {
          heading: 'Orders and Pricing',
          body: 'All orders are subject to availability and confirmation. Prices can change without notice, but confirmed orders keep checkout pricing.',
        },
        {
          heading: 'Account Responsibility',
          body: 'You are responsible for keeping your account credentials secure. Unauthorized activity should be reported immediately.',
        },
      ]}
    />
  );
}
