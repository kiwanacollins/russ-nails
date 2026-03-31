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

  const firstImageY = useTransform(scrollYProgress, [0, 1], [44, -44]);
  const secondImageY = useTransform(scrollYProgress, [0, 1], [-52, 52]);
  const firstImageRotate = useTransform(scrollYProgress, [0, 1], [6, 1]);
  const secondImageRotate = useTransform(scrollYProgress, [0, 1], [-8, -2]);

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

          <div className="relative mx-auto w-full max-w-176 min-h-144 sm:min-h-168">
            <motion.figure
              style={{ y: firstImageY, rotate: firstImageRotate }}
              className="absolute right-0 top-0 h-76 w-[64%] overflow-hidden rounded-3xl shadow-[0_26px_60px_-35px_rgba(37,23,20,0.55)] sm:h-96"
            >
              <Image
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80"
                alt="Luxury manicure setup"
                fill
                sizes="(max-width: 1024px) 60vw, 28vw"
                className="object-cover"
              />
            </motion.figure>

            <motion.figure
              style={{ y: secondImageY, rotate: secondImageRotate }}
              className="absolute left-[5%] top-[42%] h-72 w-[54%] overflow-hidden rounded-3xl shadow-[0_26px_60px_-35px_rgba(37,23,20,0.55)] sm:h-96"
            >
              <Image
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80"
                alt="Nail artist preparing tools"
                fill
                sizes="(max-width: 1024px) 50vw, 24vw"
                className="object-cover"
              />
            </motion.figure>

            <div className="absolute right-0 bottom-0 w-[78%] rounded-[1.6rem] border border-brand-cocoa/12 bg-surface/95 p-5 shadow-[0_24px_40px_-28px_rgba(44,28,22,0.45)] backdrop-blur sm:w-[62%] sm:p-6">
              <p className="text-sm leading-7 text-muted sm:text-base">
                We created this studio as a calm, elegant destination where every appointment is mapped
                to your preferences. From shape profiling to aftercare planning, each step is intentional.
              </p>

              <ul className="mt-4 space-y-2">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-xs leading-6 text-brand-cocoa sm:text-sm">
                    <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-cocoa text-[10px] text-white">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-5 inline-flex items-center justify-center rounded-sm border border-brand-cocoa/28 px-5 py-2 text-[11px] font-semibold tracking-[0.26em] text-brand-cocoa uppercase transition hover:-translate-y-0.5"
              >
                More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
