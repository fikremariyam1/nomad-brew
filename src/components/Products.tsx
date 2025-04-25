
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
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12 animate-[fade-in_0.6s_ease-out]">
          Our Brewing Methods
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-[fade-in_${0.6 + index * 0.2}s_ease-out]`}
            >
              <div className="aspect-video relative overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
