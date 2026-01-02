import { motion } from "framer-motion";
import {
  Briefcase,
  Cpu,
  BarChart3,
  MapPin,
  ShieldCheck,
  Layers,
} from "lucide-react";

const responsibilities = [
  {
    icon: Cpu,
    text: "Delivered multiple production React applications supporting IoT monitoring, internal audits, and operational workflows across business teams.",
  },
  {
    icon: BarChart3,
    text: "Engineered real-time dashboards visualizing machine telemetry, runtime metrics, alerts, and live GPS data.",
  },
  {
    icon: Layers,
    text: "Introduced Redux Toolkit architecture to centralize state, reduce prop-drilling, and improve rendering performance.",
  },
  {
    icon: Briefcase,
    text: "Integrated secure REST APIs with authentication flows, error boundaries, and consistent loading states.",
  },
  {
    icon: ShieldCheck,
    text: "Designed role-based access control systems using JWT to enforce secure, permission-driven UI behavior.",
  },
  {
    icon: MapPin,
    text: "Built analytics views with maps, charts, and automated Excel/PDF exports for operational and management reporting.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative pt-6 md:pt-2 pb-5 scroll-mt-28"
    >
      <div className="section max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10"
        >
          <p className="text-primary text-xs tracking-[0.25em] mb-2">
            EXPERIENCE
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-[2.2rem] font-semibold tracking-tight">
            Professional Experience
          </h2>

          <p className="mt-4 text-[0.95rem] sm:text-base leading-[1.8] text-white/65 leading-[1.75]">
            Hands-on experience delivering complex frontend systems used daily
            by internal teams, OEM stakeholders, and business users.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[22px] top-0 h-full w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative md:pl-20"
          >
            {/* Timeline Icon */}
            <div className="absolute left-0 top-2">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/30 blur-md" />
                <div className="relative h-11 w-11 rounded-full border border-white/25 bg-white/10 backdrop-blur flex items-center justify-center text-primary">
                  <Briefcase size={18} />
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <div
              className="
                group
                rounded-2xl
                border border-white/15
                bg-white/[0.045]
                backdrop-blur-xl
                p-6 sm:p-8
                transition-all duration-300
                hover:border-white/30
              "
            >
              {/* Role */}
              <h3 className="text-[0.95rem] sm:text-base font-semibold text-white tracking-tight">
                React.js Developer
              </h3>

              {/* Company */}
              <p className="mt-1 text-xs sm:text-sm text-primary/90">
                XCMG India Pvt. Ltd.
                <span className="mx-2 text-white/30">•</span>
                Enterprise Frontend & IoT Systems
                <span className="mx-2 text-white/30">•</span>
                <span className="text-white/45">2022 – Present</span>
              </p>

              {/* Divider */}
              <div className="mt-4 h-px w-full bg-white/10 group-hover:bg-white/20 transition-colors" />

              {/* Responsibilities */}
              <div className="mt-6 space-y-5">
                {responsibilities.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex gap-4"
                  >
                    <div
                      className="
                        mt-[2px]
                        h-9 w-9
                        rounded-xl
                        border border-white/20
                        bg-white/10
                        flex items-center justify-center
                        text-primary
                        shrink-0
                      "
                    >
                      <item.icon size={15} />
                    </div>

                    <p className="text-[0.95rem] sm:text-base text-white/70 leading-[1.75]">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
