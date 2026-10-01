import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const links = [
  {
    label: "Email",
    value: "kabelohlako.kh@gmail.com",
    href: "mailto:kabelohlako.kh@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/hlakokabelo",
    href: "https://github.com/hlakokabelo",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hlakokabelo",
    href: "https://www.linkedin.com/in/hlakokabelo",
    icon: FaLinkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>

      <p className="section-subtitle">
        Open to junior software development, cloud, backend, and full-stack
        opportunities. Available immediately.
      </p>

      <div className="grid max-w-3xl gap-4 sm:grid-cols-3">
        {links.map((l) => {
          const Icon = l.icon;

          return (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group rounded-lg border border-slate-800 bg-slate-900/30 p-5 transition-colors hover:border-accent/60"
            >
              <div className="mb-4 flex items-center justify-between">
                <Icon
                  size={20}
                  className="text-slate-500 transition-colors group-hover:text-accent"
                />

                <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
                  {l.label}
                </p>
              </div>

              <p className="break-all text-sm text-slate-300 transition-colors group-hover:text-accent">
                {l.value}
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
