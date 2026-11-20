import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="sect border-t border-line bg-panel">
      <div className="wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-3xl font-extrabold">Work experience</h2>
          <p className="mt-6 font-display text-xl font-bold">Frontend Engineer (React.js Developer)</p>
          <p className="text-steel">XCMG (Xuzhou Construction Machinery Group), Chennai</p>
          <p className="mt-1 text-sm text-steel">April 2022 to present</p>
        </div>
        <div className="space-y-8">
          {experience.map((g) => (
            <div key={g.title}>
              <h3 className="text-lg font-bold">{g.title}</h3>
              <ul className="mt-3 space-y-3">
                {g.items.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-signal" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
