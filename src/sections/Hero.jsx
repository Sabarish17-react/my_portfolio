import { motion } from "framer-motion";
import photoDp from "@/assets/photoDp.png";
import { ArrowRight, Download, FileText } from "lucide-react";

const skills = [
  "React.js",
  "Redux Toolkit",
  "Material UI",
  "JavaScript (ES6+)",
  "REST APIs",
  "Axios",
  "Apache ECharts",
  "Leaflet Maps",
  "JWT Authentication",
  "Role-Based Access",
  "Performance Optimization",
  "Enterprise Dashboards",
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center pt-20 pb-20 scroll-mt-28"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="section grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <motion.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* Name */}
          <h1 className="text-[2.2rem] sm:text-[2.8rem] font-semibold tracking-tight">
            Sabarisan S
          </h1>

          <p
            className="
  mt-3 text-primary
  text-sm sm:text-base
  font-medium tracking-wide
"
          >
            React.js Developer · Frontend Engineer
          </p>

          <p
            className="
  mt-5 max-w-xl
  text-sm sm:text-[0.95rem]
  text-white/65
  leading-[1.75]
"
          >
            Frontend engineer with{" "}
            <span className="text-white font-medium">3.8+ years</span> of
            experience building enterprise-scale dashboards, real-time IoT
            platforms, and role-based business systems, focused on performance
            and clean UI architecture.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-5">
            {/* PRIMARY CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="
      group relative inline-flex items-center gap-2
      rounded-xl bg-primary px-7 py-3.5
      text-sm font-medium text-white
      shadow-lg shadow-primary/30
      hover:shadow-primary/50
      transition-all
      overflow-hidden
    "
            >
              {/* Glow overlay */}
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <span className="relative z-10">Open to Opportunities</span>

              <ArrowRight
                size={16}
                className="relative z-10 transition-transform group-hover:translate-x-1"
              />
            </motion.a>

            {/* SECONDARY CTA */}
            <motion.a
              href="/sabarisan_s.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="
    inline-flex items-center gap-2
    rounded-xl
    bg-primary
    px-7 py-3.5
    text-sm font-medium
    text-black
    transition-all
  "
            >
              <FileText size={16} />
              View Resume
            </motion.a>
          </div>

          {/* Info */}
          <div className="mt-8 flex flex-wrap gap-6 text-xs text-white/55">
            <span>📧 ssabarisan172@gmail.com</span>
            <span>📞 7418520429</span>
            <a
              href="https://linkedin.com/in/sabarisan-s"
              target="_blank"
              className="hover:text-primary transition"
            >
              🔗 LinkedIn
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="order-1 lg:order-2 relative flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {/* Glow */}
          <div className="absolute h-80 w-80 rounded-full bg-primary/30 blur-[120px]" />

          {/* Floating Photo */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 7,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
            <div className="h-56 w-56 md:h-64 md:w-64 rounded-full p-1 bg-gradient-to-br from-primary/50 to-transparent">
              <div className="h-full w-full rounded-full bg-white/5 backdrop-blur-xl border border-white/20 overflow-hidden">
                <img
                  src={photoDp}
                  alt="Sabarisan S"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Name + Role */}
          <div className="mt-6 text-center">
            <p className="text-sm font-medium text-white">Sabarisan S</p>
            <p className="text-xs text-white/60">React · Redux · MUI</p>
          </div>

          {/* Skill Pills */}
          <div className="mt-4 flex flex-wrap justify-center gap-2 max-w-xs">
            {["Enterprise Dashboards", "IoT Platforms", "RBAC Systems"].map(
              (item, index) => (
                <span
                  key={index}
                  className="
                    rounded-full border border-white/15 bg-white/5
                    px-3 py-1 text-[11px] text-white/65
                    backdrop-blur
                    hover:text-primary hover:border-primary/40
                    transition
                  "
                >
                  {item}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
      {/* SKILLS STRIP */}
      <div className="absolute bottom-2 left-0 right-0">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl py-2.5 opacity-70">
            <motion.div
              className="flex gap-8 whitespace-nowrap text-xs text-white/60"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 45,
                ease: "linear",
              }}
            >
              {[...skills, ...skills].map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      {/* SCROLL INDICATOR ⭐ */}
      {/* <motion.div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs">
        ↓ Scroll
      </motion.div> */}
    </section>
  );
};

export default Hero;
