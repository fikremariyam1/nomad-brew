
import { Card, CardContent } from "./ui/card";

export const Products = () => {
  const products = [
    {
      name: "Pour Over",
      description: "Clean, crisp, and full of natural flavors",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    },
    {
      name: "French Press",
      description: "Rich, full-bodied, and deeply satisfying",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    },
    {
      name: "Cold Brew",
      description: "Smooth, refreshing, and naturally sweet",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    },
  ];

  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
          Our Brewing Methods
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="fade-in overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-playfair font-bold mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
