import { Footprints, VolumeX, Heart, Home } from "lucide-react";

export default function Characteristics() {
  return (
    <section className="py-20">
      <div className="grid gap-12 md:grid-cols-2">
        
        {/* Basic Characteristics */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-orange-900">Basic Characteristics</h2>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 space-y-4">
            <ul className="space-y-4 text-lg text-orange-900/80">
              <li><strong className="text-orange-600">Average lifespan:</strong> 12–18 years (indoor cats often live longer)</li>
              <li><strong className="text-orange-600">Weight:</strong> 2.5–7 kg (varies by breed)</li>
              <li><strong className="text-orange-600">Personality:</strong> Independent, curious, alert, territorial</li>
              <li><strong className="text-orange-600">Communication:</strong> Vocal sounds, body posture, tail, ears, and eyes</li>
            </ul>
          </div>
        </div>

        {/* Why Cats Make Great Pets */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-orange-900">Why Cats Make Great Pets</h2>
          <div className="bg-gradient-to-br from-orange-100 to-amber-50 p-8 rounded-3xl shadow-sm space-y-4">
            <ul className="space-y-4 text-lg text-orange-900/80">
              <li className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                <Footprints className="text-orange-600" /> No daily walks required
              </li>
              <li className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                <VolumeX className="text-orange-600" /> Quiet and apartment-friendly
              </li>
              <li className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                <Heart className="text-orange-600" /> Form strong bonds with their owners
              </li>
              <li className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                <Home className="text-orange-600" /> Highly adaptable to different living environments
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}