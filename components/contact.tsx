export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="rounded-3xl bg-gradient-to-br from-pink-50 to-violet-50 p-10 text-center dark:from-pink-950/20 dark:to-violet-950/20">
        <h2 className="text-3xl font-bold">Let's Connect</h2>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Have a project in mind or just want to say hi?
        </p>
        <a href="mailto:yourname@email.com" className="mt-8 inline-block rounded-full bg-pink-600 px-8 py-4 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-pink-700 hover:shadow-pink-500/25">
          Say Hello 👋
        </a>
      </div>
    </section>
  );
}