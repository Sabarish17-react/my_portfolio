import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <footer className="wrap py-8 text-sm text-steel">© {new Date().getFullYear()} Sabarisan S. Built with React and Tailwind.</footer>
    </>
  );
}
