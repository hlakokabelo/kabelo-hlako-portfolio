import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <h2 className="section-title">Certifications</h2>
      <p className="section-subtitle">
        Microsoft and Signature Academy credentials. Verification links
        available where applicable.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((c) => (
          <div
            key={c.name}
            className="border border-slate-800 rounded-lg p-6 bg-slate-900/30"
          >
            <h3 className="text-base font-semibold text-white mb-1">
              {c.name}
            </h3>
            <p className="text-sm text-slate-400 mb-1">{c.issuer}</p>
            <p className="font-mono text-xs text-slate-500 mb-4">{c.date}</p>

            {c.credentialId && (
              <p className="font-mono text-xs text-slate-600 mb-2">
                ID: {c.credentialId}
              </p>
            )}

            {c.verifyUrl && (
              <a
                href={c.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm link"
              >
                Verify credential ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
