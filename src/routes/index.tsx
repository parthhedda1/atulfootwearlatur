import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import featuredShoe from "../assets/featured-shoe.png";
import sneaker from "../assets/sneaker.png";
import sandal from "../assets/sandal.png";
import shopHero from "../assets/shop-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atul Footwear — Crafted Footwear in Latur Since Decades" },
      {
        name: "description",
        content:
          "Step into Atul Footwear at Lahoti Landmark, Sawe Wadi, Latur. Curated leather shoes, sandals & sneakers with expert fitting. Call 2382249523.",
      },
      { property: "og:title", content: "Atul Footwear — Latur" },
      {
        property: "og:description",
        content:
          "Curated footwear and expert fitting in the heart of Latur. Visit Atul Footwear at Lahoti Landmark, in front of Shoppers Stop, Sawe Wadi.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const mapUrl =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(
      "Atul Footwear, Lahoti Landmark, In front of Shoppers Stop, Sawe Wadi, Latur, 413512, Maharashtra, India",
    );

  return (
    <div
      className="min-h-screen overflow-x-hidden text-[var(--color-brand-ink)] selection:bg-[var(--color-brand-ochre)] selection:text-[var(--color-brand-cream)]"
      style={{
        background:
          "radial-gradient(1200px 600px at 10% -10%, #f8e6c8 0%, transparent 60%), radial-gradient(800px 500px at 110% 10%, #f1c8a0 0%, transparent 55%), linear-gradient(180deg, #faf4e8 0%, #f0e2cb 100%)",
      }}
    >
      <Header />
      <Hero />
      <Marquee />
      <Collection />
      <Visit mapUrl={mapUrl} />
      <Why />
      <About />
      <Faq />
      <Footer />
    </div>
  );
}

/* ---------- Header ---------- */

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[color-mix(in_oklab,var(--color-brand-cream)_70%,transparent)] border-b border-[color-mix(in_oklab,var(--color-brand-ink)_10%,transparent)]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <Monogram />
          <div className="flex flex-col leading-none">
            <span
              className="text-[var(--color-brand-ink)] font-extrabold tracking-tight text-lg"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Atul Footwear
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-brand-umber)]/70">
              Est. Latur · Maharashtra
            </span>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--color-brand-umber)]">
          <a href="#collection" className="hover:text-[var(--color-brand-ochre)] transition">Collection</a>
          <a href="#visit" className="hover:text-[var(--color-brand-ochre)] transition">Visit</a>
          <a href="#about" className="hover:text-[var(--color-brand-ochre)] transition">About</a>
          <a href="#faq" className="hover:text-[var(--color-brand-ochre)] transition">FAQ</a>
        </nav>
        <a
          href="tel:+912382249523"
          className="group relative inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-ink)] text-[var(--color-brand-cream)] px-4 py-2 text-sm font-medium shadow-[0_8px_20px_-8px_rgba(58,31,23,0.6)] hover:translate-y-[-1px] transition-all"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-gold)] opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-brand-gold)]" />
          </span>
          Call Shop
        </a>
      </div>
    </header>
  );
}

function Monogram() {
  return (
    <div
      className="relative grid place-items-center size-9 rounded-xl text-[var(--color-brand-cream)] shadow-[inset_0_-3px_0_rgba(0,0,0,0.25),0_6px_18px_-6px_rgba(58,31,23,0.6)]"
      style={{
        background:
          "linear-gradient(135deg, var(--color-brand-ochre), var(--color-brand-umber))",
      }}
    >
      <span
        style={{ fontFamily: "var(--font-display)" }}
        className="text-base font-extrabold leading-none"
      >
        A
      </span>
    </div>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      setTilt({ x: dx * 12, y: dy * -12 });
    };
    const reset = () => setTilt({ x: 0, y: 0 });
    window.addEventListener("mousemove", handler);
    window.addEventListener("mouseleave", reset);
    return () => {
      window.removeEventListener("mousemove", handler);
      window.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section id="top" className="relative pt-12 pb-28 md:pt-20 md:pb-40">
      {/* gooey blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-24 -left-24 size-[420px] rounded-full blur-3xl opacity-50"
          style={{ background: "radial-gradient(circle, #e8b86a 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-40 -right-24 size-[480px] rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle, #d97742 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-umber)]/20 bg-[var(--color-brand-cream)]/70 backdrop-blur px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--color-brand-umber)]">
            <span className="size-1.5 rounded-full bg-[var(--color-brand-ochre)]" />
            Sawe Wadi · Latur
          </div>
          <h1
            className="mt-5 text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight text-[var(--color-brand-ink)]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Step into{" "}
            <span className="relative inline-block">
              <span
                className="bg-clip-text text-transparent italic"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--color-brand-ochre) 0%, var(--color-brand-umber) 60%, var(--color-brand-gold) 100%)",
                }}
              >
                craft
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 8 Q 50 -2, 100 5 T 198 4"
                  stroke="var(--color-brand-ochre)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
            <br />
            Walk with{" "}
            <span style={{ fontFamily: "var(--font-display)" }} className="italic font-light">
              comfort
            </span>
            .
          </h1>
          <p className="mt-6 max-w-[52ch] text-base md:text-lg text-[var(--color-brand-umber)]/85">
            A neighbourhood footwear destination in the heart of Latur. Hand-picked
            leather, expert fitting, and the kind of service you remember.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="tel:+912382249523"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-ink)] text-[var(--color-brand-cream)] px-6 py-3.5 text-sm font-semibold shadow-[0_18px_40px_-18px_rgba(58,31,23,0.8)] hover:translate-y-[-2px] transition"
            >
              Call 2382249523
              <svg className="size-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#visit"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-ink)]/20 bg-[var(--color-brand-cream)]/60 backdrop-blur px-6 py-3.5 text-sm font-semibold text-[var(--color-brand-ink)] hover:bg-[var(--color-brand-cream)] transition"
            >
              Visit the Shop
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <Stat number="Daily" label="Open every day" />
            <div className="h-10 w-px bg-[var(--color-brand-umber)]/20" />
            <Stat number="10 AM" label="Doors open" />
            <div className="h-10 w-px bg-[var(--color-brand-umber)]/20" />
            <Stat number="Free" label="Customer parking" />
          </div>
        </div>

        {/* 3D floating shoe stack */}
        <div
          ref={heroRef}
          className="relative h-[440px] md:h-[560px]"
          style={{ perspective: "1200px" }}
        >
          {/* rotating ring */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[380px] md:size-[460px] rounded-full opacity-60"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, var(--color-brand-gold) 60deg, transparent 120deg, var(--color-brand-ochre) 200deg, transparent 260deg, var(--color-brand-gold) 320deg, transparent 360deg)",
              filter: "blur(40px)",
              animation: "spin 22s linear infinite",
            }}
          />
          {/* sun disc */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[280px] md:size-[340px] rounded-full shadow-[inset_0_-30px_60px_rgba(58,31,23,0.35),0_30px_80px_-20px_rgba(58,31,23,0.45)]"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, #f8e3b8 0%, #d97742 70%, #8a3d20 100%)",
              transform: `rotateX(${tilt.y * 0.3}deg) rotateY(${tilt.x * 0.3}deg)`,
              transition: "transform 200ms ease-out",
            }}
          />
          {/* main featured shoe */}
          <img
            src={featuredShoe}
            alt="Premium cognac leather dress shoe from Atul Footwear"
            width={1024}
            height={1024}
            className="absolute left-1/2 top-1/2 w-[90%] max-w-[480px] drop-shadow-[0_40px_30px_rgba(58,31,23,0.45)]"
            style={{
              transform: `translate(-50%, -50%) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateZ(40px)`,
              transition: "transform 200ms ease-out",
              animation: "float 6s ease-in-out infinite",
            }}
          />
          {/* spinning "Open Daily" coin badge */}
          <div
            className="absolute right-2 md:right-0 top-4 md:top-8 size-28 md:size-32"
            style={{ animation: "float 7s ease-in-out infinite", perspective: "600px" }}
          >
            <div
              className="absolute inset-0 rounded-full bg-[var(--color-brand-ink)] text-[var(--color-brand-gold)] shadow-[inset_0_-6px_18px_rgba(0,0,0,0.5),0_18px_30px_-10px_rgba(0,0,0,0.5)]"
              style={{ animation: "spin 18s linear infinite" }}
            >
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                <defs>
                  <path id="ring" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <text fontSize="11" fontWeight="700" letterSpacing="2" fill="currentColor" style={{ fontFamily: "var(--font-display)" }}>
                  <textPath href="#ring">OPEN DAILY · FROM 10 AM · WALK IN · BE FAMILY · </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute inset-4 rounded-full bg-[var(--color-brand-gold)] grid place-items-center text-[var(--color-brand-ink)] text-center text-[10px] uppercase tracking-[0.18em] font-extrabold shadow-[inset_0_4px_10px_rgba(255,255,255,0.4),inset_0_-6px_14px_rgba(0,0,0,0.25)]">
              <div>
                10<span className="text-[8px] align-top">AM</span>
                <div className="text-[8px] mt-0.5 opacity-80">every day</div>
              </div>
            </div>
          </div>
          {/* corner card */}
          <div
            className="absolute left-0 bottom-4 md:bottom-10 rounded-2xl bg-[var(--color-brand-cream)]/90 backdrop-blur border border-[var(--color-brand-umber)]/15 p-3 pr-5 flex items-center gap-3 shadow-[0_20px_40px_-20px_rgba(58,31,23,0.4)]"
            style={{ animation: "float 8s ease-in-out infinite" }}
          >
            <div className="flex -space-x-2">
              <Dot color="#d97742" />
              <Dot color="#3a1f17" />
              <Dot color="#e8b86a" />
            </div>
            <div className="text-xs">
              <div className="font-semibold text-[var(--color-brand-ink)]">Many finishes</div>
              <div className="text-[var(--color-brand-umber)]/70">Tan · Black · Tobacco</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div
        style={{ fontFamily: "var(--font-display)" }}
        className="text-2xl font-extrabold text-[var(--color-brand-ink)] leading-none"
      >
        {number}
      </div>
      <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-brand-umber)]/70 mt-1">
        {label}
      </div>
    </div>
  );
}

function Dot({ color }: { color: string }) {
  return (
    <span
      className="size-5 rounded-full ring-2 ring-[var(--color-brand-cream)]"
      style={{ background: color }}
    />
  );
}

/* ---------- Marquee ---------- */

function Marquee() {
  const items = [
    "Leather Formals",
    "Sneakers",
    "Kolhapuri Sandals",
    "School Shoes",
    "Loafers",
    "Sports",
    "Sliders",
    "Women's Heels",
    "Kids' Footwear",
  ];
  const row = [...items, ...items];
  return (
    <section className="relative py-6 bg-[var(--color-brand-ink)] text-[var(--color-brand-cream)] overflow-hidden border-y border-[var(--color-brand-ink)]">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ animation: "marquee 35s linear infinite", width: "max-content" }}
      >
        {row.map((it, i) => (
          <div key={i} className="flex items-center gap-12">
            <span
              style={{ fontFamily: "var(--font-display)" }}
              className="text-3xl md:text-5xl font-black italic"
            >
              {it}
            </span>
            <span className="text-[var(--color-brand-gold)] text-3xl md:text-5xl">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Collection ---------- */

function Collection() {
  const cards = [
    {
      title: "Formal Leather",
      sub: "Office · Wedding · Daily",
      img: featuredShoe,
      tone: "linear-gradient(135deg, #f8e3b8 0%, #d97742 100%)",
      rot: "-6deg",
    },
    {
      title: "Sneakers",
      sub: "Casual · Sport · School",
      img: sneaker,
      tone: "linear-gradient(135deg, #faf4e8 0%, #e8b86a 100%)",
      rot: "4deg",
    },
    {
      title: "Kolhapuri",
      sub: "Handmade · Heritage",
      img: sandal,
      tone: "linear-gradient(135deg, #e8b86a 0%, #8a3d20 100%)",
      rot: "-3deg",
    },
  ];
  return (
    <section id="collection" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-[var(--color-brand-ochre)] mb-3">
              ◇ The Collection
            </div>
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-4xl md:text-5xl font-black text-[var(--color-brand-ink)] leading-tight"
            >
              Every step,{" "}
              <span className="italic font-light">a story</span>.
            </h2>
          </div>
          <p className="max-w-md text-[var(--color-brand-umber)]/80">
            A rotating shelf of formals, sneakers, sandals and seasonal pieces — visit in
            store to see the full lineup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" style={{ perspective: "1400px" }}>
          {cards.map((c, i) => (
            <article
              key={i}
              className="group relative rounded-3xl p-6 pb-8 overflow-hidden border border-[var(--color-brand-umber)]/15 shadow-[0_30px_60px_-30px_rgba(58,31,23,0.5)] transition-all duration-500 hover:-translate-y-3 hover:[transform:rotateX(8deg)_rotateY(-8deg)_translateY(-12px)] will-change-transform"
              style={{ background: c.tone, transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 opacity-30 mix-blend-soft-light"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 20%, white 0%, transparent 40%)",
                }} />
              {/* glossy highlight */}
              <div aria-hidden className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)" }} />
              <div className="relative flex items-start justify-between text-[var(--color-brand-ink)]" style={{ transform: "translateZ(40px)" }}>
                <div>
                  <h3
                    style={{ fontFamily: "var(--font-display)" }}
                    className="text-2xl font-extrabold"
                  >
                    {c.title}
                  </h3>
                  <p className="text-sm opacity-75 mt-1">{c.sub}</p>
                </div>
                <span className="text-xs font-mono opacity-70">0{i + 1}</span>
              </div>
              <div className="relative h-56 mt-6 grid place-items-center" style={{ transform: "translateZ(80px)" }}>
                <div
                  className="absolute inset-x-8 bottom-6 h-6 rounded-full blur-xl opacity-60"
                  style={{ background: "rgba(4,47,46,0.7)" }}
                />
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="relative w-[90%] max-h-56 object-contain drop-shadow-[0_30px_25px_rgba(0,0,0,0.4)] transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6 group-hover:[transform:translateZ(120px)_scale(1.15)_rotate(-8deg)]"
                  style={{ transform: `rotate(${c.rot})` }}
                />
              </div>
              <div className="relative flex items-center justify-between mt-4 text-[var(--color-brand-ink)]" style={{ transform: "translateZ(40px)" }}>
                <span className="text-xs uppercase tracking-[0.2em] opacity-70">
                  In-store
                </span>
                <a
                  href="tel:+912382249523"
                  className="inline-flex items-center gap-1 text-sm font-semibold border-b border-[var(--color-brand-ink)]/40 hover:border-[var(--color-brand-ink)] transition"
                >
                  Enquire →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Visit ---------- */

function Visit({ mapUrl }: { mapUrl: string }) {
  return (
    <section id="visit" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div
          className="relative rounded-[2rem] overflow-hidden border border-[var(--color-brand-umber)]/15 shadow-[0_40px_80px_-40px_rgba(58,31,23,0.5)]"
          style={{
            background:
              "linear-gradient(135deg, var(--color-brand-ink) 0%, #4a2a1c 60%, #6b3a25 100%)",
          }}
        >
          <div
            aria-hidden
            className="absolute -top-20 -right-10 size-[360px] rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #e8b86a, transparent 70%)" }}
          />
          <div className="relative grid md:grid-cols-[1.2fr_1fr] gap-0">
            <div className="p-8 md:p-12 text-[var(--color-brand-cream)]">
              <div className="text-xs uppercase tracking-[0.22em] text-[var(--color-brand-gold)] mb-3">
                ◇ Visit Us
              </div>
              <h2
                style={{ fontFamily: "var(--font-display)" }}
                className="text-4xl md:text-5xl font-black leading-tight"
              >
                In front of{" "}
                <span className="italic font-light text-[var(--color-brand-gold)]">Shoppers Stop</span>.
              </h2>
              <address className="not-italic mt-6 text-[var(--color-brand-cream)]/85 text-base leading-relaxed">
                Lahoti Landmark, Sawe Wadi
                <br />
                Latur — 413512, Maharashtra, India
              </address>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <InfoTile icon={<ClockIcon />} title="Open Daily" body="From 10 AM — until you walk in, you're a customer" />
                <InfoTile icon={<CashIcon />} title="Payment" body="Cash · UPI · Card" />
                <InfoTile icon={<ParkingIcon />} title="Parking" body="Available for customers" />
                <InfoTile icon={<PhoneIcon />} title="Phone" body="2382249523" />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:+912382249523"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-gold)] text-[var(--color-brand-ink)] px-6 py-3 text-sm font-bold hover:translate-y-[-2px] transition shadow-[0_18px_40px_-10px_rgba(232,184,106,0.6)]"
                >
                  <PhoneIcon className="size-4" />
                  Call Atul Footwear
                </a>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-cream)]/30 text-[var(--color-brand-cream)] px-6 py-3 text-sm font-semibold hover:bg-[var(--color-brand-cream)]/10 transition"
                >
                  <MapPinIcon className="size-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block min-h-[320px] md:min-h-full overflow-hidden group"
            >
              <img
                src={shopHero}
                alt="Atul Footwear shop interior"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-ink)]/70 via-transparent to-transparent" />
              <div className="absolute left-6 bottom-6 right-6 flex items-end justify-between gap-4">
                <div className="text-[var(--color-brand-cream)]">
                  <div className="text-[11px] uppercase tracking-[0.22em] opacity-80">
                    Find us
                  </div>
                  <div
                    style={{ fontFamily: "var(--font-display)" }}
                    className="text-2xl font-extrabold mt-1"
                  >
                    Sawe Wadi
                  </div>
                </div>
                <div className="size-12 rounded-full bg-[var(--color-brand-gold)] text-[var(--color-brand-ink)] grid place-items-center shadow-lg group-hover:rotate-12 transition">
                  <MapPinIcon className="size-5" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoTile({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-[var(--color-brand-cream)]/8 border border-[var(--color-brand-cream)]/15 backdrop-blur p-4">
      <div className="flex items-center gap-2 text-[var(--color-brand-gold)]">
        <div className="size-5">{icon}</div>
        <span className="text-[11px] uppercase tracking-[0.18em]">{title}</span>
      </div>
      <div className="mt-1.5 text-sm text-[var(--color-brand-cream)]">{body}</div>
    </div>
  );
}

/* ---------- Why ---------- */

function Why() {
  const items = [
    { t: "Prime Location", b: "Right at Lahoti Landmark, Sawe Wadi — easy from anywhere in Latur.", n: "01" },
    { t: "Expert Staff", b: "Honest guidance on fit, finish, and material — every visit.", n: "02" },
    { t: "Curated Range", b: "Formals, sneakers, sandals & seasonal picks, chosen by hand.", n: "03" },
    { t: "Parking Friendly", b: "Pull up and step in — customer parking available.", n: "04" },
  ];
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.22em] text-[var(--color-brand-ochre)] mb-3">
            ◇ Why Atul
          </div>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-4xl md:text-5xl font-black text-[var(--color-brand-ink)] leading-tight"
          >
            A shop that{" "}
            <span className="italic font-light">remembers</span> you.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-px bg-[var(--color-brand-umber)]/15 rounded-3xl overflow-hidden border border-[var(--color-brand-umber)]/15">
          {items.map((it) => (
            <div
              key={it.n}
              className="relative bg-[var(--color-brand-cream)]/70 backdrop-blur p-8 md:p-10 group hover:bg-[var(--color-brand-cream)] transition"
            >
              <div className="flex items-start justify-between">
                <h3
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-2xl font-extrabold text-[var(--color-brand-ink)]"
                >
                  {it.t}
                </h3>
                <span
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-3xl font-black text-[var(--color-brand-ochre)]/40 group-hover:text-[var(--color-brand-ochre)] transition"
                >
                  {it.n}
                </span>
              </div>
              <p className="mt-3 text-[var(--color-brand-umber)]/80 max-w-md">{it.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */

function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
        <div className="text-xs uppercase tracking-[0.22em] text-[var(--color-brand-ochre)] mb-4">
          ◇ About
        </div>
        <p
          style={{ fontFamily: "var(--font-display)" }}
          className="text-2xl md:text-4xl font-light leading-snug text-[var(--color-brand-ink)]"
        >
          “Atul Footwear is a neighbourhood shoe shop at{" "}
          <span className="italic font-extrabold">Lahoti Landmark</span>, in
          front of Shoppers Stop, Sawe Wadi, Latur — serving the city with
          quality footwear, careful fitting, and a warm welcome.”
        </p>
        <p className="mt-6 text-sm text-[var(--color-brand-umber)]/70">
          Hours and payment options are indicative. Please confirm directly with the shop.
        </p>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

function Faq() {
  const items = [
    ["Where is Atul Footwear located?", "Lahoti Landmark, in front of Shoppers Stop, Sawe Wadi, Latur — 413512, Maharashtra."],
    ["What is the contact number?", "Call 2382249523 for inquiries."],
    ["What are the working hours?", "Open daily from 10 AM — and once you step in, you're a customer for life. Call ahead to confirm closing time."],
    ["Is the shop open on Sunday?", "Yes — Atul Footwear is open every day from 10 AM, Sundays included."],
    ["What payment methods are accepted?", "Cash is accepted. Confirm other payment options directly with the shop."],
    ["Is parking available?", "Yes — customer parking is available at the shop."],
    ["What kind of footwear do you stock?", "Formal leather, sneakers, sandals, Kolhapuris, school shoes and more."],
    ["How do I get there?", "Tap the map button above for turn-by-turn directions to Sawe Wadi (Lahoti Landmark)."],
  ];
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-xs uppercase tracking-[0.22em] text-[var(--color-brand-ochre)] mb-3">
          ◇ Questions
        </div>
        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="text-4xl md:text-5xl font-black text-[var(--color-brand-ink)] leading-tight"
        >
          Good to <span className="italic font-light">know</span>.
        </h2>
        <div className="mt-10 divide-y divide-[var(--color-brand-umber)]/15 border-y border-[var(--color-brand-umber)]/15">
          {items.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <span
                  style={{ fontFamily: "var(--font-display)" }}
                  className="text-lg md:text-xl font-semibold text-[var(--color-brand-ink)]"
                >
                  {q}
                </span>
                <span className="size-8 grid place-items-center rounded-full bg-[var(--color-brand-ink)] text-[var(--color-brand-cream)] group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[var(--color-brand-umber)]/85 max-w-2xl">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="relative bg-[var(--color-brand-ink)] text-[var(--color-brand-cream)] pt-20 pb-10 overflow-hidden">
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 size-[700px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #d97742, transparent 70%)" }}
      />
      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <div
          style={{ fontFamily: "var(--font-display)" }}
          className="text-6xl sm:text-8xl md:text-[10rem] font-black tracking-tight leading-none text-center"
        >
          Atul <span className="italic font-light text-[var(--color-brand-gold)]">Footwear</span>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-8 text-sm text-[var(--color-brand-cream)]/80 border-t border-[var(--color-brand-cream)]/15 pt-10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-brand-gold)] mb-2">Visit</div>
            Lahoti Landmark, In Front of Shoppers Stop,
            <br /> Sawe Wadi, Latur — 413512
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-brand-gold)] mb-2">Contact</div>
            <a href="tel:+912382249523" className="hover:text-[var(--color-brand-gold)]">2382249523</a>
            <br /> Open daily · from 10 AM
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-brand-gold)] mb-2">Explore</div>
            <div className="flex flex-col gap-1">
              <a href="#collection" className="hover:text-[var(--color-brand-gold)]">Collection</a>
              <a href="#visit" className="hover:text-[var(--color-brand-gold)]">Visit</a>
              <a href="#faq" className="hover:text-[var(--color-brand-gold)]">FAQ</a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-[11px] uppercase tracking-[0.22em] text-[var(--color-brand-cream)]/50 text-center">
          © {new Date().getFullYear()} Atul Footwear · Latur, Maharashtra
        </div>
      </div>
    </footer>
  );
}

/* ---------- Icons ---------- */

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}
function ParkingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path strokeLinecap="round" d="M10 16V8h3.5a2.5 2.5 0 0 1 0 5H10" />
    </svg>
  );
}
function CashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}
function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}
