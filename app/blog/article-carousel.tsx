"use client";

import Link from "next/link";
import { useRef } from "react";

export type ArticleCarouselItem = {
  slug: string;
  section: string;
  title: string;
  description: string;
  date: string;
  readTime?: number;
};

type ArticleCarouselProps = {
  items: ArticleCarouselItem[];
};

export function ArticleCarousel({ items }: ArticleCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const distance = Math.min(scroller.clientWidth * 0.86, 860);
    scroller.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  }

  return (
    <div className="mt-12">
      <div className="mb-5 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Scroll articles left"
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 bg-white text-xl leading-none text-[#10202a] shadow-sm transition hover:border-[#1f6670] hover:text-[#1f6670]"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Scroll articles right"
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-300 bg-white text-xl leading-none text-[#10202a] shadow-sm transition hover:border-[#1f6670] hover:text-[#1f6670]"
        >
          →
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 scroll-smooth sm:-mx-8 sm:px-8"
      >
        {items.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex min-h-[390px] w-[84vw] max-w-[390px] shrink-0 snap-start flex-col rounded-lg border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-[#1f6670] hover:shadow-md md:w-[360px] lg:w-[380px]"
          >
            <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#1f6670]">
              <span>{post.section}</span>
              {post.readTime && <span>{post.readTime} min</span>}
            </div>
            <h3 className="mt-8 text-2xl font-semibold tracking-[-0.025em] text-[#10202a] transition-colors group-hover:text-[#1f6670]">
              {post.title}
            </h3>
            <p className="mt-5 leading-7 text-slate-600">{post.description}</p>
            <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-slate-200 pt-6 text-sm text-slate-500">
              <time>{post.date}</time>
            </div>
            <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-4 py-2.5 text-sm font-semibold text-[#10202a] transition group-hover:bg-slate-200 group-hover:text-[#1f6670]">
              Read article <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
