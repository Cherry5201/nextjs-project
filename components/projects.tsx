import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A minimal yet fancy portfolio built with Next.js App Router, Tailwind CSS, and Framer Motion.",
      tags: ["Next.js", "Tailwind", "React"],
      image: "https://placehold.co/600x400/pink/white?text=Portfolio"
    },
    {
      title: "E-Commerce Dashboard",
      description: "A modern dashboard for managing products and orders with real-time data visualization.",
      tags: ["React", "Chart.js", "Node.js"],
      image: "https://placehold.co/600x400/purple/white?text=Dashboard"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold">Featured Projects</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="group overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-all hover:border-pink-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-pink-900">
            <div className="relative aspect-video overflow-hidden">
              {/* <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" /> */}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold group-hover:text-pink-600 transition-colors">{project.title}</h3>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600 dark:bg-pink-900/20 dark:text-pink-300">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}