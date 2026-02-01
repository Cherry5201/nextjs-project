export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="rounded-3xl bg-gradient-to-br from-orange-100 to-amber-100 p-10 text-center">
        <h2 className="text-3xl font-bold text-orange-900">Contact Us</h2>
        <p className="mt-4 text-lg text-orange-900/80">
          Have questions? Email me at <span className="font-semibold text-orange-600">ctiu@addu.edu.ph</span>.
        </p>
        <a href="mailto:ctiu@addu.edu.ph" className="mt-8 inline-block rounded-full bg-orange-600 px-8 py-4 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-orange-700 hover:shadow-orange-500/25">
          Send Email
        </a>
      </div>
    </section>
  );
}