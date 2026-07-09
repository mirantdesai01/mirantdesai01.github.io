import Link from "next/link";
import { AdvisoryArticle, conversationUrl } from "./advisory-articles";

type AdvisoryArticlePageProps = {
  article: AdvisoryArticle;
};

export function AdvisoryArticlePage({ article }: AdvisoryArticlePageProps) {
  return (
    <article className="-mx-6 -mt-12 overflow-hidden">
      <section className="border-b border-white/10 bg-[#081722] text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 md:py-24">
          <Link
            href="/blog"
            className="text-sm font-semibold text-[#d3bd87] transition hover:text-[#e0cfaa]"
          >
            Insights
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-[#d3bd87]">
            {article.section}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
            {article.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            {article.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400">
            <time>{article.date}</time>
            <span>{article.readTime} min read</span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 md:py-20">
        <div className="space-y-6 text-[19px] leading-8 text-slate-700">
          {article.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-14 space-y-14">
          {article.sections.map((section) => (
            <section key={section.heading} className="border-t border-slate-300 pt-8">
              <h2 className="text-3xl font-semibold tracking-[-0.035em] text-[#10202a]">
                {section.heading}
              </h2>
              <div className="mt-5 space-y-5 text-[18px] leading-8 text-slate-700">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-7 grid gap-3 border-l-2 border-[#d3bd87] pl-6 text-[17px] leading-7 text-slate-700 sm:grid-cols-2">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-16 border-y border-slate-300 py-10">
          <p className="text-xl leading-8 text-slate-800">{article.closing}</p>
        </div>

        <section className="mt-14 rounded-[24px] bg-[#102b36] px-7 py-10 text-white md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d3bd87]">
            Initial conversation
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em]">
            Discuss whether fractional CFO support fits your next decision.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Schedule a 30-minute conversation to review your current priorities,
            financial visibility, and the type of advisory support that may be useful.
          </p>
          <a
            href={conversationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-[#d3bd87] px-6 py-3.5 text-sm font-semibold text-[#10202a] transition hover:bg-[#e0cfaa]"
          >
            Schedule a conversation
          </a>
        </section>
      </section>
    </article>
  );
}
