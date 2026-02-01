import Intro from "../components/intro";
import Characteristics from "../components/characteristics";
import Contact from "../components/contact";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl px-6 pt-10">
      <Intro />
      <Characteristics />
      <Contact />
    </main>
  );
}