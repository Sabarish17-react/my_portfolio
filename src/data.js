const START = { year: 2022, month: 3 }; // April 2022 (month is 0-based)

export function yearsOfExperience(now = new Date()) {
  let years = now.getFullYear() - START.year;
  if (now.getMonth() < START.month) years -= 1;
  return Math.max(years, 0);
}

export const profile = {
  name: "Sabarisan S",
  role: "React Developer",
  email: "ssabarisan172@gmail.com",
  phone: "+91 74185 20429",
  phoneRaw: "917418520429",
  location: "Chennai, India",
  linkedin: "https://www.linkedin.com/in/sabarisan-s",
  github: "https://github.com/Sabarish17-react",
  resume: "/Sabarisan_S_Resume.pdf",
};

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Redux Toolkit",
      "JavaScript (ES6+)",
      "React Router",
      "Material UI",
      "HTML5",
      "CSS3",
      "Responsive Design",
    ],
  },
  {
    title: "Data and maps",
    items: ["Apache ECharts", "Chart.js", "D3.js (basic)", "Leaflet.js"],
  },
  {
    title: "APIs and security",
    items: [
      "REST APIs",
      "Axios",
      "JWT Authentication",
      "Role-Based Access Control",
    ],
  },
  {
    title: "Performance",
    items: [
      "Lazy loading",
      "Code splitting",
      "Caching",
      "Error boundaries",
      "Reusable components",
    ],
  },
  {
    title: "Automation",
    items: ["Power Automate", "Dynamics 365", "Excel to PDF reports"],
  },
  {
    title: "Learning next",
    items: ["Node.js", "Express.js", "MongoDB", "SQL", "TypeScript"],
  },
];

export const experience = [
  {
    title: "Frontend development",
    items: [
      "Designed and developed scalable React web applications using React.js, JavaScript (ES6+), Redux Toolkit and Material UI.",
      "Built real-time dashboards by integrating RESTful APIs with interactive charts and tables to support operational decision-making.",
      "Developed reusable, modular components and custom React hooks, reducing duplication and improving maintainability.",
      "Improved load times on data-heavy dashboards with lazy loading, code splitting, caching and efficient state management.",
    ],
  },
  {
    title: "Security and access control",
    items: [
      "Implemented Role-Based Access Control (RBAC) and JWT authentication flows to secure access across user roles.",
    ],
  },
  {
    title: "Industrial IoT platform",
    items: [
      "Integrated Leaflet.js map visualizations to track machine locations and operational status in real time.",
      "Monitored and maintained the XREA portal, tracking live machine parameters to support proactive maintenance and fault detection.",
    ],
  },
  {
    title: "Process and report automation",
    items: [
      "Designed automated email notification workflows with Microsoft Power Automate and Dynamics 365, removing manual follow-ups.",
      "Built a report generation tool that turns uploaded Excel service order data into structured PDF reports with embedded photo attachments.",
    ],
  },
  {
    title: "Collaboration",
    items: [
      "Worked with backend engineers and cross-functional teams to align frontend architecture with API design and backend workflows.",
      "Gained hands-on exposure to Node.js, Express.js and MongoDB while integrating and consuming APIs.",
    ],
  },
];

export const projects = [
  {
    title: "Customer Cloud Dashboard",
    tag: "IIoT platform",
    text: "Real-time view of machine health, status and live GPS location. Leaflet maps share Redux state with ECharts panels for utilization, alerts and performance.",
    tech: ["React", "Redux Toolkit", "Leaflet.js", "ECharts"],
    impact: [
      "Handles large datasets with pagination and lazy loading",
      "Used by OEMs, dealers and customers",
    ],
    github: "https://github.com/Sabarish17-react/IIot_Customer-Dashboard",
    featured: true,
  },
  {
    title: "IoT Installation and Revenue Dashboard",
    tag: "Analytics",
    text: "Tracks IoT installations, renewals, non-renewals and revenue across OEM machines, with Excel export for management reports.",
    tech: ["React", "Axios", "ECharts", "Excel export"],
    impact: ["25% performance improvement", "30+ internal users"],
    github: "https://github.com/Sabarish17-react/automation",
  },
  {
    title: "ISO Internal Audit System",
    tag: "Compliance",
    text: "Audit scheduling, documentation and compliance tracking with separate access for auditors, managers and admins.",
    tech: ["React", "MUI", "JWT", "RBAC", "PDF reports"],
    impact: ["60% less manual coordination", "Real-time compliance tracking"],
    github:
      "https://github.com/Sabarish17-react/ISO-Internal-Audit-Managing-System",
  },
  {
    title: "Concrete Production and Management",
    tag: "Operations",
    text: "Connects plant operators, site managers and admins for ordering, approvals, production stages and analytics.",
    tech: ["React", "Redux Toolkit", "REST APIs"],
    impact: ["Automated approvals", "Clearer operational visibility"],
    github: "https://github.com/Sabarish17-react/Concrete_management_tool",
  },
  {
    title: "XREA Portal Monitoring",
    tag: "IIoT platform",
    text: "Watched live machine parameters, alerts and performance metrics on XCMG’s IoT portal to keep data accurate and spot anomalies early.",
    tech: ["React", "ECharts", "REST APIs"],
    impact: ["Faster anomaly detection", "Supports proactive maintenance"],
  },
  {
    title: "Automated Service Report Generator",
    tag: "Automation",
    text: "Reads uploaded Excel service orders and produces structured PDF reports with photo attachments embedded.",
    tech: ["Excel processing", "PDF generation"],
    impact: ["Removes manual report compilation"],
  },
  {
    title: "Email Notification Workflows",
    tag: "Automation",
    text: "Rule-based email triggers in Power Automate on Dynamics 365 record and status changes, replacing manual follow-ups.",
    tech: ["Power Automate", "Dynamics 365"],
    impact: ["Faster response to service alerts"],
  },
];

export const facts = [
  ["Experience", `${yearsOfExperience()}+ years in React.js`],
  ["Current role", "Frontend Engineer, XCMG"],
  ["Domain", "Enterprise dashboards and Industrial IoT"],
  ["Looking for", "Frontend, React.js and Full-Stack roles"],
];

export const capabilities = [
  {
    title: "Enterprise dashboards",
    text: "Real-time dashboards that combine REST APIs, interactive charts and tables so teams can monitor operations and decide faster.",
    proof: "Customer Cloud Dashboard, IoT Revenue Dashboard",
  },
  {
    title: "Data visualization and maps",
    text: "Analytics views with Apache ECharts and Chart.js, and live machine tracking on Leaflet.js maps showing location and status.",
    proof: "Used daily on XCMG’s IIoT platform",
  },
  {
    title: "Scalable React architecture",
    text: "Reusable components, custom hooks and Redux Toolkit state, so large applications stay consistent and easy to maintain.",
    proof: "Shared across multiple production apps",
  },
  {
    title: "Frontend performance",
    text: "Lazy loading, code splitting, caching, pagination and optimized rendering to keep data-heavy screens responsive.",
    proof: "25% performance improvement on the Revenue Dashboard",
  },
  {
    title: "Secure, role-based access",
    text: "JWT authentication and Role-Based Access Control so each user role sees only what it should.",
    proof: "ISO Audit System, Concrete Management System",
  },
  {
    title: "Automation and reporting",
    text: "Power Automate and Dynamics 365 workflows, plus an Excel-to-PDF report generator with embedded photos.",
    proof: "Removed manual follow-ups and report compilation",
  },
];
