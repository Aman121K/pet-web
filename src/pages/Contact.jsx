import { MailingList } from '../components/home/MailingList.jsx';
import { SeoHead } from '../components/SeoHead.jsx';
import { pageSeo, useManagedPage } from '../hooks/useManagedPage.js';

function ContactIconPin() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path d="M12 21s7-5.8 7-11a7 7 0 1 0-14 0c0 5.2 7 11 7 11Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ContactIconMail() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ContactIconPhone() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path d="M19.5 16.5v2a1.5 1.5 0 0 1-1.65 1.5 14.9 14.9 0 0 1-6.49-2.31 14.5 14.5 0 0 1-4.5-4.5A14.9 14.9 0 0 1 4.5 6.7 1.5 1.5 0 0 1 6 5h2a1.5 1.5 0 0 1 1.5 1.29c.11.8.31 1.6.61 2.35a1.5 1.5 0 0 1-.34 1.58l-.84.84a12 12 0 0 0 4.5 4.5l.84-.84a1.5 1.5 0 0 1 1.58-.34c.75.3 1.55.5 2.35.61A1.5 1.5 0 0 1 19.5 16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InfoCard({ icon, lines }) {
  return (
    <div className="border-b border-line px-5 py-6 text-center last:border-b-0">
      <div className="mx-auto mb-3 inline-flex h-7 w-7 items-center justify-center text-ink">{icon}</div>
      {lines.map((line) => (
        <p key={line} className="text-[12px] leading-5 text-muted">
          {line}
        </p>
      ))}
    </div>
  );
}

export function Contact() {
  const page = useManagedPage('contact');
  const seo = pageSeo(page, {
    title: 'Contact Pet Square | Customer Support',
    description: 'Contact Pet Square for order support, product questions, pet supply guidance, and business enquiries.',
    canonical: '/contact',
  });

  return (
    <>
      <SeoHead {...seo} />
      <section className="border-b border-line bg-[#f4f4f4]">
        <div className="mx-auto max-w-[1200px] px-4 py-2 text-[10px] text-muted">
          Home <span className="px-2">&gt;</span> Contact US
        </div>
      </section>

      <section className="bg-[#efefef] py-8 md:py-10">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="grid gap-4 md:grid-cols-[260px_1fr]">
            <aside className="border border-line bg-white">
              <InfoCard
                icon={<ContactIconPin />}
                lines={['123 Pet Street, Petville,', 'USA (Dummy)']}
              />
              <InfoCard
                icon={<ContactIconMail />}
                lines={['contact@petsquare.com', 'petsquare@gmail.com']}
              />
              <InfoCard
                icon={<ContactIconPhone />}
                lines={['+1 1900-000-000', '+1 1900-000-000']}
              />
            </aside>

            <div className="border border-line bg-white px-6 py-6 md:px-8">
              <h1 className="text-[28px] font-semibold text-ink md:text-[38px]">{page?.title || 'Just Say Hello!'}</h1>
              <p className="mt-2 text-[12px] text-muted md:text-[13px]">
                {page?.intro || 'Get in touch with our Customer Service team between 9am - 5pm Monday-Friday.'}
              </p>

              <div className="mt-5 space-y-2">
                <div className="grid gap-2 sm:grid-cols-2">
                  <input
                    placeholder="Sakshi Agrawal"
                    className="h-9 border border-line px-3 text-[12px] text-ink outline-none placeholder:text-[#9a9a9a]"
                  />
                  <input
                    placeholder="petsquare@gmail.com"
                    type="email"
                    className="h-9 border border-line px-3 text-[12px] text-ink outline-none placeholder:text-[#9a9a9a]"
                  />
                </div>
                <input
                  placeholder="Hello!"
                  className="h-9 w-full border border-line px-3 text-[12px] text-ink outline-none placeholder:text-[#9a9a9a]"
                />
                <textarea
                  rows={5}
                  placeholder="Message"
                  className="w-full border border-line px-3 py-2 text-[12px] text-ink outline-none placeholder:text-[#9a9a9a]"
                />
              </div>

              <button
                type="button"
                className="mt-4 h-10 bg-ink px-6 text-[11px] font-semibold tracking-wide text-white"
              >
                SEND MESSAGE
              </button>
            </div>
          </div>

          <div className="mt-6 overflow-hidden border border-line bg-white">
            <iframe
              title="PetSquare location map"
              src="https://maps.google.com/maps?q=Petville&t=&z=10&ie=UTF8&iwloc=&output=embed"
              className="h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <MailingList />
    </>
  );
}
