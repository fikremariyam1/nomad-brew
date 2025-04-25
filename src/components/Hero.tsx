
import { Coffee } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-16 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-[fade-in_0.6s_ease-out]">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold">
              Craft Coffee <br />
              <span className="text-primary animate-[slide-in-right_0.8s_ease-out]">
                Brewed to Perfection
              </span>
            </h1>
            <p className="text-lg text-muted-foreground animate-[fade-in_1s_ease-out]">
              Experience the art of coffee brewing with our carefully selected beans
              and artisanal methods.
            </p>
            <Button className="gap-2 animate-[scale-in_1.2s_ease-out]" size="lg">
              <Coffee className="h-5 w-5" />
              Explore Our Brews
            </Button>
          </div>
          <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
              alt="Coffee brewing"
              className="absolute inset-0 w-full h-full object-cover animate-[fade-in_1.4s_ease-out]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
