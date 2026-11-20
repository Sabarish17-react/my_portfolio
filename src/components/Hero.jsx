import { Download, Mail, Linkedin } from "lucide-react";
import { profile, facts, yearsOfExperience } from "../data";

export default function Hero() {
  const years = yearsOfExperience();

  return (
    <section id="top" className="pt-16 sm:pt-20">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-1.5 text-sm">
            <span className="live-dot h-2 w-2 rounded-full bg-emerald-500" />{" "}
            Open to new opportunities
          </p>
          <h1 className="text-5xl font-extrabold sm:text-6xl">Sabarisan S</h1>
          <p className="mt-3 font-display text-2xl font-bold text-steel">
            React.js Developer | Frontend Engineer
          </p>
          <p className="mt-6 max-w-xl text-lg">
            I build scalable, production-grade web applications with React.js,
            Redux Toolkit and modern JavaScript. For {years}+ years at XCMG I
            have delivered enterprise dashboards, real-time data visualization
            and role-based access systems for Industrial IoT and
            business-critical platforms.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={profile.resume} download className="btn btn-signal">
              <Download size={18} /> Download resume
            </a>
            <a href="#contact" className="btn btn-line">
              <Mail size={18} /> Contact me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-line"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[11rem] sm:max-w-[18rem] lg:mx-0 lg:justify-self-end">
          <div
            className="absolute -bottom-2 -right-2 h-full w-full rounded-xl bg-signal"
            aria-hidden="true"
          />
          <img
            src="/photo.jpg"
            alt="Portrait of Sabarisan S"
            width="400"
            height="400"
            className="relative aspect-square w-full rounded-xl border border-ink/10 object-cover"
          />
        </div>
      </div>
      <div className="wrap mt-14">
        <dl className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([k, v]) => (
            <div key={k} className="bg-panel p-5">
              <dt className="text-sm text-steel">{k}</dt>
              <dd className="mt-1 font-display text-lg font-bold">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
