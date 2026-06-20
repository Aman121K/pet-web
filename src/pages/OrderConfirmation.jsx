import { MailingList } from '../components/home/MailingList.jsx';
import { SeoHead } from '../components/SeoHead.jsx';

export function OrderConfirmation() {
  return (
    <>
      <SeoHead
        title="Order Confirmation | Pet Square"
        description="Your Pet Square order confirmation and next steps."
        canonical="/order-confirmation"
        robots="noindex,follow"
      />
      <section className="border-b border-line bg-[#f4f4f4]">
        <div className="mx-auto max-w-[1200px] px-4 py-2 text-[10px] text-muted">
          Home <span className="px-1">&gt;</span> Shopping cart <span className="px-1">&gt;</span>{' '}
          Checkout
        </div>
      </section>

      <section className="bg-[#efefef] py-8 md:py-12">
        <div className="mx-auto max-w-[1200px] px-4">
          <h1 className="text-center text-[40px] font-semibold text-ink md:text-[48px]">Order Confirmation</h1>

          <div className="mx-auto mt-8 max-w-[720px] bg-[#e8e8e8] px-6 py-8 text-center md:px-10 md:py-10">
            <h2 className="text-[32px] font-semibold text-ink md:text-[42px]">Thank you for your purchase!</h2>
            <p className="mt-4 text-[12px] leading-6 text-muted md:text-[13px]">
              Your order has been successfully placed. Below are the details of your order:
            </p>
            <p className="mt-3 text-[13px] leading-6 text-muted md:text-[14px]">
              Order Number: [Order Number]
              <br />
              Order Date: [Order Date]
            </p>
            <p className="mt-4 text-[12px] leading-6 text-muted md:text-[13px]">
              We will send you an email with the tracking information once your order has been shipped.
              <br />
              In the meantime, if you have any questions or need assistance, please don't hesitate to
              <br />
              contact us.
            </p>
            <p className="mt-5 text-[12px] leading-6 text-muted md:text-[13px]">
              Thank you for choosing [Your Company Name]. We hope you enjoy your purchase!
            </p>
          </div>
        </div>
      </section>

      <MailingList />
    </>
  );
}
