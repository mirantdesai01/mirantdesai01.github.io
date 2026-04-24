const profile = {
  name: "Mirant Desai",
  title: "AI product builder and software developer",
  location: "United States",
  url: "https://mirantdesai01.github.io",
  github: "https://github.com/mirantdesai01",
  medium: "https://medium.com/@desaimirant9",
};

const focusAreas = [
  {
    title: "AI-enabled products",
    text: "Designing practical workflows that use AI to reduce manual work, clarify decisions, and make complex tasks easier to complete.",
  },
  {
    title: "Full-stack software",
    text: "Building web applications from interface to deployment with an emphasis on reliability, fast iteration, and useful product behavior.",
  },
  {
    title: "Business systems",
    text: "Turning loose ideas into structured tools, operating processes, and experiments that can be tested against real-world needs.",
  },
];

const principles = [
  "Useful products beat impressive demos.",
  "Clear systems make better decisions easier.",
  "Fast feedback is the best way to improve both software and strategy.",
];

const buildingNotes = [
  {
    title: "Product architecture for AI workflows",
    text: "I am interested in systems where AI is not a novelty layer, but part of the operating model: routing work, shaping analysis, and helping users move from raw inputs to useful decisions.",
  },
  {
    title: "Engineering decisions that scale",
    text: "My writing and product work often return to the same question: which technical choices make a product easier to operate, debug, extend, and trust as usage grows?",
  },
];

const articles = [
  {
    title: "Building for Modern AI: Why PlanAI Moved from R Workers to R APIs",
    href: "https://medium.com/@desaimirant9/building-for-modern-ai-why-planai-moved-from-r-workers-to-r-apis-a94f5d736e8a",
    description:
      "A technical product note on moving PlanAI toward API-based R services so AI workflows can become more modular, callable, and production-oriented.",
    tags: ["PlanAI", "R APIs", "AI architecture"],
  },
  {
    title: "PlanAI's Collaboration Branching Product Feature",
    href: "https://medium.com/@desaimirant9/planais-collaboration-branching-product-feature-1b2568926f22",
    description:
      "A product feature discussion about collaboration branching and how teams can explore, compare, and develop work without losing structure.",
    tags: ["PlanAI", "Collaboration", "Product design"],
  },
  {
    title: "PlanAI's Serverless API Architecture",
    href: "https://medium.com/@desaimirant9/planais-serverless-api-architecture-dd60fe601557",
    description:
      "A technical architecture note on shaping PlanAI around serverless API patterns for cleaner deployment, scaling, and product integration.",
    tags: ["PlanAI", "Serverless", "API architecture"],
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.url,
  jobTitle: profile.title,
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  sameAs: [profile.github, profile.medium],
  knowsAbout: [
    "Artificial intelligence products",
    "Automation",
    "Full-stack software development",
    "Business technology",
    "Product strategy",
  ],
};

export default function HomePage() {
  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="hero" aria-labelledby="profile-title">
        <div className="hero-copy">
          <p className="eyebrow">{profile.name}</p>
          <h1 id="profile-title">
            AI product builder focused on practical software and business systems.
          </h1>
          <p className="lede">
            I build and refine technology products that connect AI, automation,
            and full-stack software with clear business outcomes. This site is
            the canonical profile for Mirant Desai and a concise view of the
            work I am developing.
          </p>
          <div className="actions" aria-label="Profile links">
            <a className="button primary" href={profile.github}>
              GitHub
            </a>
            <a className="button" href="#focus">
              Focus Areas
            </a>
            <a className="button" href="#writing">
              Writing
            </a>
          </div>
        </div>

        <aside className="profile-panel" aria-label="Profile summary">
          <div className="monogram" aria-hidden="true">
            MD
          </div>
          <dl>
            <div>
              <dt>Role</dt>
              <dd>{profile.title}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Primary themes</dt>
              <dd>AI, automation, software, product strategy</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="intro" aria-label="Professional summary">
        <p>
          My work sits at the intersection of technical execution and business
          clarity: identifying practical problems, shaping usable product flows,
          and building systems that make repeated work easier to manage.
        </p>
      </section>

      <section className="section" id="focus">
        <div className="section-heading">
          <p className="section-label">Focus</p>
          <h2>Areas where I am building depth</h2>
        </div>
        <div className="grid">
          {focusAreas.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="section-label">Working Principles</p>
          <h2>Pragmatic, clear, and execution-oriented.</h2>
        </div>
        <ul className="principles">
          {principles.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section narrative" aria-labelledby="building-title">
        <div className="section-heading">
          <p className="section-label">Current Work</p>
          <h2 id="building-title">Building product depth around PlanAI and applied AI systems</h2>
        </div>
        <div className="narrative-grid">
          {buildingNotes.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section writing" id="writing" aria-labelledby="writing-title">
        <div className="section-heading">
          <p className="section-label">Writing</p>
          <h2 id="writing-title">Technical notes and product thinking</h2>
        </div>
        <div className="article-list">
          {articles.map((article) => (
            <article className="article-card" key={article.href}>
              <div>
                <p className="article-source">Medium</p>
                <h3>
                  <a href={article.href}>{article.title}</a>
                </h3>
                <p>{article.description}</p>
              </div>
              <ul aria-label={`${article.title} topics`}>
                {article.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
