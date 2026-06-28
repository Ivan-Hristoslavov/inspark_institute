"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function ComingSoonPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes drawLine {
          from { width: 0; opacity: 0; }
          to { width: 64px; opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .anim-fadeUp { animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .anim-fadeIn { animation: fadeIn 1.2s ease-out forwards; opacity: 0; }
        .anim-scaleIn { animation: scaleIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .anim-drawLine { animation: drawLine 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; width: 0; }
        .anim-float { animation: float 5s ease-in-out infinite; }
        .d1 { animation-delay: 0.1s; }
        .d2 { animation-delay: 0.3s; }
        .d3 { animation-delay: 0.6s; }
        .d4 { animation-delay: 0.9s; }
        .d5 { animation-delay: 1.2s; }
        .d6 { animation-delay: 1.5s; }
        .d7 { animation-delay: 1.8s; }
        .d8 { animation-delay: 2.1s; }
        .d9 { animation-delay: 2.5s; }
      `}</style>

      <main className="min-h-screen relative overflow-hidden bg-skin-1">
        {/* Ambient light — subtle, no particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full opacity-[0.045]"
            style={{ background: 'radial-gradient(circle, #72262C 0%, transparent 65%)', transform: 'translate(20%, -30%)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full opacity-[0.035]"
            style={{ background: 'radial-gradient(circle, #C99A3E 0%, transparent 65%)', transform: 'translate(-25%, 25%)' }}
          />
        </div>

        {/* Full-height centered content — occupies middle ~60% of viewport */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
          <div className="w-full max-w-3xl flex flex-col items-center">

            {/* ─── Logo ─── */}
            <div className={mounted ? "anim-scaleIn d1" : "opacity-0"}>
              <Image
                src="/logos/logo-inspark.png"
                alt="Inspark Institute"
                width={800}
                height={260}
                className="mx-auto w-[340px] sm:w-[440px] md:w-[520px] lg:w-[580px] h-auto"
                priority
              />
            </div>

            {/* ─── Spacer: logo → headline ─── */}
            <div className="h-8 sm:h-10" />

            {/* ─── Headline ─── */}
            <h1
              className={`font-heading text-center font-bold text-burgundy leading-[1.05] tracking-[-0.02em] text-[2.75rem] sm:text-[3.5rem] md:text-[4.25rem] lg:text-[5rem] ${mounted ? "anim-fadeUp d2" : "opacity-0"}`}
            >
              Something Unique
              <br />
              Is Taking Shape
            </h1>

            {/* ─── Spacer: headline → divider ─── */}
            <div className="h-8 sm:h-10" />

            {/* ─── Coming Soon badge ─── */}
            <div className={`flex flex-col items-center ${mounted ? "anim-fadeUp d3" : "opacity-0"}`}>
              <div className="flex items-center gap-4 mb-3">
                <div className="h-[1px] w-8 sm:w-12 bg-bright-gold/50" />
                <p className="font-heading text-lg sm:text-xl md:text-2xl tracking-[0.2em] uppercase text-burgundy/80 font-bold">
                  Coming Soon
                </p>
                <div className="h-[1px] w-8 sm:w-12 bg-bright-gold/50" />
              </div>
              <p className="font-body text-xs sm:text-sm text-perch/50 tracking-wider">
                Be the first to know when we launch
              </p>
            </div>

            {/* ─── Spacer: coming soon → body ─── */}
            <div className="h-14 sm:h-20" />

            {/* ─── Body copy ─── */}
            <div className="max-w-xl text-center">
              <p className={`font-heading text-lg sm:text-xl md:text-2xl font-bold text-burgundy/90 italic mb-5 ${mounted ? "anim-fadeUp d5" : "opacity-0"}`}>
                It&apos;s not just another massage course.
              </p>

              <p className={`font-body text-[15px] sm:text-base md:text-lg text-perch/75 leading-[1.7] mb-4 ${mounted ? "anim-fadeUp d6" : "opacity-0"}`}>
                It&apos;s a complete ecosystem bringing together advanced methodologies, science, hands-on mastery, business strategy, and digital marketing into one complete professional journey.
              </p>

              <p className={`font-body text-[15px] sm:text-base md:text-lg text-perch/75 leading-[1.7] ${mounted ? "anim-fadeUp d7" : "opacity-0"}`}>
                Designed to help passionate massage and wellness professionals elevate their skills, build thriving businesses, and unlock their highest professional potential.
              </p>
            </div>

            {/* ─── Spacer: body → CTA ─── */}
            <div className="h-14 sm:h-20" />

            {/* ─── CTA Card ─── */}
            <div className={`w-full max-w-md ${mounted ? "anim-fadeUp d8" : "opacity-0"}`}>
              <div className="relative bg-white/45 backdrop-blur-lg rounded-3xl p-8 sm:p-10 border border-white/50 shadow-[0_4px_32px_rgba(114,38,44,0.04)]">
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-burgundy/15 rounded-tl-md" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-burgundy/15 rounded-br-md" />

                <h2 className="font-heading text-xl sm:text-2xl font-bold text-burgundy mb-1.5 text-center">
                  Get in the waiting room.
                </h2>
                <p className="font-body text-perch/55 text-center mb-6 text-sm sm:text-base">
                  Be the first to discover and get priority access.
                </p>

                <div className="flex items-center justify-center gap-2 mb-7">
                  <span className="text-bright-gold/70 text-xs">✦</span>
                  <p className="text-xs sm:text-sm text-spiced-apple/80 font-medium tracking-wide">
                    Special welcome gift after you register
                  </p>
                  <span className="text-bright-gold/70 text-xs">✦</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 sm:w-44 sm:h-44 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-skin-1/40 mb-3 anim-float">
                    <div className="text-center text-perch/40 text-xs px-3">
                      <svg className="w-10 h-10 mx-auto mb-2 text-burgundy/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13.5 14.625v2.25m0 2.25v-2.25m0 0h2.25m-2.25 0h-1.125M19.5 14.625v4.5m0 0h-4.5" />
                      </svg>
                      QR Code
                    </div>
                  </div>
                  <p className="font-body text-xs text-perch/45 text-center max-w-[240px]">
                    Scan to join the Priority List and receive your welcome gift
                  </p>
                </div>
              </div>
            </div>

            {/* ─── Footer ─── */}
            <div className={`mt-14 sm:mt-20 mb-6 text-center ${mounted ? "anim-fadeIn d9" : "opacity-0"}`}>
              <p className="font-body text-[10px] sm:text-xs text-perch/30 tracking-[0.3em] uppercase">
                Inspark Institute &copy; {new Date().getFullYear()}
              </p>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
