import Link from 'next/link'
import type { Metadata } from 'next'
import { advisoryArticles } from './advisory-articles'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Articles by Mirant Desai on business strategy, financial planning, entrepreneurship, AI, and product development.',
  alternates: {
    canonical: '/blog/',
  },
}

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime?: number
  tags?: string[]
}

export default function Blog() {
  const legacyPosts: BlogPost[] = [
    {
      slug: '60-day-sprint-planai',
      title: 'The 60-Day Sprint at PlanAI: Building the Product Foundation for EdTech B2C and Enterprise AI',
      excerpt: "A review of the product priorities and architectural decisions behind PlanAI's 60-day development sprint for education and enterprise applications.",
      date: 'April 26, 2026',
      readTime: 5,
      tags: ['PlanAI', 'Product', 'Strategy', 'Development']
    },
    {
      slug: 'annual-plan-startup-journey',
      title: 'Your First Year with PlanAI: A 12-Month Startup Roadmap',
      excerpt: "A structured 12-month roadmap for moving from market validation and planning to operational readiness and product integration.",
      date: 'March 30, 2026',
      readTime: 5,
      tags: ['PlanAI', 'Startup', 'Product', 'Strategy']
    },
    {
      slug: 'planai-collaboration-branching',
      title: "PlanAI's Collaboration & Branching Product Feature",
      excerpt: "An examination of how collaboration and branching can help teams evaluate alternatives while maintaining structure and continuity.",
      date: 'March 29, 2026',
      readTime: 2,
      tags: ['PlanAI', 'Product', 'Collaboration', 'Strategic Planning']
    }
  ]

  const perspectives = advisoryArticles.filter((post) => post.section === 'Perspectives')
  const industryInsights = advisoryArticles.filter((post) => post.section === 'Industry Insights')

  return (
    <div className="-mx-6 -mt-12 overflow-hidden">
      <section className="border-b border-white/10 bg-[#081722] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d3bd87]">
            Perspectives · Industry Insights
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
            Financial guidance for owners and growing businesses.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Practical articles on fractional CFO advisory, financial planning,
            forecasting, profitability, capital decisions, and industry-specific
            financial priorities for growing businesses.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1f6670]">
              Perspectives
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#10202a] md:text-[44px]">
              CFO-level thinking for owner-led decisions.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
            These articles focus on the practical moments when a business needs
            more than accounting history: cash planning, forecasting, management
            reporting, and disciplined decision support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {perspectives.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex min-h-[360px] flex-col border-t border-slate-300 pt-7 transition hover:border-[#1f6670]"
            >
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-[#1f6670]">
                <span>{post.section}</span>
                <span>{post.readTime} min</span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.025em] text-[#10202a] transition-colors group-hover:text-[#1f6670]">
                {post.title}
              </h3>
              <p className="mt-5 leading-7 text-slate-600">{post.description}</p>
              <div className="mt-auto flex flex-wrap items-center gap-2 pt-8 text-sm text-slate-500">
                <time>{post.date}</time>
                <span aria-hidden="true">•</span>
                <span>Read article</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f6f4ef]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1f6670]">
                Industry Insights
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#10202a] md:text-[44px]">
                Financial priorities vary by operating model.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
              Industry-specific notes on where fractional CFO support can help
              owners see profitability, cash needs, risk, and growth capacity more clearly.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {industryInsights.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex min-h-[360px] flex-col border-t border-slate-300 pt-7 transition hover:border-[#1f6670]"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-[#1f6670]">
                  <span>{post.section}</span>
                  <span>{post.readTime} min</span>
                </div>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.025em] text-[#10202a] transition-colors group-hover:text-[#1f6670]">
                  {post.title}
                </h3>
                <p className="mt-5 leading-7 text-slate-600">{post.description}</p>
                <div className="mt-auto flex flex-wrap items-center gap-2 pt-8 text-sm text-slate-500">
                  <time>{post.date}</time>
                  <span aria-hidden="true">•</span>
                  <span>Read article</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 md:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1f6670]">
            Product and strategy archive
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#10202a]">
            Additional writing.
          </h2>
        </div>
        <div className="mt-10 grid gap-5">
          {legacyPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group border-t border-slate-300 py-6 transition hover:border-[#1f6670]"
            >
              <h3 className="text-2xl font-semibold tracking-[-0.025em] text-[#10202a] transition-colors group-hover:text-[#1f6670]">
                {post.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <time>{post.date}</time>
                {post.readTime && <span>{post.readTime} min read</span>}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
