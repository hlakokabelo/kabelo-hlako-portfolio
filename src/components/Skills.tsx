import { skillGroups } from "../data/skill";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">
        Technologies I've used across personal projects, coursework, and
        certifications.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="border border-slate-800 rounded-lg p-5 bg-slate-900/30"
          >
            <h3 className="font-mono text-xs text-accent mb-3 uppercase tracking-wider">
              {group.label}
            </h3>
            <ul className="space-y-1.5 text-sm text-slate-300">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
