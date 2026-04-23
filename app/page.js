const interests = [
  "Software that solves real problems instead of just looking impressive",
  "AI, automation, and product design that make work more efficient",
  "Learning by building, testing ideas quickly, and improving from feedback",
];

const hobbies = [
  "Exploring new tech and trying out tools that sharpen how I work",
  "Reading about business, growth, and how people build durable careers",
  "Turning loose ideas into structured plans, systems, and side projects",
];

const nextSteps = [
  "Build stronger full-stack skills by shipping projects end to end",
  "Invest more time in AI-enabled products and practical automation",
  "Use this period intentionally to create work, learn fast, and open new opportunities",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Mirant Desai</p>
        <h1>
          I am focused on building a thoughtful, useful, and ambitious next chapter.
        </h1>
        <p className="lede">
          I am interested in technology, problem-solving, and creating a life
          where my time goes toward meaningful work. Right now, I am using this
          space to keep track of what I care about, what I enjoy, and what I
          want to build next.
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
          <h2>Spend my time building skills, clarity, and momentum.</h2>
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
