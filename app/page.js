const interests = [
  "Building practical software that helps people work faster",
  "Learning through side projects and rapid experiments",
  "Using AI tools as force multipliers for design, writing, and development",
];

const hobbies = [
  "Exploring new product ideas",
  "Reading about technology, business, and personal growth",
  "Spending time refining workflows and systems that make life simpler",
];

const nextSteps = [
  "Keep shipping small projects that turn ideas into useful products",
  "Go deeper on full-stack development and modern AI workflows",
  "Use this season of time to build a body of work that compounds",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Mirant Desai</p>
        <h1>
          I build, learn, and iterate with a bias toward practical progress.
        </h1>
        <p className="lede">
          This site is a snapshot of what I care about right now: meaningful
          work, steady skill-building, and creating the next set of
          opportunities with intention.
        </p>
      </section>

      <section className="grid">
        <article className="card">
          <h2>Interests</h2>
          <ul>
            {interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h2>Hobbies</h2>
          <ul>
            {hobbies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="focus card focus-card">
        <div>
          <p className="section-label">What I plan to do next</p>
          <h2>Use my time on work that creates momentum.</h2>
        </div>
        <ol>
          {nextSteps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}
