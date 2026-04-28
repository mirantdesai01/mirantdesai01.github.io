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
    text: "Engineering AI into core product workflows for decision automation, process optimization, and measurable user value. Integration over novelty.",
  },
  {
    title: "Full-stack software",
    text: "End-to-end product development from architecture through deployment, with focus on code quality, maintainability, and long-term scalability.",
  },
  {
    title: "Business systems",
    text: "Translating strategic vision into operational systems—tools, processes, and feedback loops designed to validate and scale business models.",
  },
];

const principles = [
  "Useful products beat impressive demos.",
  "Clear systems make better decisions easier.",
  "Fast feedback is the best way to improve both software and strategy.",
];

const buildingNotes = [
  {
    title: "AI as operational infrastructure",
    text: "Building systems where AI workflows are foundational, not decorative. Designing for decision routing, analysis shaping, and human-AI interaction at scale.",
  },
  {
    title: "Technical decisions that matter",
    text: "How to choose architecture, frameworks, and patterns that improve debuggability, extensibility, and operational reliability as products mature and scale.",
  },
];

const articles = [
  {
    title: "The 60-Day Sprint at PlanAI: Building the Product Foundation for EdTech B2C and Enterprise AI",
    href: "https://medium.com/@desaimirant9/the-60-day-sprint-at-planai-building-the-product-foundation-for-ed-tech-b2c-and-enterprise-ai-af37aedc2021",
    description:
      "A detailed account of the 60-day product sprint at PlanAI, covering the engineering decisions, product priorities, and architectural choices made to build a foundation supporting both educational technology and enterprise AI applications.",
    tags: ["PlanAI", "Product development", "EdTech", "Enterprise AI"],
  },
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
  "@graph": [
    {
      "@type": "Person",
      "@id": `${profile.url}/#person`,
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
    },
    {
      "@type": "WebSite",
      "@id": `${profile.url}/#website`,
      name: "Mirant Desai",
      url: profile.url,
      publisher: {
        "@id": `${profile.url}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${profile.url}/#profile-page`,
      name: "Mirant Desai official profile",
      url: profile.url,
      about: {
        "@id": `${profile.url}/#person`,
      },
      mainEntity: {
        "@id": `${profile.url}/#person`,
      },
      isPartOf: {
        "@id": `${profile.url}/#website`,
      },
      inLanguage: "en-US",
    },
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
            Building practical AI products and scalable software systems
          </h1>
          <p className="lede">
            I specialize in product architecture and engineering execution where AI, automation, and full-stack development drive measurable business impact. This site represents my professional work and core focuses.
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
          I focus on translating complex technical requirements into streamlined products that solve real business problems. My work bridges product strategy and engineering to create systems that scale with clarity and reliability.
        </p>
      </section>

      <section className="section" id="focus">
        <div className="section-heading">
          <p className="section-label">Focus Areas</p>
          <h2>Core expertise and specialization</h2>
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
          <p className="section-label">Current Focus</p>
          <h2 id="building-title">Product development and architectural design</h2>
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
