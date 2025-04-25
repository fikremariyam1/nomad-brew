
import { MapPin, Clock, Instagram, Facebook } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
            Visit Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="fade-in">
              <div className="flex items-start gap-4 mb-8">
                <MapPin className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    123 Coffee Street
                    <br />
                    Brewville, BW 12345
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-8">
                <Clock className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 7am - 7pm
                    <br />
                    Saturday - Sunday: 8am - 6pm
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-primary hover:text-primary/80">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-primary hover:text-primary/80">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="h-[300px] md:h-[400px] rounded-lg overflow-hidden fade-in">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
                alt="Our coffee shop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
