"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const WELCOME_PARAGRAPH =
  "Welcome to the complete ecosystem bringing together, for the first time, advanced face massage, anatomy, physiology, science, hands-on mastery, business strategy, and digital marketing into one complete professional journey.";

const WELCOME_PARAGRAPH_2 =
  "Designed to help passionate aesthetic and massage therapists elevate their skills, build thriving businesses, and unlock their highest level of professional potential and expertise.";

const PRELAUNCH_URL = "https://go.insparkinstitute.com/inspark-prelaunch-welcome?preview=true";

const COOKIE_CONSENT_KEY = "inspark_cookie_consent";

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(COOKIE_CONSENT_KEY) : "accepted";
    if (!stored) setVisible(true);
  }, []);

  function choose(value: "accepted" | "rejected") {
    localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-skin-1 px-4 py-3 sm:px-6 sm:py-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
        <p className="font-body text-xs sm:text-sm text-perch/80 text-center sm:text-left flex-1">
          We use essential and analytics cookies to run this site and understand how it&apos;s used.
          You can accept or reject non-essential cookies at any time.
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => choose("rejected")}
            className="rounded-lg border border-skin-1 px-4 py-2 text-xs sm:text-sm font-semibold text-perch hover:bg-skin-1/40 transition-colors"
          >
            Reject
          </button>
          <button
            onClick={() => choose("accepted")}
            className="rounded-lg bg-burgundy px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-burgundy/90 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

function StepInsideButton({ size = "md" }: { size?: "sm" | "md" }) {
  const compact = size === "sm";
  return (
    <a
      href={PRELAUNCH_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-burgundy text-white font-semibold hover:bg-burgundy/90 transition-colors shadow-lg shadow-burgundy/20 ${
        compact ? "px-7 py-3 text-sm 2xl:px-10 2xl:py-4 2xl:text-lg" : "px-10 py-4 text-base 2xl:px-12 2xl:py-5 2xl:text-xl"
      }`}
    >
      Step Inside
      <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
        &rarr;
      </span>
    </a>
  );
}

export function ComingSoonPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const reveal = (anim: string, delay: string) =>
    mounted ? `${anim} ${delay}` : "opacity-0";

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..700;1,6..96,400..700&family=Caveat:wght@500;600;700&family=Kalam:wght@400;700&display=swap"
        rel="stylesheet"
      />
      {/* Canva "Student" handwriting font */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://db.onlinewebfonts.com/c/a2af0537a66875ac359f01f497bc6ca9?family=Student"
        rel="stylesheet"
        type="text/css"
      />

      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        .anim-fadeUp { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
        .anim-fadeIn { animation: fadeIn 1.2s ease-out forwards; opacity: 0; }
        .anim-scaleIn { animation: scaleIn 1s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
        .anim-slideR { animation: slideInRight 1.1s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
        .anim-slideL { animation: slideInLeft 1.1s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
        .anim-float { animation: float 5s ease-in-out infinite; }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.3s; }
        .d3 { animation-delay: 0.5s; }
        .d4 { animation-delay: 0.7s; }
        .d5 { animation-delay: 0.9s; }
        .d6 { animation-delay: 1.1s; }
        .d7 { animation-delay: 1.3s; }
        .d8 { animation-delay: 1.5s; }
        .d9 { animation-delay: 1.8s; }
        .caveat { font-family: 'Caveat', cursive; }
        /* Brand fonts. Apricots & CanvaStudent are Canva-proprietary — drop the .otf/.ttf
           into /public/fonts and the @font-face below activates them; until then they fall
           back to close Google equivalents. */
        @font-face {
          font-family: 'Apricots';
          src: url('/fonts/Apricots.woff2') format('woff2'), url('/fonts/Apricots.otf') format('opentype');
          font-display: swap;
        }
        .ff-apricots { font-family: 'Caveat', cursive; }
        .ff-canva { font-family: 'Kalam', cursive; }
        .ff-bodoni { font-family: 'Bodoni Moda', 'Times New Roman', serif; }
        .ff-abril { font-family: 'Abril Fatface', Georgia, serif; }
      `}</style>

      <main className="relative min-h-screen overflow-hidden bg-white">

        {/* ════════ DESKTOP EDITORIAL (lg+) — locked to viewport, no scroll ════════ */}
        <div className="hidden lg:block relative h-screen overflow-hidden">

          {/* RIGHT — 3 vertical columns + gold strip */}
          <div className={`absolute top-0 right-0 h-full w-[23%] flex ${reveal("anim-slideR", "d3")}`}>
            <div
              className="h-full w-2.5 shrink-0"
              style={{ background: "linear-gradient(180deg,#C99A3E,#E6C97A 45%,#B8862E)" }}
            />
            <div className="relative flex-1 border-r border-white/40 overflow-hidden">
              <Image src="/images/white_girl.jpeg" alt="" fill quality={92} className="scale-[1.9] object-cover object-[45%_50%]" style={{ transformOrigin: "100% 30%" }} sizes="(min-width:1024px) 760px, 50vw" />
            </div>
            <div className="relative flex-1 border-r border-white/40 overflow-hidden">
              <Image src="/images/creamy.jpg" alt="" fill quality={92} className="object-cover object-center scale-[1.8]" style={{ transformOrigin: "50% 50%" }} sizes="(min-width:1024px) 760px, 50vw" />
            </div>
            <div className="relative flex-1 overflow-hidden">
              <Image src="/images/b_woman.jpg" alt="" fill quality={92} className="scale-[2.2] object-cover object-[75%_70%]" style={{ transformOrigin: "75% 70%" }} sizes="(min-width:1024px) 760px, 50vw" />
            </div>
          </div>

          {/* 360 badge — dips into the photo strips */}
          <div className={`absolute top-1/2 right-[20%] -translate-y-1/2 translate-x-1/2 z-20`}>
            <Image
              src="/logos/inspark-360-badge.png"
              alt="Inspark Institute 360"
              width={132}
              height={132}
              className="w-24 h-24 xl:w-28 xl:h-28 drop-shadow-xl"
            />
          </div>

          {/* ANNA cutout — left, aligned with text level */}
          <div className={`absolute left-0 bottom-0 h-[92vh] w-[34%] z-10 ${reveal("anim-fadeUp", "d4")}`}>
            <Image
              src="/images/anna-cutout.png"
              alt="Anna Tsankova"
              fill
              className="object-contain object-left-bottom"
              sizes="34vw"
              priority
            />
          </div>

          {/* "Coming Soon your way" script — close to Anna (rotation on inner so anim doesn't override) */}
          <div className={`absolute top-[19%] left-[23%] z-20 ${reveal("anim-fadeUp", "d2")}`}>
            <div style={{ transform: "rotate(-24deg)" }}>
              <p className="ff-apricots text-perch text-[2.4rem] 2xl:text-[3rem] leading-none text-center">
                Coming Soon
                <span className="block text-burgundy text-[1.9rem] 2xl:text-[2.4rem] mt-1">your way</span>
              </p>
            </div>
          </div>

          {/* CENTER TEXT BLOCK (logo in-flow at top) */}
          <div className="relative z-10 ml-[32%] mr-[23%] h-screen flex flex-col justify-center py-4 pl-4 pr-6">
            {/* Logo */}
            <div className={`self-center mb-2 ${reveal("anim-scaleIn", "d1")}`}>
              <Image
                src="/logos/logo-tagline-transparent.png"
                alt="Inspark Institute — Elevating Mastery · Igniting Success"
                width={1280}
                height={720}
                className="w-[440px] xl:w-[520px] 2xl:w-[620px] h-auto"
                priority
              />
            </div>

            <h1 className={`ff-bodoni text-perch font-semibold leading-[1.05] text-[1.7rem] xl:text-[2.1rem] 2xl:text-[2.7rem] mb-2 2xl:mb-4 ${reveal("anim-fadeUp", "d4")}`}>
              Something Unique Is Taking Shape
            </h1>

            <div className={`space-y-1 2xl:space-y-2 mb-2 2xl:mb-4 ${reveal("anim-fadeUp", "d5")}`}>
              <p className="ff-canva text-perch/90 text-sm xl:text-base 2xl:text-xl leading-snug">{WELCOME_PARAGRAPH}</p>
              <p className="ff-canva text-perch/90 text-sm xl:text-base 2xl:text-xl leading-snug">{WELCOME_PARAGRAPH_2}</p>
            </div>

            <div className={`space-y-1 2xl:space-y-2 mb-3 2xl:mb-5 ${reveal("anim-fadeUp", "d6")}`}>
              <p className="ff-abril text-burgundy text-sm xl:text-base 2xl:text-xl leading-snug">
                Get on the Priority List and be the first to discover what&apos;s coming and gain priority access.
              </p>
              <p className="ff-canva text-perch text-sm xl:text-base 2xl:text-xl leading-snug">
                (PS: We have a special welcome gift waiting for you after you register.)
              </p>
              <p className="ff-abril text-burgundy text-sm xl:text-base 2xl:text-xl leading-snug">
                Step inside to join the Priority List and receive your welcome gift.
              </p>
            </div>

            <div className={`flex items-center gap-6 2xl:gap-8 ${reveal("anim-fadeUp", "d7")}`}>
              <StepInsideButton size="sm" />
              <p className="ff-bodoni italic text-perch text-base 2xl:text-xl">By Anna Tsankova</p>
            </div>

            <p className="font-body text-[9px] 2xl:text-xs text-perch/30 tracking-[0.2em] uppercase mt-2 2xl:mt-4">
              &copy; {new Date().getFullYear()} Inspark Institute. All rights reserved.
            </p>
          </div>
        </div>

        {/* ════════ MOBILE / TABLET STACK (<lg) ════════ */}
        <div className="lg:hidden relative z-10 flex flex-col items-center text-center px-6 py-12">

          <div className={`mb-3 ${reveal("anim-scaleIn", "d1")}`}>
            <Image
              src="/logos/logo-tagline-transparent.png"
              alt="Inspark Institute — Elevating Mastery · Igniting Success"
              width={1280}
              height={720}
              className="w-[360px] sm:w-[420px] h-auto mx-auto"
              priority
            />
          </div>

          <p className={`ff-apricots text-3xl sm:text-4xl text-perch mb-6 ${reveal("anim-fadeUp", "d2")}`}>
            Coming Soon <span className="text-burgundy">your way</span>
          </p>

          <h1 className={`ff-bodoni text-perch font-semibold leading-[1.1] text-[2.1rem] sm:text-[2.8rem] mb-7 ${reveal("anim-fadeUp", "d3")}`}>
            Something Unique Is Taking Shape
          </h1>

          {/* Skin photo accent — 3 columns */}
          <div className={`grid grid-cols-3 gap-2 w-full max-w-md mb-8 ${reveal("anim-scaleIn", "d4")}`}>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/white_girl.jpeg" alt="" fill className="object-cover object-[40%_50%] scale-[2.4]" style={{ transformOrigin: "80% 30%" }} sizes="33vw" />
            </div>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/creamy.jpg" alt="" fill className="object-cover object-center scale-[1.8]" style={{ transformOrigin: "50% 50%" }} sizes="33vw" />
            </div>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/b_woman.jpg" alt="" fill className="object-cover object-[90%_90%] scale-[5]" style={{ transformOrigin: "80% 50%" }} sizes="33vw" />
            </div>
          </div>

          <div className={`max-w-xl space-y-3 mb-8 ${reveal("anim-fadeUp", "d5")}`}>
            <p className="ff-canva text-perch/90 text-lg sm:text-xl leading-snug">{WELCOME_PARAGRAPH}</p>
            <p className="ff-canva text-perch/90 text-lg sm:text-xl leading-snug">{WELCOME_PARAGRAPH_2}</p>
          </div>

          <div className={`max-w-xl space-y-3 mb-8 ${reveal("anim-fadeUp", "d6")}`}>
            <p className="ff-abril text-burgundy text-base sm:text-lg leading-snug">
              Get on the Priority List and be the first to discover what&apos;s coming and gain priority access.
            </p>
            <p className="ff-canva text-perch text-lg sm:text-xl leading-snug">
              (PS: We have a special welcome gift waiting for you after you register.)
            </p>
            <p className="ff-abril text-burgundy text-base sm:text-lg leading-snug">
              Step inside to join the Priority List and receive your welcome gift.
            </p>
          </div>

          <div className={`flex flex-col items-center mb-10 ${reveal("anim-scaleIn", "d7")}`}>
            <StepInsideButton size="md" />
          </div>

          {/* Anna cutout + credit */}
          <div className={`relative w-full max-w-xs ${reveal("anim-fadeUp", "d8")}`}>
            <div className="relative aspect-[2/3]">
              <Image
                src="/images/anna-cutout.png"
                alt="Anna Tsankova"
                fill
                className="object-contain object-bottom"
              />
            </div>
            <div className="absolute top-2 -right-2">
              <Image
                src="/logos/inspark-360-badge.png"
                alt="Inspark Institute 360"
                width={88}
                height={88}
                className="w-20 h-20 drop-shadow-lg"
              />
            </div>
          </div>
          <p className={`ff-bodoni italic text-perch text-lg mt-3 ${reveal("anim-fadeIn", "d9")}`}>
            By Anna Tsankova
          </p>

          <p className="font-body text-[10px] text-perch/30 tracking-[0.2em] uppercase mt-10 text-center px-6">
            &copy; {new Date().getFullYear()} Inspark Institute. All rights reserved.
          </p>
        </div>

        <CookieConsent />
      </main>
    </>
  );
}
