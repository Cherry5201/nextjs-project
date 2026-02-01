import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative aspect-square overflow-hidden rounded-3xl border-4 border-orange-100 bg-orange-50 shadow-xl">
          {/* Add your image here */}
          {/* <Image src="/your-image.jpg" alt="Your Name" fill className="object-cover" /> */}
          <div className="flex h-full items-center justify-center text-orange-300">Insert Author Image Here</div>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-orange-900">About The Author</h2>
          <p className="text-lg leading-relaxed text-orange-900/80">
            Write a brief introduction about yourself here. You can include your interests, background, or anything else you'd like to share!
          </p>
        </div>
      </div>
    </section>
  );
}