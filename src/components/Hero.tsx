export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl text-center">
        <p className="font-mono text-sm text-accent mb-6">
          Software Developer · Boksburg, South Africa
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
          I build web apps
          <br />
          and APIs.
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Microsoft Certified: Azure Developer Associate with hands-on
          experience building and deploying applications using React,
          TypeScript, Node.js, Express, PostgreSQL, MongoDB, and Azure.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-md transition-colors"
          >
            View projects
          </a>
          <a
            href="mailto:kabelohlako.kh@gmail.com"
            className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-200 font-medium rounded-md transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
