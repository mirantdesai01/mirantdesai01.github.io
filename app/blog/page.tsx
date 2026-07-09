import type { Metadata } from 'next'
import { ArticleCarousel } from './article-carousel'
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
  const perspectiveOrder = [
    'better-forecasting-for-owner-decisions',
    'signs-you-need-fractional-cfo-support',
    'when-bookkeeping-is-not-enough',
    'fractional-cfo-first-90-days',
  ]

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

  const perspectives = advisoryArticles
    .filter((post) => post.section === 'Perspectives')
    .sort(
      (a, b) =>
        perspectiveOrder.indexOf(a.slug) - perspectiveOrder.indexOf(b.slug)
    )
  const industryInsights = advisoryArticles.filter((post) => post.section === 'Industry Insights')
  const archiveItems = legacyPosts.map((post) => ({
    ...post,
    section: 'Archive',
    description: post.excerpt,
  }))

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

        <ArticleCarousel items={perspectives} />
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

          <ArticleCarousel items={industryInsights} />
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
        <ArticleCarousel items={archiveItems} />
      </section>
    </div>
  )
}
