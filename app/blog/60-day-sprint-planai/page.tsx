import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 60-Day Sprint at PlanAI",
  description: "How PlanAI's focused 60-day sprint established the product foundation for education and enterprise AI applications.",
  alternates: {
    canonical: "/blog/60-day-sprint-planai/",
  },
};

export default function BlogPost() {
  return (
    <article className="max-w-3xl mx-auto prose prose-lg">
      <h1>The 60-Day Sprint at PlanAI: Building the Product Foundation for EdTech B2C and Enterprise AI</h1>

      <div className="text-gray-600 mb-8 text-sm">
        Read on Medium · 5 min read
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
        <p className="text-gray-700 mb-4">
          This article explores how PlanAI&apos;s concentrated 60-day development sprint created the architectural and product foundation necessary to serve both B2C education customers and enterprise AI applications simultaneously.
        </p>
        <p className="text-gray-700 mb-4">
          The sprint focused on building core platform capabilities, establishing data infrastructure, and creating the flexibility needed to adapt to diverse market requirements while maintaining system coherence.
        </p>
        <a
          href="https://medium.com/@desaimirant9/the-60-day-sprint-at-planai-building-the-product-foundation-for-ed-tech-b2c-and-enterprise-ai-af37aedc2021"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Read Full Article on Medium →
        </a>
      </div>

      <h2>Key Topics Covered</h2>
      <ul>
        <li>Sprint planning and execution strategy</li>
        <li>Architectural decisions for dual-market approach</li>
        <li>Building the product foundation for scalability</li>
        <li>Balancing B2C education and enterprise AI requirements</li>
        <li>Team coordination and development workflow</li>
      </ul>

      <hr className="my-8 border-gray-200" />

      <p className="text-sm text-gray-600">
        Originally published on{" "}
        <a
          href="https://medium.com/@desaimirant9/the-60-day-sprint-at-planai-building-the-product-foundation-for-ed-tech-b2c-and-enterprise-ai-af37aedc2021"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700"
        >
          Medium
        </a>
      </p>
    </article>
  );
}
