
import { Coffee } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-16 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              Craft Coffee <br />
              <span className="text-primary">Brewed to Perfection</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the art of coffee brewing with our carefully selected beans
              and artisanal methods.
            </p>
            <Button className="gap-2" size="lg">
              <Coffee className="h-5 w-5" />
              Explore Our Brews
            </Button>
          </div>
          <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden fade-in">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
              alt="Coffee brewing"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
