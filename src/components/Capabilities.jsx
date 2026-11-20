import { capabilities } from "../data";

export default function Capabilities() {
  return (
    <section id="strengths" className="sect mt-14 border-t border-line">
      <div className="wrap">
        <h2 className="text-3xl font-extrabold">What I can do for your team</h2>
        <p className="mt-3 max-w-2xl text-steel">Each strength below comes from production work at XCMG, with the project where I used it.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <article key={c.title} className="panel flex flex-col p-6">
              <h3 className="text-xl font-bold">{c.title}</h3>
              <p className="mt-3 flex-1 text-steel">{c.text}</p>
              <p className="mt-5 border-t border-line pt-3 text-sm font-medium">{c.proof}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
