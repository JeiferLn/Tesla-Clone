import { ModelYSection } from "@/components/model-y-section";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="overflow-x-hidden relative w-full h-screen snap-y snap-mandatory">
      <div className="snap-center">
        <HeroSection />
      </div>
      <div className="snap-center">
        <ModelYSection />
      </div>
    </main>
  );
}
