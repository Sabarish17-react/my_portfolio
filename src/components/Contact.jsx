import { Mail, Phone, Linkedin, Github, MessageCircle, MapPin } from "lucide-react";
import { profile } from "../data";

const rows = [
  [Mail, profile.email, `mailto:${profile.email}`],
  [Phone, profile.phone, `tel:+${profile.phoneRaw}`],
  [MessageCircle, "Message on WhatsApp", `https://wa.me/${profile.phoneRaw}`],
  [Linkedin, "linkedin.com/in/sabarisan-s", profile.linkedin],
  [Github, "github.com/Sabarish17-react", profile.github],
];

export default function Contact() {
  return (
    <section id="contact" className="sect bg-ink text-white">
      <div className="wrap grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-extrabold">Contact</h2>
          <p className="mt-5 max-w-md text-white/75">I am open to Frontend Developer, React.js Developer and Full-Stack Developer roles in enterprise software, industrial technology, IoT, SaaS and data visualization. Please reach out by email, phone or LinkedIn.</p>
          <p className="mt-6 flex items-center gap-2 text-white/75"><MapPin size={18} /> {profile.location}</p>
        </div>
        <ul className="space-y-3">
          {rows.map(([Icon, label, href]) => (
            <li key={label}>
              <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 rounded-lg border border-white/15 px-5 py-4 hover:border-signal">
                <Icon size={20} className="text-signal" /> {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
