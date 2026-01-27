import Image from "next/image";

export default function About() {
  return (
    <section className="py-20">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg rotate-3 transition-transform hover:rotate-0">
          {/* <Image
            src="https://placehold.co/600x400/pink/white?text=Coding"
            alt="About Me"
            fill
            className="object-cover"
          /> */}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-pink-600 dark:text-pink-400">About Me</h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            I am a passionate student learning full‑stack web development. This portfolio is part of our FIDP requirement, showcasing my journey with GitHub, Vercel, and modern tools. I love turning complex problems into simple, beautiful, and intuitive designs.
          </p>
        </div>
      </div>
    </section>
  );
}