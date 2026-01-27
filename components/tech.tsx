export default function Tech() {
  const skills = ["Next.js 14", "React", "Tailwind CSS", "TypeScript", "GitHub", "Vercel", "PostgreSQL", "Figma"];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold">Tech Stack</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div key={skill} className="rounded-xl border border-zinc-200 bg-white px-5 py-3 font-medium text-zinc-700 shadow-sm transition-colors hover:border-pink-300 hover:text-pink-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-pink-700">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}