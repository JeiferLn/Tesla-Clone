import { ModelSSection } from "@/components/model-s-section";
import { Model3Section } from "@/components/model-3-section";
import { ModelXSection } from "@/components/model-x-section";
import { ModelYSection } from "@/components/model-y-section";
import { CybertruckSection } from "@/components/cybertruck-section";
import { Powerwall } from "@/components/powerwall";

export default function Home() {
  return (
      <main className="overflow-x-hidden relative w-full h-screen snap-y snap-mandatory">
        <div className="snap-center">
          <ModelSSection />
        </div>
        <div className="snap-center">
          <Model3Section />
        </div>
        <div className="snap-center">
          <ModelXSection />
        </div>
        <div className="snap-center">
          <ModelYSection />
        </div>
        <div className="snap-center">
          <CybertruckSection />
        </div>
        <div className="snap-center">
          <Powerwall />
        </div>
      </main>
  );
}
