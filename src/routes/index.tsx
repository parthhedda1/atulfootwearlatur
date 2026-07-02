import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import featuredShoe from "../assets/featured-shoe.png";
import sneaker from "../assets/sneaker.png";
import sandal from "../assets/sandal.png";
import atulLogo from "../assets/atul-logo.webp.asset.json";
import storeWall from "../assets/store-wall.png.asset.json";
import storeInterior from "../assets/store-interior.png.asset.json";

const PHONE_DISPLAY = "+91 98905 57555";
const PHONE_TEL = "+919890557555";
const INSTAGRAM_URL = "https://www.instagram.com/atulfootwear?igsh=ZDJnZzk3d2F3OG1o";
const WHATSAPP_URL = "https://wa.me/919890557555?text=Hi%20Atul%20Footwear%2C%20I%27d%20like%20to%20enquire%20about%20your%20collection.";
const ADDRESS_FULL =
  "Atul Footwear, Lahoti Landmark, Chainsukh Road, opp. Shopper Stop, Sawe Wadi, Latur, Maharashtra 413512";
const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7571.581742415945!2d76.58128237549558!3d18.40236668266841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf839772e3dbc7%3A0x49b80c864d403e03!2sAtul%20Footwear!5e0!3m2!1sen!2sin!4v1782892178305!5m2!1sen!2sin";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Atul Footwear — Sole to Soul Since 1932 · Latur" },
      {
        name: "description",
        content:
          "Atul Footwear, Latur — trusted since 1932. Lahoti Landmark, Chainsukh Road, opp. Shopper Stop, Sawe Wadi. Call +91 98905 57555.",
      },
      { property: "og:title", content: "Atul Footwear — Sole to Soul Since 1932" },
      {
        property: "og:description",
        content:
          "Curated footwear and expert fitting in the heart of Latur since 1932. Visit us at Lahoti Landmark, opp. Shopper Stop, Sawe Wadi.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const mapUrl =
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(ADDRESS_FULL);

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
        <a href="#top" className="flex items-center gap-3">
          <img
            src={atulLogo.url}
            alt="Atul Footwear logo"
            className="h-10 w-auto object-contain"
          />
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.2em] text-[var(--color-brand-umber)]/70">
            Sole to Soul Since 1932
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--color-brand-umber)]">
          <a href="#collection" className="hover:text-[var(--color-brand-ochre)] transition">Collection</a>
          <a href="#visit" className="hover:text-[var(--color-brand-ochre)] transition">Visit</a>
          <a href="#about" className="hover:text-[var(--color-brand-ochre)] transition">About</a>
          <a href="#faq" className="hover:text-[var(--color-brand-ochre)] transition">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Atul Footwear on Instagram"
            className="hidden sm:grid place-items-center size-9 rounded-full border border-[var(--color-brand-ink)]/15 text-[var(--color-brand-ink)] hover:bg-[var(--color-brand-ink)] hover:text-[var(--color-brand-cream)] transition"
          >
            <InstagramIcon className="size-4" />
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="group relative inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-ink)] text-[var(--color-brand-cream)] px-4 py-2 text-sm font-medium shadow-[0_8px_20px_-8px_rgba(58,31,23,0.6)] hover:translate-y-[-1px] transition-all"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-gold)] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-brand-gold)]" />
            </span>
            Call Shop
          </a>
        </div>
      </div>
    </header>
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
            Sawe Wadi · Latur · Since 1932
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
            A neighbourhood footwear destination in the heart of Latur — serving generations
            since 1932. Hand-picked leather, expert fitting, and service you remember.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-ink)] text-[var(--color-brand-cream)] px-6 py-3.5 text-sm font-semibold shadow-[0_18px_40px_-18px_rgba(58,31,23,0.8)] hover:translate-y-[-2px] transition"
            >
              Call {PHONE_DISPLAY}
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
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-ink)]/20 bg-[var(--color-brand-cream)]/60 backdrop-blur px-5 py-3.5 text-sm font-semibold text-[var(--color-brand-ink)] hover:bg-[var(--color-brand-cream)] transition"
            >
              <InstagramIcon className="size-4" /> Instagram
            </a>
          </div>

          <div className="mt-10 relative rounded-3xl border border-[var(--color-brand-umber)]/15 bg-gradient-to-br from-[var(--color-brand-cream)] to-[var(--color-brand-clay)]/50 p-5 shadow-[0_20px_60px_-30px_rgba(4,47,46,0.35)]">
            <div className="absolute -top-3 left-5 px-3 py-1 rounded-full bg-[var(--color-brand-ink)] text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-brand-gold)]">
              ● Open Today
            </div>
            <div className="flex items-stretch gap-4">
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-brand-umber)]/70">Weekdays</div>
                <div className="mt-1 font-serif italic text-[var(--color-brand-ink)] text-lg leading-tight">Mon — Sat</div>
                <div className="mt-1 text-2xl font-black text-[var(--color-brand-ink)] tabular-nums">
                  10:00<span className="text-xs align-top ml-0.5 text-[var(--color-brand-ochre)]">AM</span>
                  <span className="mx-1 text-[var(--color-brand-ochre)]">→</span>
                  9:30<span className="text-xs align-top ml-0.5 text-[var(--color-brand-ochre)]">PM</span>
                </div>
              </div>
              <div className="w-px bg-gradient-to-b from-transparent via-[var(--color-brand-umber)]/30 to-transparent" />
              <div className="flex-1">
                <div className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-brand-umber)]/70">Weekend</div>
                <div className="mt-1 font-serif italic text-[var(--color-brand-ink)] text-lg leading-tight">Sunday</div>
                <div className="mt-1 text-2xl font-black text-[var(--color-brand-ink)] tabular-nums">
                  11:00<span className="text-xs align-top ml-0.5 text-[var(--color-brand-ochre)]">AM</span>
                  <span className="mx-1 text-[var(--color-brand-ochre)]">→</span>
                  8:00<span className="text-xs align-top ml-0.5 text-[var(--color-brand-ochre)]">PM</span>
                </div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-dashed border-[var(--color-brand-umber)]/20 text-[11px] text-[var(--color-brand-umber)]/75 italic text-center">
              "Until you walk in, you're a customer — after that, family."
            </div>
          </div>
        </div>

        {/* 3D floating shoe stack */}
        <div
          ref={heroRef}
          className="relative h-[440px] md:h-[560px]"
          style={{ perspective: "1200px" }}
        >
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
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[280px] md:size-[340px] rounded-full shadow-[inset_0_-30px_60px_rgba(58,31,23,0.35),0_30px_80px_-20px_rgba(58,31,23,0.45)]"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, #f8e3b8 0%, #d97742 70%, #8a3d20 100%)",
              transform: `rotateX(${tilt.y * 0.3}deg) rotateY(${tilt.x * 0.3}deg)`,
              transition: "transform 200ms ease-out",
            }}
          />
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
          {/* Premium monogram medallion */}
          <div
            className="absolute right-2 md:right-0 top-4 md:top-8 size-28 md:size-36 rounded-full grid place-items-center"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #fff6df 0%, #e8b86a 45%, #8a5a2b 100%)",
              boxShadow:
                "inset 0 -8px 20px rgba(58,31,23,0.45), inset 0 4px 10px rgba(255,255,255,0.5), 0 24px 40px -14px rgba(58,31,23,0.5)",
              animation: "float 7s ease-in-out infinite",
            }}
          >
            <div
              className="absolute inset-1.5 rounded-full border border-[var(--color-brand-ink)]/25"
              aria-hidden
            />
            <div className="relative text-center leading-none">
              <div
                style={{ fontFamily: "var(--font-display)" }}
                className="text-4xl md:text-5xl font-black italic text-[var(--color-brand-ink)]"
              >
                Af
              </div>
              <div className="mt-1 text-[8px] md:text-[9px] uppercase tracking-[0.28em] text-[var(--color-brand-ink)]/80 font-semibold">
                Est · 1932
              </div>
            </div>
          </div>
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
              <div className="font-semibold text-[var(--color-brand-ink)]">Sole to Soul</div>
              <div className="text-[var(--color-brand-umber)]/70">Since 1932</div>
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
      sub: "Campus · Sparx · Abros",
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
            Campus, Sparx, Abros and more — walk in to see the full lineup of formals,
            sneakers, sandals and seasonal picks.
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
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold border-b border-[var(--color-brand-ink)]/40 hover:border-[var(--color-brand-ink)] transition"
                >
                  Enquire →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Store photos strip */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <figure className="relative rounded-3xl overflow-hidden border border-[var(--color-brand-umber)]/15 shadow-[0_30px_60px_-30px_rgba(58,31,23,0.5)] group">
            <img src={storeWall.url} alt="Wall of running shoes at Atul Footwear — Campus, Sparx, Abros" className="w-full h-72 object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" />
            <figcaption className="absolute left-4 bottom-4 rounded-full bg-[var(--color-brand-cream)]/90 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-[var(--color-brand-ink)] font-semibold">
              Sports Wall · Campus · Sparx · Abros
            </figcaption>
          </figure>
          <figure className="relative rounded-3xl overflow-hidden border border-[var(--color-brand-umber)]/15 shadow-[0_30px_60px_-30px_rgba(58,31,23,0.5)] group">
            <img src={storeInterior.url} alt="Women's footwear section inside Atul Footwear" className="w-full h-72 object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" />
            <figcaption className="absolute left-4 bottom-4 rounded-full bg-[var(--color-brand-cream)]/90 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-[var(--color-brand-ink)] font-semibold">
              Women's Section · Heels · Flats · Sandals
            </figcaption>
          </figure>
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
                Opposite{" "}
                <span className="italic font-light text-[var(--color-brand-gold)]">Shopper Stop</span>.
              </h2>
              <address className="not-italic mt-6 text-[var(--color-brand-cream)]/85 text-base leading-relaxed">
                Atul Footwear, Lahoti Landmark,
                <br />
                Chainsukh Road, opp. Shopper Stop,
                <br />
                Sawe Wadi, Latur, Maharashtra 413512
              </address>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <InfoTile icon={<ClockIcon />} title="Mon – Sat" body="10:00 AM – 9:30 PM" />
                <InfoTile icon={<ClockIcon />} title="Sunday" body="11:00 AM – 8:00 PM" />
                <InfoTile icon={<CashIcon />} title="Payment" body="Cash · UPI · Card" />
                <InfoTile icon={<PhoneIcon />} title="Phone" body={PHONE_DISPLAY} />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-gold)] text-[var(--color-brand-ink)] px-6 py-3 text-sm font-bold hover:translate-y-[-2px] transition shadow-[0_18px_40px_-10px_rgba(232,184,106,0.6)]"
                >
                  <PhoneIcon className="size-4" />
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-cream)]/30 text-[var(--color-brand-cream)] px-6 py-3 text-sm font-semibold hover:bg-[var(--color-brand-cream)]/10 transition"
                >
                  <MapPinIcon className="size-4" />
                  Directions on Google Maps
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-cream)]/30 text-[var(--color-brand-cream)] px-6 py-3 text-sm font-semibold hover:bg-[var(--color-brand-cream)]/10 transition"
                >
                  <InstagramIcon className="size-4" />
                  @atulfootwear
                </a>
              </div>
            </div>

            {/* Live Google map embed */}
            <div className="relative min-h-[360px] md:min-h-full">
              <iframe
                src={MAPS_EMBED_SRC}
                title="Atul Footwear on Google Maps"
                className="absolute inset-0 w-full h-full grayscale-[0.15]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-ink)] text-[var(--color-brand-cream)] px-4 py-2 text-xs font-semibold shadow-lg hover:bg-[var(--color-brand-gold)] hover:text-[var(--color-brand-ink)] transition"
              >
                <MapPinIcon className="size-3.5" /> Open in Google Maps
              </a>
            </div>
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
    { t: "Since 1932", b: "Four generations of trust — Latur's original footwear house.", n: "01" },
    { t: "Expert Staff", b: "Honest guidance on fit, finish, and material — every visit.", n: "02" },
    { t: "Curated Range", b: "Campus, Sparx, Abros, formals, kolhapuris & more — picked by hand.", n: "03" },
    { t: "Prime Location", b: "Lahoti Landmark, Chainsukh Road — opp. Shopper Stop, Sawe Wadi.", n: "04" },
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
          “Sole to Soul since{" "}
          <span className="italic font-extrabold">1932</span> — Atul Footwear
          has been Latur's trusted footwear destination for nearly a century,
          serving generations with quality, care and a warm welcome.”
        </p>
        <p className="mt-6 text-sm text-[var(--color-brand-umber)]/70">
          Visit us at Lahoti Landmark, Chainsukh Road, opp. Shopper Stop, Sawe Wadi, Latur.
        </p>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

function Faq() {
  const items = [
    ["Where is Atul Footwear located?", "Lahoti Landmark, Chainsukh Road, opposite Shopper Stop, Sawe Wadi, Latur — 413512, Maharashtra."],
    ["What is the contact number?", `Call ${PHONE_DISPLAY} for inquiries.`],
    ["What are the working hours?", "Monday to Saturday: 10:00 AM – 9:30 PM. Sunday: 11:00 AM – 8:00 PM."],
    ["Is the shop open on Sunday?", "Yes — we're open on Sundays from 11:00 AM to 8:00 PM."],
    ["What payment methods are accepted?", "We accept Cash, UPI, and Card payments for your convenience."],
    ["Is parking available?", "Yes — customer parking is available at the shop."],
    ["What kind of footwear do you stock?", "Formal leather, sneakers (Campus, Sparx, Abros and more), sandals, Kolhapuris, school shoes, and women's & kids' footwear."],
    ["How do I get there?", "Tap the map above for turn-by-turn directions to Lahoti Landmark, Chainsukh Road, Sawe Wadi."],
    ["Are you on Instagram?", "Yes — follow @atulfootwear on Instagram for new arrivals and updates."],
    ["Why should you trust Atul?", "Atul Footwear has served Latur since 1932. Four generations of honest pricing, genuine quality and personal service — every pair hand-picked, every customer treated like family."],
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
        <div className="text-center mt-3 text-[11px] uppercase tracking-[0.3em] text-[var(--color-brand-gold)]">
          Sole to Soul · Since 1932
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-8 text-sm text-[var(--color-brand-cream)]/80 border-t border-[var(--color-brand-cream)]/15 pt-10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-brand-gold)] mb-2">Visit</div>
            Lahoti Landmark, Chainsukh Road,
            <br /> opp. Shopper Stop, Sawe Wadi,
            <br /> Latur, Maharashtra 413512
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-brand-gold)] mb-2">Contact</div>
            <a href={`tel:${PHONE_TEL}`} className="hover:text-[var(--color-brand-gold)]">{PHONE_DISPLAY}</a>
            <br /> Mon–Sat 10 AM – 9:30 PM
            <br /> Sun 11 AM – 8 PM
            <br />
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-2 hover:text-[var(--color-brand-gold)]">
              <InstagramIcon className="size-4" /> @atulfootwear
            </a>
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
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
