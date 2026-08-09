"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Star, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import type { ProjectItem } from "@/data/resume";
import { cn } from "@/lib/utils";

function ProjectPlaceholder({ category }: { category: string }) {
  return (
    <div className="mt-6 aspect-video rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.2),transparent_36%),linear-gradient(135deg,_rgba(15,23,42,1),_rgba(15,23,42,0.8))] p-4">
      <div className="flex h-full items-end justify-between rounded-[18px] border border-white/8 bg-slate-900/30 p-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Platform</p>
          <p className="mt-2 text-xl font-semibold text-white">{category}</p>
        </div>
        <Star className="h-5 w-5 text-cyan-300" />
      </div>
    </div>
  );
}

export function ProjectGallery({ project }: { project: ProjectItem }) {
  const images = project.images ?? [];
  const isPortrait = project.imageOrientation === "portrait";
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const hasImages = images.length > 0;
  const showPrev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, images.length]);

  if (!hasImages) {
    return <ProjectPlaceholder category={project.category} />;
  }

  const lightbox = (
    <AnimatePresence>
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close gallery"
            className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/5 p-2 text-white transition hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="mb-4 text-center">
            <p className="text-sm font-medium text-white">{project.name}</p>
            <p className="text-xs text-slate-400">
              {activeIndex + 1} / {images.length}
            </p>
          </div>

          <div
            className="relative flex w-full max-w-5xl flex-1 items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            {images.length > 1 && (
              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous screenshot"
                className="absolute left-0 z-10 rounded-full border border-white/15 bg-white/5 p-2 text-white transition hover:bg-white/10 sm:-left-14"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}

            <div className="relative h-full max-h-[70vh] w-full overflow-hidden rounded-2xl">
              <Image
                src={images[activeIndex]}
                alt={`${project.name} screenshot ${activeIndex + 1} of ${images.length}`}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>

            {images.length > 1 && (
              <button
                type="button"
                onClick={showNext}
                aria-label="Next screenshot"
                className="absolute right-0 z-10 rounded-full border border-white/15 bg-white/5 p-2 text-white transition hover:bg-white/10 sm:-right-14"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}
          </div>

          {images.length > 1 && (
            <div
              className="mt-4 flex max-w-full gap-2 overflow-x-auto px-2 pb-1"
              onClick={(event) => event.stopPropagation()}
            >
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Show screenshot ${i + 1}`}
                  className={cn(
                    "relative flex-shrink-0 overflow-hidden rounded-lg border transition",
                    isPortrait ? "h-20 w-11" : "h-14 w-20",
                    i === activeIndex
                      ? "border-cyan-400/70 ring-2 ring-cyan-400/40"
                      : "border-white/10 opacity-50 hover:opacity-100"
                  )}
                >
                  <Image src={src} alt="" fill sizes="80px" className={isPortrait ? "object-contain bg-slate-900/60" : "object-cover object-top"} />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div className="mt-6">
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className={cn(
            "group/gallery relative block overflow-hidden rounded-[24px] border border-white/10 bg-slate-900/40",
            isPortrait ? "mx-auto aspect-[9/16] w-full max-w-[240px]" : "aspect-video w-full"
          )}
          aria-label={`View screenshots for ${project.name}`}
        >
          <Image
            src={images[activeIndex]}
            alt={`${project.name} screenshot ${activeIndex + 1} of ${images.length}`}
            fill
            sizes="(min-width: 1280px) 420px, 90vw"
            className={cn(
              "transition duration-500 group-hover/gallery:scale-[1.03]",
              isPortrait ? "object-contain p-6" : "object-cover object-top"
            )}
            priority={activeIndex === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition group-hover/gallery:opacity-100" />
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-slate-950/70 px-2.5 py-1 text-[11px] font-medium text-white opacity-0 backdrop-blur transition group-hover/gallery:opacity-100">
            <Maximize2 className="h-3 w-3" /> View full size
          </span>
          <span className="absolute bottom-3 right-3 rounded-full border border-white/15 bg-slate-950/70 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur">
            {activeIndex + 1} / {images.length}
          </span>
        </button>

        {images.length > 1 && (
          <div className={cn("mt-2.5 flex gap-2 overflow-x-auto pb-1", isPortrait && "justify-center")}>
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveIndex(i);
                }}
                aria-label={`Show screenshot ${i + 1}`}
                className={cn(
                  "relative flex-shrink-0 overflow-hidden rounded-lg border transition",
                  isPortrait ? "h-16 w-9" : "h-12 w-16",
                  i === activeIndex
                    ? "border-cyan-400/70 ring-2 ring-cyan-400/40"
                    : "border-white/10 opacity-60 hover:opacity-100"
                )}
              >
                <Image src={src} alt="" fill sizes="64px" className={isPortrait ? "object-contain bg-slate-900/60" : "object-cover object-top"} />
              </button>
            ))}
          </div>
        )}
      </div>

      {mounted && createPortal(lightbox, document.body)}
    </>
  );
}
