import ImageWithFallback from "./ImageWithFallback";





export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/hero1.jpg"
          alt="Beautiful henna art on hands"
          className="w-full h-230 object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 mt-10 ">
           Mehndi Studios
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
          Where culture meets creativity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-3 bg-muted text-muted-foreground shadow-lg rounded-lg hover:bg-accent/90 hover:text-muted transition-colors duration-200"
          >
            View Gallery
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-white shadow-lg text-white rounded-lg hover:bg-accent/90 hover:text-muted transition-colors duration-200"
          >
            Book Session
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-1 h-12 bg-white/50 rounded-full"></div>
      </div>
    </section>
  );
}