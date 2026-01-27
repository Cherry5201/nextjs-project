import Hero from "../components/hero";
import About from "../components/about";
import Projects from "../components/projects";
import Tech from "../components/tech";
import Contact from "../components/contact";


export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6">
      <Hero />
      <About />
      <Projects />
      <Tech />
      <Contact />
    </main>
  );
}