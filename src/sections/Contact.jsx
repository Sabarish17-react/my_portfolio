import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative pt-2 pb-10 scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="
    inline-flex items-center gap-3
    px-4 py-2 mb-6
    rounded-full
    border border-emerald-400/40
    bg-emerald-400/10
    text-emerald-400
    text-xs font-semibold tracking-wide
    shadow-[0_0_24px_rgba(16,185,129,0.25)]
  "
            >
              {/* Blinking Indicator */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              OPEN TO OPPORTUNITIES
            </motion.div>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Let’s build something meaningful together
            </h2>

            <p className="mt-5 text-sm sm:text-base text-white/65 leading-relaxed max-w-xl">
              I’m a React.js Developer with{" "}
              <span className="text-white font-medium">3.8+ years</span>
              of experience building enterprise dashboards, IoT platforms, and
              performance-critical frontend systems.
              <br />
              <br />
              If you’re hiring for a frontend or React role, I’d love to
              connect.
            </p>
          </motion.div>

          {/* RIGHT CONTACT STACK */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              rounded-2xl
              border border-white/15
              bg-white/5 backdrop-blur-xl
              p-6
            "
          >
            <ContactRow
              icon={Mail}
              label="Email"
              value="ssabarisan172@gmail.com"
              link="mailto:ssabarisan172@gmail.com"
            />

            <ContactRow
              icon={Phone}
              label="Phone"
              value="+91 74185 20429"
              link="tel:+917418520429"
            />

            <ContactRow
              icon={MessageCircle}
              label="WhatsApp"
              value="Chat on WhatsApp"
              link="https://wa.me/917418520429"
              highlight
            />

            <ContactRow
              icon={Linkedin}
              label="LinkedIn"
              value="linkedin.com/in/sabarisan-s"
              link="https://linkedin.com/in/sabarisan-s"
            />

            <ContactRow
              icon={MapPin}
              label="Location"
              value="Chennai, India"
              staticRow
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

/* ---------------------------------- */
/* Contact Row Component */
/* ---------------------------------- */

const ContactRow = ({
  icon: Icon,
  label,
  value,
  link,
  staticRow,
  highlight,
}) => {
  const Wrapper = staticRow ? "div" : "a";

  return (
    <Wrapper
      href={staticRow ? undefined : link}
      target={staticRow ? undefined : "_blank"}
      className={`
        group
        flex items-center gap-4
        py-4
        border-b border-white/10 last:border-b-0
        transition-all
        ${highlight ? "hover:bg-primary/10 rounded-xl px-3 -mx-3" : ""}
      `}
    >
      <div
        className={`
          h-10 w-10
          rounded-xl
          flex items-center justify-center
          ${highlight ? "bg-primary text-black" : "bg-white/10 text-primary"}
        `}
      >
        <Icon size={16} />
      </div>

      <div>
        <p className="text-[11px] text-white/50 uppercase tracking-wide">
          {label}
        </p>
        <p
          className={`
            text-sm font-medium
            ${highlight ? "text-primary" : "text-white"}
            group-hover:text-primary transition-colors
          `}
        >
          {value}
        </p>
      </div>
    </Wrapper>
  );
};
