const stories = [
  {
    title: "Building practical AI products",
    status: "Current focus",
    text: "My work centers on turning AI from an impressive demo into usable product infrastructure: decision workflows, automation systems, and interfaces that help teams move faster with clearer judgment.",
  },
  {
    title: "The 60-day PlanAI product sprint",
    status: "Product story",
    text: "A focused build cycle around PlanAI shaped the product foundation for educational technology and enterprise AI use cases, with attention on architecture, execution speed, and product clarity.",
    href: "https://medium.com/@desaimirant9/the-60-day-sprint-at-planai-building-the-product-foundation-for-ed-tech-b2c-and-enterprise-ai-af37aedc2021",
  },
  {
    title: "Moving PlanAI toward API-based R services",
    status: "Technical story",
    text: "One thread of the work has been modernizing AI and analytics workflows so R-based capabilities can be called through cleaner APIs and composed into production product flows.",
    href: "https://medium.com/@desaimirant9/building-for-modern-ai-why-planai-moved-from-r-workers-to-r-apis-a94f5d736e8a",
  },
  {
    title: "Designing collaboration branching",
    status: "Product design",
    text: "Collaboration branching explores how teams can compare directions, develop alternatives, and preserve structure while still moving quickly through complex work.",
    href: "https://medium.com/@desaimirant9/planais-collaboration-branching-product-feature-1b2568926f22",
  },
  {
    title: "Shaping serverless product architecture",
    status: "Architecture",
    text: "The serverless API direction reflects a practical approach to scaling product systems: smaller deployment surfaces, clearer boundaries, and services designed for iteration.",
    href: "https://medium.com/@desaimirant9/planais-serverless-api-architecture-dd60fe601557",
  },
];

export const metadata = {
  title: "Stories",
  description:
    "A collection of current stories about Mirant Desai's AI product work, PlanAI, automation, product design, and software architecture.",
};

export default function StoriesPage() {
  return (
    <main className="page-shell">
      <nav className="page-nav" aria-label="Page navigation">
        <a href="/">Home</a>
      </nav>

      <section className="hero story-hero" aria-labelledby="stories-title">
        <div className="hero-copy">
          <p className="eyebrow">Mirant Desai</p>
          <h1 id="stories-title">Notable stories about my work</h1>
          <p className="lede">
            A concise list of current product, architecture, and AI stories that
            describe what I am building, thinking through, and publishing.
          </p>
        </div>
      </section>

      <section className="section story-list" aria-label="Stories">
        {stories.map((story) => (
          <article className="story-card" key={story.title}>
            <p className="story-meta">{story.status}</p>
            <h2>
              {story.href ? <a href={story.href}>{story.title}</a> : story.title}
            </h2>
            <p>{story.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
