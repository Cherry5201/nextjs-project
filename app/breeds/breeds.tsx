import Image from "next/image";
import britishShorthair from "../../images/cat-britishshorthair.jpg";
import americanShorthair from "../../images/cat-americanshorthair.jpg";
import siamese from "../../images/cat-siamese.jpg";
import ragdoll from "../../images/cat-ragdoll.jpg";
import maineCoon from "../../images/cat-maine-coon.jpg";
import persian from "../../images/cat-persian.jpg";
import bengal from "../../images/cat-bengal.jpg";
import sphynx from "../../images/cat-sphynx.jpg";
import domestic from "../../images/cat-domestic.jpg";

export default function Breeds() {
  const breeds = [
    {
      name: "British Shorthair",
      personality: "Calm, gentle, independent",
      traits: "Round face, dense coat, sturdy body",
      bestFor: "Busy owners, first-time cat owners",
      src: britishShorthair
    },
    {
      name: "American Shorthair",
      personality: "Friendly, playful, intelligent",
      traits: "Strong physique, adaptable, low maintenance",
      bestFor: "Families, homes with children",
      src: americanShorthair
    },
    {
      name: "Siamese",
      personality: "Affectionate, vocal, social",
      traits: "Blue eyes, color-point coat",
      bestFor: "Owners who enjoy interaction and companionship",
      src: siamese
    },
    {
      name: "Ragdoll",
      personality: "Gentle, loving, relaxed",
      traits: "Large size, blue eyes, long fur",
      bestFor: "People who want a very affectionate cat",
      src: ragdoll
    },
    {
      name: "Maine Coon",
      personality: "Friendly, smart, sociable",
      traits: "Very large body, fluffy tail, thick coat",
      bestFor: "Homes with enough space",
      src: maineCoon
    },
    {
      name: "Persian",
      personality: "Quiet, laid-back",
      traits: "Flat face, long coat, requires frequent grooming",
      bestFor: "Owners with time for daily care",
      src: persian
    },
    {
      name: "Bengal",
      personality: "Energetic, curious, active",
      traits: "Leopard-like pattern, athletic build",
      bestFor: "Owners who enjoy playful, active cats",
      src: bengal
    },
    {
      name: "Sphynx",
      personality: "Outgoing, affectionate",
      traits: "Hairless appearance, sensitive to cold, needs skin care",
      bestFor: "Owners comfortable with extra maintenance",
      src: sphynx
    },
    {
      name: "Mixed-Breed / Domestic Cat",
      personality: "Varies, often intelligent and resilient",
      traits: "Strong genetics, adaptable",
      bestFor: "Healthier, great for adoption, unique personalities",
      src: domestic
    }
  ];

  return (
    <section className="py-20">
      <h1 className="text-4xl font-bold text-orange-900 mb-12 text-center">Popular Cat Breeds</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {breeds.map((breed, index) => (
          <div key={index} className="group overflow-hidden rounded-3xl bg-white shadow-sm border border-orange-100 hover:shadow-xl hover:border-orange-300 transition-all duration-300 hover:scale-105">
            <div className="relative aspect-video bg-orange-50">
              <Image
                src={breed.src}
                alt={breed.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-orange-800">{breed.name}</h3>
              
              <div className="space-y-2 text-sm text-orange-900/80">
                <p><strong className="text-orange-600">Personality:</strong> {breed.personality}</p>
                <p><strong className="text-orange-600">Traits:</strong> {breed.traits}</p>
                <p><strong className="text-orange-600">Best for:</strong> {breed.bestFor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}