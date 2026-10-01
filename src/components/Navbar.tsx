import { useEffect, useState } from "react";
import {
  FaUser,
  FaCode,
  FaTools,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";

const links = [
  { href: "#about", label: "About", icon: FaUser },
  { href: "#projects", label: "Projects", icon: FaCode },
  { href: "#skills", label: "Skills", icon: FaTools },
  { href: "#education", label: "Education", icon: FaGraduationCap },
  { href: "#contact", label: "Contact", icon: FaEnvelope },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-white transition-colors hover:text-accent"
        >
          kabelo<span className="text-accent">.</span>hlako
        </a>

        <ul className="flex items-center gap-5 text-sm">
          {links.map((l) => {
            const Icon = l.icon;

            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-label={l.label}
                  title={l.label}
                  className="flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                >
                  <Icon className="text-lg" />
                  <span className="hidden md:inline">{l.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="https://github.com/hlakokabelo"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit my GitHub profile"
          className="hidden text-sm text-slate-400 transition-colors hover:text-white sm:inline"
        >
          GitHub ↗
        </a>
      </nav>
    </header>
  );
}
