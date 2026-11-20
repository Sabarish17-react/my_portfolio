import { Github } from "lucide-react";
import { projects } from "../data";

function Card({ p }) {
  return (
    <article className={`panel flex flex-col p-6 ${p.featured ? "lg:col-span-2 border-l-4 !border-l-signal" : ""}`}>
      <span className="text-sm font-medium text-steel">{p.tag}</span>
      <h3 className="mt-1 text-2xl font-bold">{p.title}</h3>
      <p className="mt-4 text-sm font-bold">What it does</p>
      <p className="max-w-2xl text-steel">{p.text}</p>
      <p className="mt-4 text-sm font-bold">Result</p>
      <ul className="space-y-1 text-sm">
        {p.impact.map((i) => <li key={i} className="flex gap-2"><span className="text-signal">●</span>{i}</li>)}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="chip">{t}</span>)}</div>
      {p.github && (
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold hover:text-steel">
          <Github size={16} /> View code on GitHub
        </a>
      )}
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="sect border-t border-line">
      <div className="wrap">
        <h2 className="text-3xl font-extrabold">Projects</h2>
        <p className="mt-3 max-w-xl text-steel">Applications and tools I built and maintained at XCMG: IIoT dashboards, enterprise systems and automation.</p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((p) => <Card key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}
