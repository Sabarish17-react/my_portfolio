import { skillGroups, yearsOfExperience } from "../data";

export default function About() {
  const years = yearsOfExperience();
  return (
    <section id="about" className="sect border-t border-line">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-extrabold">About me</h2>
            <p className="mt-4 max-w-prose">
              I am a Frontend Engineer with {years}+ of experience at XCMG,
              building enterprise web applications and real-time dashboards for
              Industrial IoT and business platforms.
            </p>
            <p className="mt-4 max-w-prose">
              Alongside React development, I have worked on business process
              automation with Microsoft Power Automate and Dynamics 365, and on
              automated document and report generation. I also work with
              Node.js, Express.js, MongoDB and JWT authentication, and I am
              growing into full-stack development.
            </p>
            <h3 className="mt-8 text-lg font-bold">Education</h3>
            <p className="mt-2 text-steel">
              B.E. Mechatronics Engineering, Rajalakshmi Engineering College,
              Chennai (2019)
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold">Technical skills</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {skillGroups.map((g) => (
                <div key={g.title} className="panel p-5">
                  <h3 className="text-lg font-bold">{g.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
