"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

function prefersReducedMotion() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function AOSInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    AOS.init({
      once: true,
      mirror: false,
      duration: 650,
      offset: 90,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      anchorPlacement: "top-bottom",
    });
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    AOS.refreshHard();
  }, [pathname]);

  return null;
}