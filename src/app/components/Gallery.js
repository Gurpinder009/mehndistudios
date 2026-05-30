import ImageWithFallback from "./ImageWithFallback";


 export default function Gallery() {
  const galleryImages = [
    {
      src: "/traditional.jpg",
      alt: "Intricate henna design",
      category: "Traditional"
    },
    {
      src: "/bridal.jpg",
      alt: "Bridal henna mehndi",
      category: "Bridal"
    },
    {
      src: "/modern.jpg",
      alt: "Geometric henna tattoo",
      category: "Modern"
    },
     {
      src: "/traditional1.jpg",
      alt: "Intricate henna design",
      category: "Traditional"
    },
    {
      src: "/bridal1.jpg",
      alt: "Bridal henna mehndi",
      category: "Bridal"
    },
    {
      src: "/modern1.jpg",
      alt: "Geometric henna tattoo",
      category: "Modern"
    }, 
  
  ];

  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-foreground">Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of beautiful henna designs showcasing traditional, bridal, and modern styles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-muted-foreground border border-card"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 scale-98 transition-transform duration-300 bg-green-700 rounded-sm" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{image.category}</p>
                  <p className="text-xs opacity-90">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
