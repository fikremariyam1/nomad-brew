
import { Bean } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Bean className="w-12 h-12 mx-auto mb-6 text-primary animate-[scale-in_0.6s_ease-out] hover:rotate-12 transition-transform duration-300" />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 animate-[fade-in_0.8s_ease-out]">
            Our Coffee Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-[fade-in_1s_ease-out] hover:scale-105 transition-transform duration-300">
            Since 2015, we've been dedicated to bringing you the finest coffee
            experience. Our expert baristas carefully select and roast beans from
            sustainable sources, ensuring each cup tells a story of quality and
            craftsmanship.
          </p>
        </div>
      </div>
    </section>
  );
};
