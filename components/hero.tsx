import { Github, Globe, ArrowRight } from "lucide-react";
import Image from "next/image";


export default function Hero() {
  return (
    <section className="grid grid-cols-1 gap-8 py-24 md:grid-cols-2 md:items-center">
      <div className="space-y-6">
        <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-600 dark:bg-pink-900/30 dark:text-pink-400">
          Available for work
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
          Hi, I’m <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Your Name</span> 👋
        </h1>
        <p className="max-w-lg text-lg text-zinc-600 dark:text-zinc-400">
          A creative developer crafting beautiful web experiences with Next.js, Tailwind, and a touch of magic.
        </p>
        <div className="flex gap-4">
          <a href="#projects" className="flex items-center gap-2 rounded-full bg-pink-600 px-6 py-3 font-medium text-white transition-transform hover:scale-105 hover:bg-pink-700">
            View Work <ArrowRight size={18} />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 font-medium text-zinc-900 transition-transform hover:scale-105 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white">
            <Github size={18} /> GitHub
          </a>
        </div>
      </div>
      <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border-4 border-pink-100 dark:border-pink-900/30 md:mx-0">
        {/* <Image
          src="https://placehold.co/600x600/pink/white?text=Me"
          alt="Profile"
          fill
          className="object-cover"
          priority
        /> */}
      </div>
    </section>
  );
}