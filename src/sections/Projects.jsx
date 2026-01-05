import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Github, Calendar, TrendingUp, Code2, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";

const projects = [
  {
    title: "IoT Installation & Revenue Dashboard",
    // company: "XCMG / Schwing Stetter",
    duration: "Jun 2022 – Dec 2022",
    github: "https://github.com/Sabarish17-react/automation",
    tech: ["IoT", "Analytics", "Dashboards", "Excel Export"],
    context:
      "Built a centralized analytics dashboard to track IoT installations, renewals, non-renewals, and revenue across OEM machines, enabling leadership to monitor profitability and customer retention.",
    ownership: [
      "Designed reusable React dashboard components",
      "Integrated analytics APIs using Axios",
      "Built interactive visualizations with Apache ECharts",
      "Implemented Excel export for management reporting",
    ],
    technicalDepth:
      "Improved component reusability and optimized data fetching patterns to reduce unnecessary re-renders and API calls.",
    impact: [
      "25% performance improvement",
      "30+ internal users",
      "Accurate IoT revenue tracking",
    ],
  },
  {
    title: "IoT Live Data & Customer Dashboard",
    // company: "XCMG / Schwing Stetter",
    duration: "Feb 2023 – Oct 2023",
    github: "https://github.com/Sabarish17-react/IIot_Customer-Dashboard",
    tech: ["IoT", "Real-Time Data", "Redux", "Maps"],
    context:
      "Developed a real-time IoT monitoring platform providing live machine health, GPS tracking, and service alerts for OEMs, dealers, and customers.",
    ownership: [
      "Built real-time dashboards for machine metrics",
      "Integrated GPS tracking using Leaflet",
      "Implemented Redux Toolkit for global state",
      "Created role-based dashboards for users",
    ],
    technicalDepth:
      "Handled frequent API polling and optimized Redux state slices to minimize unnecessary UI updates.",
    impact: [
      "Smooth real-time updates",
      "Improved maintenance planning",
      "Adopted by OEMs & dealers",
    ],
  },
  {
    title: "ISO Internal Audit Management System",
    // company: "Enterprise Internal Tool",
    duration: "Nov 2023 – Mar 2024",
    github:
      "https://github.com/Sabarish17-react/ISO-Internal-Audit-Managing-System",
    tech: ["RBAC", "Audits", "JWT", "PDF Reports"],

    context:
      "Created a web-based platform to automate internal ISO audits, documentation, and compliance tracking across departments.",
    ownership: [
      "Built audit workflows and scheduling",
      "Implemented role-based access control",
      "Integrated PDF upload/download",
      "Developed audit analytics dashboards",
    ],
    technicalDepth:
      "Ensured secure access using JWT authentication and maintained consistent PDF formatting across audit reports.",
    impact: [
      "60% reduction in manual coordination",
      "Improved audit consistency",
      "Real-time compliance tracking",
    ],
  },
  {
    title: "Concrete Production & Management System",
    // company: "Concrete Batching Operations",
    duration: "Jun 2024 – Sep 2024",
    github: "https://github.com/Sabarish17-react/Concrete_management_tool",
    tech: ["Production Systems", "Redux", "Approvals", "Analytics"],
    context:
      "Developed a production management system connecting plant operators, site managers, and admins to streamline concrete ordering and production workflows.",
    ownership: [
      "Designed multi-role dashboards",
      "Implemented approval workflows",
      "Built production analytics dashboards",
      "Integrated PDF reporting",
    ],
    technicalDepth:
      "Used Redux Toolkit to synchronize real-time production data across multiple roles efficiently.",
    impact: [
      "Reduced production downtime",
      "Automated approvals",
      "Improved operational transparency",
    ],
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative pt-16 pb-19 scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <p className="text-primary text-xs tracking-widest mb-2">PROJECTS</p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Projects I Owned and Delivered in Production
          </h2>

          <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xl">
            From requirement analysis to deployment, I’ve taken full ownership
            of frontend delivery — ensuring performance, reliability, and
            long-term maintainability.
          </p>
        </motion.div>

        {/* ================= DESKTOP TIMELINE ================= */}
        <div className="hidden md:flex gap-10">
          {/* Timeline */}
          <div className="relative w-12 flex justify-center">
            <div className="absolute top-0 h-full w-[2px] bg-white/15" />
            <motion.div
              style={{ height }}
              className="absolute top-0 w-[2px] bg-primary"
            />
          </div>

          {/* Desktop Content */}
          <div className="flex-1">
            {projects.map((p, index) => (
              <DesktopProjectCard key={index} project={p} />
            ))}
          </div>
        </div>

        {/* ================= MOBILE ACCORDION ================= */}
        <div className="md:hidden space-y-6">
          {projects.map((p, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl overflow-hidden"
              >
                {/* Compact Header */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full text-left p-5"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-[1.35rem] sm:text-[1.5rem] font-semibold tracking-tight leading-snug">
                        {p.title}
                      </h3>
                      {/* <p className="mt-1 text-sm text-primary font-medium">
                        {p.company}
                      </p> */}

                      <p className="mt-1 flex items-center gap-2 text-xs text-white/45">
                        <Calendar size={13} />
                        {p.duration}
                      </p>

                      <p className="mt-3 text-xs text-white/65">{p.summary}</p>
                    </div>

                    <ChevronDown
                      size={18}
                      className={`mt-1 transition-transform ${
                        isOpen ? "rotate-180 text-primary" : "text-white/50"
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="px-5 pb-6"
                    >
                      <ProjectDetails project={p} hideHeader />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

/* ---------------- SUB COMPONENTS ---------------- */

const DesktopProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-7 mb-16"
  >
    <div className="absolute -left-[3.1rem] top-8 w-4 h-4 rounded-full bg-primary border-4 border-black" />
    <ProjectDetails project={project} />
  </motion.div>
);
const ProjectDetails = ({ project, hideHeader = false }) => (
  <>
    {!hideHeader && (
      <div className="flex justify-between flex-wrap gap-4">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          {/* <p className="text-sm text-primary">{project.company}</p> */}
          <p className="mt-1 flex items-center gap-2 text-xs text-white/50">
            <Calendar size={13} />
            {project.duration}
          </p>
        </div>

        <a
          href={project.github}
          target="_blank"
          className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm text-primary hover:bg-primary hover:text-black transition"
        >
          <Github size={16} />
          GitHub
        </a>
      </div>
    )}

    {/* Tech */}
    <div className="mt-4 flex flex-wrap gap-2">
      {project.tech.map((t, i) => (
        <span
          className="
    text-[11px]
    px-3 py-1
    rounded-full
    border border-white/15
    bg-white/5
    text-white/60
    hover:text-primary hover:border-primary/40
    transition
  "
        >
          {t}
        </span>
      ))}
    </div>
    {/* Mobile GitHub Button */}
    {hideHeader && (
      <a
        href={project.github}
        target="_blank"
        className="
      mt-4
      inline-flex
      items-center
      gap-2
      rounded-lg
      border border-primary/40
      bg-primary/10
      px-4
      py-2
      text-sm
      text-primary
      hover:bg-primary hover:text-black
      transition
    "
      >
        <Github size={16} />
        GitHub
      </a>
    )}

    <Section title="Business Context">{project.context}</Section>

    <Section title="What I Built" icon={<Code2 size={14} />}>
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
        {project.ownership.map((o, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-primary">•</span>
            <span>{o}</span>
          </li>
        ))}
      </ul>
    </Section>

    <Section title="Technical Depth">{project.technicalDepth}</Section>

    <Section title="Business Impact" icon={<TrendingUp size={14} />}>
      <div className="flex flex-wrap gap-3 mt-1">
        {project.impact.map((i, idx) => (
          <div
            key={idx}
            className="
        rounded-lg
        border border-primary/30
        bg-primary/10
        px-3 py-1.5
        text-xs font-medium text-primary
      "
          >
            {i}
          </div>
        ))}
      </div>
    </Section>
  </>
);

const Section = ({ title, icon, children }) => (
  <div className="mt-7">
    <p className="flex items-center gap-2 text-[11px] tracking-widest text-white/60 mb-2">
      {icon}
      {title.toUpperCase()}
    </p>
    <div className="text-[0.95rem] text-white/75 leading-[1.75]">
      {children}
    </div>
  </div>
);
