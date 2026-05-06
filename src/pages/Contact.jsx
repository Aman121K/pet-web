import { FeatureBar } from '../components/FeatureBar.jsx';

function Input({ id, label, placeholder, type = 'text' }) {
  return (
    <div>
      <label className="text-[13px] font-semibold tracking-wide text-ink/80" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-1 h-11 w-full rounded-lg border border-line bg-white px-3 text-[14px] outline-none focus:border-ink/25 focus:ring-2 focus:ring-ink/10"
      />
    </div>
  );
}

export function Contact() {
  return (
    <>
      <FeatureBar />
      <section className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr,1.2fr]">
          <aside className="rounded-2xl border border-line bg-ink p-8 text-white">
            <h1 className="text-[30px] font-semibold tracking-tight">Contact us</h1>
            <p className="mt-3 text-[15px] text-white/80">
              We respond within one business day for order support, delivery updates, or product questions.
            </p>
            <ul className="mt-8 space-y-3 text-[14px] text-white/90">
              <li>support@petsquare.example</li>
              <li>+1 (000) 000-0000</li>
              <li>Mon-Fri, 9:00 AM to 6:00 PM</li>
            </ul>
          </aside>

          <form className="rounded-2xl border border-line bg-white p-6 sm:p-8">
            <h2 className="text-[22px] font-semibold tracking-tight text-ink">Send a message</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Input id="first-name" label="First name" placeholder="Ava" />
              <Input id="last-name" label="Last name" placeholder="Johnson" />
              <div className="sm:col-span-2">
                <Input id="email" label="Email" placeholder="ava@example.com" type="email" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-[13px] font-semibold tracking-wide text-ink/80" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can we help today?"
                  className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2 text-[14px] outline-none focus:border-ink/25 focus:ring-2 focus:ring-ink/10"
                />
              </div>
            </div>
            <button
              type="button"
              className="mt-5 h-11 rounded-lg bg-ink px-6 text-[14px] font-semibold text-white transition hover:bg-ink/90"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
