import Image from "next/image";

export default function Breeds() {
  const breeds = [
    {
      name: "British Shorthair",
      personality: "Calm, gentle, independent",
      traits: "Round face, dense coat, sturdy body",
      bestFor: "Busy owners, first-time cat owners"
    },
    {
      name: "American Shorthair",
      personality: "Friendly, playful, intelligent",
      traits: "Strong physique, adaptable, low maintenance",
      bestFor: "Families, homes with children"
    },
    {
      name: "Siamese",
      personality: "Affectionate, vocal, social",
      traits: "Blue eyes, color-point coat",
      bestFor: "Owners who enjoy interaction and companionship"
    },
    {
      name: "Ragdoll",
      personality: "Gentle, loving, relaxed",
      traits: "Large size, blue eyes, long fur",
      bestFor: "People who want a very affectionate cat"
    },
    {
      name: "Maine Coon",
      personality: "Friendly, smart, sociable",
      traits: "Very large body, fluffy tail, thick coat",
      bestFor: "Homes with enough space"
    },
    {
      name: "Persian",
      personality: "Quiet, laid-back",
      traits: "Flat face, long coat, requires frequent grooming",
      bestFor: "Owners with time for daily care"
    },
    {
      name: "Bengal",
      personality: "Energetic, curious, active",
      traits: "Leopard-like pattern, athletic build",
      bestFor: "Owners who enjoy playful, active cats"
    },
    {
      name: "Sphynx",
      personality: "Outgoing, affectionate",
      traits: "Hairless appearance, sensitive to cold, needs skin care",
      bestFor: "Owners comfortable with extra maintenance"
    },
    {
      name: "Mixed-Breed / Domestic Cat",
      personality: "Varies, often intelligent and resilient",
      traits: "Strong genetics, adaptable",
      bestFor: "Healthier, great for adoption, unique personalities"
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
                src={`https://placehold.co/600x400/orange/white?text=${breed.name.replace(/ /g, '+')}`}
                alt={breed.name}
                fill
                className="object-cover"
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