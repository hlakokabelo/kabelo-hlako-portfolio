export default function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <p className="section-subtitle">
        Academic background and current study status.
      </p>

      <div className="space-y-6">
        <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-6">
          <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold text-white">
              BSc in Information Technology in Computer Science and Informatics
            </h3>

            <span className="font-mono text-xs text-slate-500">
              2019 – Studies paused
            </span>
          </div>

          <p className="mb-3 text-slate-400">University of Johannesburg</p>

          <ul className="space-y-1.5 text-sm text-slate-400">
            <li>One module remaining toward completion of the degree</li>
            <li>
              Coursework includes data structures, algorithms, databases,
              operating systems, software development, networking, and
              cybersecurity
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-6">
          <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-semibold text-white">
              National Senior Certificate
            </h3>

            <span className="font-mono text-xs text-slate-500">2018</span>
          </div>

          <p className="mb-3 text-slate-400">Villa Liza Secondary School</p>

          <p className="text-sm text-slate-400">
            Mathematics: <span className="text-slate-300">76%</span>
          </p>
        </div>
      </div>
    </section>
  );
}
