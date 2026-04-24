const profile = {
  name: "Mirant Desai",
  title: "AI product builder and software developer",
  location: "United States",
  url: "https://mirantdesai01.github.io",
  github: "https://github.com/mirantdesai01",
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
  sameAs: [profile.github],
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
    </main>
  );
}
