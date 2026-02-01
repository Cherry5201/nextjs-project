import Image from "next/image";
import catIntro from "./cat-intro.jpg";

export default function Intro() {
  return (
    <section id="intro" className="py-20">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight text-orange-900 sm:text-6xl">
            Cat Facts & <span className="text-orange-500">Introduction</span>
          </h1>
          
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-orange-800">What Is a Cat?</h2>
            <p className="text-lg leading-relaxed text-orange-900/80">
              The domestic cat (Felis catus) is a small carnivorous mammal that has lived alongside humans for over 9,000 years. Known for their agility, intelligence, and independence, cats are one of the most popular companion animals in the world.
            </p>
          </div>
        </div>

        <div className="relative aspect-square overflow-hidden rounded-3xl border-4 border-orange-100 bg-orange-50 shadow-xl">
          <Image
            src={catIntro}
            alt="Cat Introduction"
            fill
            className="object-cover"
          /> 
        </div>
      </div>
    </section>
  );
}