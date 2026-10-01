export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <p className="section-subtitle">
        A brief background on where I am and what I'm building toward.
      </p>

      <div className="grid gap-12 md:grid-cols-3">
        <div className="space-y-5 leading-relaxed text-slate-300 md:col-span-2">
          <p>
            I'm a developer based in Boksburg, South Africa, with an interest in
            software development, backend systems, cloud technologies, and
            full-stack web development. I work primarily with React, TypeScript,
            Node.js, Express, and SQL databases, and I hold the Microsoft
            Certified: Azure Developer Associate (AZ-204) certification.
          </p>

          <p>
            I've built and deployed several projects, including a Reddit-like
            social platform, a full-stack URL shortener, a REST API for movie
            data, and a job-search utility. Working on these projects has meant
            dealing with frontend and backend development, authentication,
            databases, testing, APIs, and deployment.
          </p>

          <p>
            I previously worked two contracts as a Computer Science Student
            Assistant at the University of Johannesburg, where I assessed
            programming practicals, provided feedback, and helped students
            diagnose problems in their code. That role also made me better at
            reading code, spotting problems, and explaining technical ideas
            clearly.
          </p>

          <p>
            I'm currently looking for junior opportunities in software
            development, backend development, full-stack development, cloud, and
            database-related roles. I'm open to different paths within software
            and cloud, especially roles where I can put what I've learned into
            practice, keep improving, and gain experience working on real-world
            systems.{" "}
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-5">
            <p className="mb-2 font-mono text-xs text-accent">Currently</p>
            <p className="text-sm text-slate-300">
              Building personal projects and expanding my software, cloud, and
              testing skills.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-5">
            <p className="mb-2 font-mono text-xs text-accent">Focus</p>
            <p className="text-sm text-slate-300">
              React, TypeScript, Node.js, Express, PostgreSQL, REST APIs, and
              Azure.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/40 p-5">
            <p className="mb-2 font-mono text-xs text-accent">Location</p>
            <p className="text-sm text-slate-300">
              Boksburg, Gauteng · open to on-site, hybrid, and remote roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
