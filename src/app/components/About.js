import { Heart, Star, Users} from "lucide-react";

import ImageWithFallback from "./ImageWithFallback";


export default function About() {
  const stats = [
    { icon: Heart, number: "500+", label: "Happy Clients" },
    { icon: Star, number: "5", label: "Years Experience" },
    { icon: Users, number: "200+", label: "Events Covered" },
  ];

return (
  <section id="about" className="py-16 md:py-20 bg-primary">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 text-foreground font-semibold">
            Why Brides Trust Us?
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
            <b>Personalized Designs with Meaning</b> – Every bride’s story is unique, and we bring that story to life through customized henna that reflects your journey, culture, and emotions.
          </p>

          <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
            <b>Professional, Comfortable & Reliable Service</b> – From timely bookings to smooth application, we ensure a stress-free experience so you can fully enjoy your special day.
          </p>

          <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
            <b>Long-Lasting & Beautiful Stain</b> – We use high-quality natural organic henna for deep, rich color, ensuring your Mehndi looks stunning from your wedding day and beyond.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="/hero3.jpg"
              alt="Henna artist at work"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}