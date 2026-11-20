import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data";

const links = [
  ["Strengths", "#strengths"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <nav className="wrap flex h-16 items-center justify-between" aria-label="Main">
        <a href="#top" className="font-display text-lg font-extrabold">Sabarisan S</a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-sm font-medium hover:text-steel">{l}</a>
          ))}
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-signal !py-2">Resume</a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="wrap flex flex-col gap-4 pb-5 md:hidden">
          {links.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="font-medium">{l}</a>
          ))}
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-signal w-fit">Resume</a>
        </div>
      )}
    </header>
  );
}
