"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type PersonalizedExperienceSectionProps = {
  accentClassName: string;
  points: string[];
};

export function PersonalizedExperienceSection({
  accentClassName,
  points,
}: PersonalizedExperienceSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const firstImageY = useTransform(scrollYProgress, [0, 1], [36, -38]);
  const secondImageY = useTransform(scrollYProgress, [0, 1], [-44, 44]);
  const detailCardY = useTransform(scrollYProgress, [0, 1], [18, -20]);
  const firstImageRotate = useTransform(scrollYProgress, [0, 1], [-11, -5]);
  const secondImageRotate = useTransform(scrollYProgress, [0, 1], [11, 5]);

  return (
    <section ref={sectionRef} className="shell mt-20">
      <div className="overflow-hidden rounded-[2.4rem] border border-brand-cocoa/10 bg-[#efeeee] px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold tracking-[0.28em] text-brand-cocoa/65 uppercase">A Space For You</p>
            <p className="mt-4 text-xs tracking-[0.2em] text-brand-cocoa/70 uppercase">Personalized Experience</p>
            <h2 className="mt-5 font-serif text-[2.25rem] leading-[1.05] text-brand-cocoa sm:text-[3.5rem]">
              Personalized beauty treatments
              <br />
              <span className={`${accentClassName} text-[0.74em] leading-none text-[#b88491]`}>tailored</span>{" "}
              to your rhythm.
            </h2>
          </div>

          <div className="relative mx-auto w-full max-w-176 min-h-144 sm:min-h-160">
            <motion.figure
              style={{ y: firstImageY, rotate: firstImageRotate }}
              className="absolute left-[8%] top-[8%] z-20 h-72 w-[52%] overflow-hidden rounded-[1.9rem] border border-white/40 shadow-[0_26px_60px_-35px_rgba(37,23,20,0.55)] sm:h-96"
            >
              <Image
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80"
                alt="Luxury manicure setup"
                fill
                sizes="(max-width: 1024px) 52vw, 24vw"
                className="object-cover"
              />
            </motion.figure>

            <motion.figure
              style={{ y: secondImageY, rotate: secondImageRotate }}
              className="absolute right-[8%] top-[6%] z-30 h-72 w-[52%] overflow-hidden rounded-[1.9rem] border border-white/35 shadow-[0_26px_60px_-35px_rgba(37,23,20,0.55)] sm:h-96"
            >
              <Image
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80"
                alt="Nail artist preparing tools"
                fill
                sizes="(max-width: 1024px) 52vw, 24vw"
                className="object-cover"
              />
            </motion.figure>

            <motion.div
              style={{ y: detailCardY }}
              className="absolute right-0 bottom-[1%] z-40 w-[84%] rounded-[1.8rem] border border-brand-cocoa/14 bg-surface/97 p-5 shadow-[0_24px_40px_-28px_rgba(44,28,22,0.45)] backdrop-blur sm:w-[64%] sm:p-6"
            >
              <p className="text-sm leading-7 text-brand-cocoa/82 sm:text-[1.05rem] sm:leading-8">
                We created this studio as a calm, elegant destination where every appointment is mapped
                to your preferences. From shape profiling to aftercare planning, each step is intentional.
              </p>

              <ul className="mt-4 space-y-2">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[0.82rem] leading-6 text-brand-cocoa/88 sm:text-base">
                    <span className="mt-[0.34rem] inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-cocoa/88 text-[10px] text-white">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-lg border border-brand-cocoa/26 bg-white/80 px-5 py-2.5 text-[11px] font-semibold tracking-[0.24em] text-brand-cocoa uppercase transition hover:-translate-y-0.5 hover:bg-white"
              >
                More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
