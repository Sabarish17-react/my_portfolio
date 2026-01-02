import { motion } from "framer-motion";
import {
  Layers,
  Gauge,
  ShieldCheck,
  BarChart3,
  Cpu,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Enterprise Frontend",
    desc: "Scalable React systems for OEMs and internal teams",
  },
  {
    icon: Gauge,
    title: "High Performance",
    desc: "Optimized rendering, state & API workflows",
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    desc: "Real-time dashboards, charts & maps",
  },
  {
    icon: Cpu,
    title: "IoT Platforms",
    desc: "Live telemetry, GPS tracking & analytics",
  },
  {
    icon: ShieldCheck,
    title: "RBAC Systems",
    desc: "JWT auth & role-based access control",
  },
  {
    icon: Workflow,
    title: "Clean Architecture",
    desc: "Maintainable, scalable UI systems",
  },
];

const About = () => {
  return (
    <section id="about" className="relative pt-20 pb-18 scroll-mt-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-xs tracking-[0.25em] mb-4">
              ABOUT ME
            </p>

            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight max-w-xl">
              Building scalable frontend systems for real-world business
              applications
            </h2>

            <p className="mt-6 text-[15px] leading-[1.9] text-white/65 max-w-xl">
              I’m a React.js Developer with{" "}
              <span className="text-white font-medium">3.8+ years</span> of
              experience delivering{" "}
              <span className="text-white">
                production-ready enterprise dashboards
              </span>
              , real-time IoT platforms, and secure internal business
              applications.
              <br />
              <br />
              My focus is on{" "}
              <span className="text-white">
                performance, clean UI architecture, and long-term scalability
              </span>
              — building systems that teams rely on in production.
            </p>
          </motion.div>

          {/* RIGHT FEATURES */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="
                  rounded-2xl
                  bg-white/[0.04]
                  p-5
                  border border-white/10
                  hover:border-white/20
                  transition-all
                "
              >
                <item.icon size={18} className="text-primary mb-3" />

                <h3 className="text-sm font-semibold text-white tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-[13px] leading-[1.6] text-white/60">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
