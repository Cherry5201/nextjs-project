import { Brain, Candy, Ruler, Moon, Eye, Fingerprint, Music } from "lucide-react";

export default function Facts() {
  const facts = [
    {
      title: "1. Brain Similarity",
      desc: "Cats’ brains are more similar to humans than dogs. Cats and humans share similar brain structures related to emotions.",
      icon: Brain
    },
    {
      title: "2. No Sweet Tooth",
      desc: "Cats cannot taste sweetness. They lack the gene needed to detect sweet flavors.",
      icon: Candy
    },
    {
      title: "3. Whiskers are Tools",
      desc: "A cat’s whiskers are measuring tools. They are about the same width as a cat’s body and help them judge spaces.",
      icon: Ruler
    },
    {
      title: "4. Sleep Experts",
      desc: "Cats sleep 12–16 hours a day. This helps conserve energy for hunting.",
      icon: Moon
    },
    {
      title: "5. The Slow Blink",
      desc: "Slow blinking means trust. When a cat slowly blinks at you, it’s a sign of affection and trust.",
      icon: Eye
    },
    {
      title: "6. Unique Nose Prints",
      desc: "Every cat’s nose print is unique, just like human fingerprints.",
      icon: Fingerprint
    },
    {
      title: "7. The Power of Purring",
      desc: "Purring isn’t only for happiness. Cats also purr when stressed, injured, or sick as a way to calm themselves.",
      icon: Music
    }
  ];

  return (
    <section className="py-20 bg-orange-50 rounded-3xl my-10 px-8">
      <h2 className="text-3xl font-bold text-orange-900 mb-10 text-center">Fun Facts About Cats</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {facts.map((fact, index) => {
          const Icon = fact.icon;
          return (
          <div 
            key={index} 
            className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <div className="mb-4 inline-block rounded-full bg-orange-100 p-3 text-orange-600">
              <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-orange-600 mb-3">{fact.title}</h3>
            <p className="text-orange-900/70">{fact.desc}</p>
          </div>
        )})}
      </div>
    </section>
  );
}