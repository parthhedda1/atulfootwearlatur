import { createFileRoute } from "@tanstack/react-router";
import shopHero from "../assets/shop-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atul Footwear — Shoe & Footwear Shop in Latur" },
      { name: "description", content: "Visit Atul Footwear at Subhas Chowk, Latur. Quality footwear, expert staff, and parking available. Call 2382249523." },
      { property: "og:title", content: "Atul Footwear — Shoe & Footwear Shop in Latur" },
      { property: "og:description", content: "Visit Atul Footwear at Subhas Chowk, Latur. Quality footwear, expert staff, and parking available." },
    ],
  }),
  component: Index,
});

function Index() {
  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Opposite Regal Cinema, Dayaram Road, Subhas Chowk, Latur, 413512, Maharashtra, India"
    );

  return (
    <div className="min-h-screen bg-brand-clay text-zinc-900">
      {/* Header */}
      <header className="bg-brand-clay/80 backdrop-blur-sm sticky top-0 z-50 border-b border-zinc-950/5">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-brand-umber font-semibold tracking-tight">
              Atul Footwear
            </span>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
              Latur, Maharashtra
            </span>
          </div>
          <a
            href="tel:2382249523"
            className="text-sm font-medium text-brand-umber hover:text-brand-ochre transition-colors"
          >
            Call Shop
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-brand-clay">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-brand-umber leading-tight text-balance mb-6">
            Trusted footwear expertise in the heart of Subhas Chowk.
          </h1>
          <p className="text-base text-zinc-600 text-pretty max-w-[56ch] mb-8">
            Since our doors opened, Atul Footwear has been a staple of the Latur
            shopping district, providing durable quality and expert fitting advice
            to our local community.
          </p>
          <div className="w-full aspect-[2/1] rounded-xl overflow-hidden mb-12 ring-1 ring-black/5">
            <img
              src={shopHero}
              alt="Interior of Atul Footwear shop showing neatly arranged shoes on wooden shelves"
              className="w-full h-full object-cover"
              width={1200}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-12 bg-zinc-950/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-brand-clay rounded-2xl ring-1 ring-black/5 p-6 md:p-8 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                Visit Us
              </h2>
              <address className="not-italic text-zinc-800 mb-6">
                <p className="text-lg font-medium text-brand-umber mb-1">
                  Opposite Regal Cinema
                </p>
                <p className="text-zinc-600">Dayaram Road, Subhas Chowk</p>
                <p className="text-zinc-600">
                  Latur - 413512, Maharashtra
                </p>
              </address>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <div className="size-8 rounded-full bg-brand-ochre/10 flex items-center justify-center shrink-0">
                    <ClockIcon className="size-4 text-brand-umber" />
                  </div>
                  <span className="text-zinc-600">
                    Opens 10 AM (Working Days)
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="size-8 rounded-full bg-brand-ochre/10 flex items-center justify-center shrink-0">
                    <ParkingIcon className="size-4 text-brand-umber" />
                  </div>
                  <span className="text-zinc-600">
                    Customer Parking Available
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="size-8 rounded-full bg-brand-ochre/10 flex items-center justify-center shrink-0">
                    <CashIcon className="size-4 text-brand-umber" />
                  </div>
                  <span className="text-zinc-600">
                    Cash Accepted · Confirm other payment methods directly
                  </span>
                </div>
              </div>

              <a
                href="tel:2382249523"
                className="inline-flex items-center bg-brand-umber text-brand-clay px-4 py-2.5 rounded-lg ring-1 ring-brand-umber shadow-sm hover:bg-brand-umber/90 transition-colors active:scale-[0.98]"
              >
                <PhoneIcon className="size-4 shrink-0 mr-2" />
                <span className="text-sm font-medium">Call Atul Footwear</span>
              </a>
            </div>
            <div className="md:w-64 shrink-0">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full aspect-square bg-zinc-100 rounded-xl ring-1 ring-black/5 hover:ring-brand-ochre/50 transition-all grid place-items-center group"
              >
                <div className="text-center px-4">
                  <MapPinIcon className="size-8 text-brand-ochre mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Open in Google Maps
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 md:py-24 bg-brand-clay">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-brand-umber mb-12 text-balance">
            Why Choose Atul Footwear?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <div className="size-5 text-brand-ochre shrink-0">
                <LocationIcon />
              </div>
              <h3 className="text-base font-medium text-brand-umber">
                Prime Location
              </h3>
              <p className="text-sm text-zinc-600 text-pretty">
                Conveniently located in Latur for easy access from all parts of
                the city.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="size-5 text-brand-ochre shrink-0">
                <StaffIcon />
              </div>
              <h3 className="text-base font-medium text-brand-umber">
                Expert Staff
              </h3>
              <p className="text-sm text-zinc-600 text-pretty">
                Dedicated and knowledgeable team committed to giving you the best
                guidance.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="size-5 text-brand-ochre shrink-0">
                <ServicesIcon />
              </div>
              <h3 className="text-base font-medium text-brand-umber">
                Additional Services
              </h3>
              <p className="text-sm text-zinc-600 text-pretty">
                Atul Footwear may provide value-added services. Contact them
                directly to know more.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="size-5 text-brand-ochre shrink-0">
                <ParkingFeatureIcon />
              </div>
              <h3 className="text-base font-medium text-brand-umber">
                Parking Available
              </h3>
              <p className="text-sm text-zinc-600 text-pretty">
                Parking space available for customers visiting Atul Footwear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-brand-clay">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-brand-umber mb-8">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-zinc-950/5 border-t border-zinc-950/5">
            <FaqItem question="Where is Atul Footwear located?">
              Atul Footwear is located at Opposite Regal Cinema, Dayaram Road,
              Subhas Chowk, Latur - 413512, Maharashtra, India.
            </FaqItem>
            <FaqItem question="What is the full address of Atul Footwear?">
              The full address is Opposite Regal Cinema, Dayaram Road, Subhas
              Chowk, Latur - 413512, Maharashtra, India.
            </FaqItem>
            <FaqItem question="What is the contact number of Atul Footwear?">
              You can contact Atul Footwear at{" "}
              <a
                href="tel:2382249523"
                className="text-brand-umber hover:underline font-medium"
              >
                2382249523
              </a>
              .
            </FaqItem>
            <FaqItem question="What are the working hours of Atul Footwear?">
              Atul Footwear opens at 10 AM on working days. Please confirm closing
              time directly with the shop.
            </FaqItem>
            <FaqItem question="Is Atul Footwear open on Sunday?">
              Atul Footwear is listed as open on working days from 10 AM. Please
              call to confirm Sunday availability.
            </FaqItem>
            <FaqItem question="What payment methods does Atul Footwear accept?">
              Atul Footwear accepts cash. Please confirm other payment options
              directly.
            </FaqItem>
            <FaqItem question="Does Atul Footwear have staff available?">
              Yes, Atul Footwear has staff available to assist customers.
            </FaqItem>
            <FaqItem question="What services does Atul Footwear offer?">
              Atul Footwear offers services related to Shoe & Footwear Shops in
              Latur. Contact them for details.
            </FaqItem>
            <FaqItem question="What type of business is Atul Footwear?">
              Atul Footwear is listed under the Shoe & Footwear Shops category,
              serving customers in Latur and surrounding areas.
            </FaqItem>
            <FaqItem question="How can I contact Atul Footwear?">
              Atul Footwear can be contacted via Phone:{" "}
              <a
                href="tel:2382249523"
                className="text-brand-umber hover:underline font-medium"
              >
                2382249523
              </a>{" "}
              or by visiting the address mentioned on this page.
            </FaqItem>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24 bg-zinc-950/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-brand-umber mb-6">
            About Atul Footwear
          </h2>
          <p className="text-base text-zinc-600 text-pretty leading-relaxed">
            Atul Footwear is a Shoe & Footwear Shops business located in Latur,
            Maharashtra, India. The office is situated at Opposite Regal Cinema,
            Dayaram Road, Subhas Chowk, Latur – 413512. You can call them at{" "}
            <a
              href="tel:2382249523"
              className="text-brand-umber hover:underline font-medium"
            >
              2382249523
            </a>{" "}
            for inquiries or appointments. The office opens at 10 AM on working
            days. If you are looking for shoe & footwear shops in Latur, you can
            get in touch with Atul Footwear using the contact details mentioned
            on this page.
          </p>
          <p className="text-sm text-zinc-500 mt-6 text-pretty">
            Hours and payment options are indicative. Please confirm directly
            with Atul Footwear.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-brand-clay border-t border-zinc-950/5">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-zinc-500 tracking-wide mb-2">
            Atul Footwear
          </p>
          <p className="text-[12px] text-zinc-400 tracking-wide">
            Opposite Regal Cinema, Dayaram Road, Subhas Chowk, Latur - 413512,
            Maharashtra, India
          </p>
          <p className="text-[12px] text-zinc-400 tracking-wide mt-4">
            &copy; {new Date().getFullYear()} Atul Footwear Latur. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FaqItem({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group">
      <summary className="flex justify-between items-center py-5 cursor-pointer list-none select-none">
        <span className="text-sm font-medium text-zinc-800 pr-4">
          {question}
        </span>
        <ChevronIcon className="size-4 text-zinc-400 shrink-0 group-open:rotate-180 transition-transform" />
      </summary>
      <div className="pb-5">
        <p className="text-sm text-zinc-600 text-pretty leading-relaxed">
          {children}
        </p>
      </div>
    </details>
  );
}

/* Inline SVG icons matching the earthy artisan prototype */

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function ParkingIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V3.375c0-.621-.508-1.125-1.129-1.125H3.375c-.621 0-1.129.504-1.129 1.125v1.5m17.25 13.5v-1.5m0-10.5V6.75m-17.25 0v1.5m0 6v-1.5m1.5-1.5h1.125c.621 0 1.129-.504 1.129-1.125V3.375"
      />
    </svg>
  );
}

function CashIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.382 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6H2.25m19.5 0v.75a.75.75 0 0 1-.75.75H21m-1.5 0H12m8.25 7.5V18a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 18 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5m9-9a2.25 2.25 0 0 0-2.25 2.25v.75a2.25 2.25 0 0 0 2.25 2.25h.75"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}

function StaffIcon() {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function ServicesIcon() {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.83-5.83m0 0a1.14 1.14 0 1 1-1.607-1.607 1.14 1.14 0 0 1 1.607 1.607Z"
      />
    </svg>
  );
}

function ParkingFeatureIcon() {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V3.375c0-.621-.508-1.125-1.129-1.125H3.375c-.621 0-1.129.504-1.129 1.125v1.5m17.25 13.5v-1.5m0-10.5V6.75m-17.25 0v1.5m0 6v-1.5m1.5-1.5h1.125c.621 0 1.129-.504 1.129-1.125V3.375"
      />
    </svg>
  );
}
