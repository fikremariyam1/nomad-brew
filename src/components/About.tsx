
import { Bean } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center fade-in">
          <Bean className="w-12 h-12 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Our Coffee Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
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
